const mercadopago = require("mercadopago");
const Purchase = require("../models/purchase");
const Song = require("../models/song");
const User = require("../models/user");
const { createUser } = require("../controllers/user");
const { apiKey, clientUrl, app_host } = require("../config/variables");

mercadopago.configure({
    access_token: apiKey,
});

const getAllPurchase = async (req, res) => {
    try {
        const purchases = await Purchase.findAll({
            include: [
                { model: Song, attributes: { exclude: ["File"] } },
                { model: User, attributes: { exclude: ["password"] } },
            ],
            order: [["createdAt", "DESC"]],
        });
        res.json(purchases);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
};

const createPreference = async (req, res) => {
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
        metadata: {
            user: user,
        },
        notification_url: app_host + "/webhook",
        back_urls: {
            success: clientUrl,
            failure: clientUrl,
            pending: clientUrl,
        },
        
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
};

const createPurchase = async (data) => {
    try {
        const State = data.body.status;
        const items = data.body.additional_info.items;
        const payer = data.body.payer;
        const reqUser = data.body.metadata.user;
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
            FirstName: reqUser.first_name || payer.first_name,
            LastName: reqUser.last_name || payer.last_name,
            Email: reqUser.email || payer.email,
            Phone:
                reqUser.phone ||
                payer.phone.extension +
                payer.phone.area_code +
                payer.phone.number,
            Dni: reqUser.dni,
        });

        await purchase.setUser(user);

        return purchase;

    } catch (error) {
        console.error(error);
    }
};

const webhook = async (req, res) => {
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
};





module.exports = {
    getAllPurchase,
    createPreference,
    createPurchase,
    webhook,
};
