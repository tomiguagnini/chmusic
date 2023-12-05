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


module.exports = {createUser}