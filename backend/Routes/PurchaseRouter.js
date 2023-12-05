const express = require("express");
const router = express.Router();
const mercadopago = require("mercadopago");
const Purchase = require("../models/purchase");
const Song = require("../models/song");
const User = require("../models/user");
const { createUser } = require("../controllers/user");
const { apiKey, clientUrl, app_host } = require("../config/variables");

mercadopago.configure({
    access_token: apiKey,
});

router.post("/create_preference", async (req, res) => {
    const items = req.body.items.map((item) => {
        return {
            id: item.ID,
            title: item.Title,
            picture_url: item.Image,
            unit_price: item.Price,
            quantity: 1,
            currency_id: "ARS",
        };
    });
    const user = await createUser(req.body.user);

    let preference = {
        items,
        payer: {
            email: user.Email,
        },
        metadata:{
            user:user
        },
        notification_url: app_host + "/webhook",
        back_urls: {
            success: clientUrl,
            failure: clientUrl,
            pending: clientUrl,
        },
        //auto_return:"approved"
    };

    mercadopago.preferences
        .create(preference)
        .then(function (response) {
            res.json({
                id: response.body.id,
                url: response.body.init_point,
            });
        })
        .catch(function (error) {
            res.status(500);
            console.log(error);
        });
});

router.get("/user_mp", function (req, res) {
    // console.log(req.query);
    // res.json({
    //     Payment: req.query.payment_id,
    //     Status: req.query.status,
    //     MerchantOrder: req.query.merchant_order_id,
    // });
    console.log(req.body.email)
    mercadopago.customers.search({ options: { email: req.body.email } })
    .then((r)=>res.json(r))
    .catch(console.log);
});

router.post("/webhook", async (req, res) => {
    try {
        const payment = req.query;

        if (payment.type === "payment") {
            const data = await mercadopago.payment.findById(payment["data.id"]);
            createPurchase(data);
        }
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something goes wrong" });
    }
});

router.post("/purchase", async (req, res) => {
    //Recive en el body: user, items, state
    createPurchase(req.body);
    res.sendStatus(200);
});
const createPurchase = async (data) => {
    try {
        const State = data.body.status;
        const items = data.body.additional_info.items;
        const payer = data.body.payer;
        const reqUser = data.body.metadata.user
        console.log(State);
        const TotalPrice = items.reduce(
            (total, item) => total + Number(item.unit_price),
            0
        );

        const purchase = await Purchase.create({
            PurchaseDate: new Date(),
            TotalPrice,
            State,
        });
        items.forEach(async (item) => {
            const song = await Song.findByPk(item.id);
            await purchase.addSongs(song);
        });

        const user = await createUser({
            FirstName: reqUser.FirstName || payer.first_name,
            LastName: reqUser.LastName || payer.last_name,
            Email: reqUser.Email || payer.email,
            Phone: reqUser.Phone ||
                payer.phone.extension +
                payer.phone.area_code +
                payer.phone.number,
        });
        
        await purchase.setUser(user);

        return purchase;
    } catch (error) {
        console.error(error);
    }
};

router.get("/purchase", async (req, res) => {
    try {
        const purchases = await Purchase.findAll({
            include: [{ model: Song }, { model: User }],
        });
        res.json(purchases);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
});

module.exports = router;
