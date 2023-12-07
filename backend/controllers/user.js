const User = require("../models/user")

const createUser = async(data)=>{
    const {FirstName,LastName,Phone,Email,Dni,Password,} = data
    const user = await User.findOne({where:{Email:Email}})
    if (user){
        return user
    }else{
        const user = await User.create({FirstName,LastName,Phone,Email,Dni,Password})
        return user
    }
}

const create_user = async (req, res) => {
    try {
        const user = await createUser(req.body);
        res.json(user);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
}

const get_user = async (req,res)=>{
    try {
        const email = req.body.email
        if (!email){
            throw new Error('not found email in body')
        }
        const user = await User.findOne({where:{Email:email}})
        res.json(user)
    } catch (error) {
        res.json(error)
    }
}


module.exports = {
    createUser,
    create_user,
    get_user
}