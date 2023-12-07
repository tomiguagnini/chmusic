const { secretKey } = require("../config/variables")
const User = require("../models/user")
const jwt = require('jsonwebtoken');

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

const login = async (req, res) => {
    const { Email, Password } = req.body;
  
    try {
      // Find the user with the provided email
      const user = await User.findOne({ where: { Email } });
  
      // Check if the user exists and the password is correct
      if (user && user.validPassword(Password)) {
        // Generate a JWT token
        const token = jwt.sign({ id: user.id, email: user.email }, secretKey, {
          expiresIn: '24h', // Set expiration time
        });
  
        res.json({ token });
      } else {
        res.status(401).json({ error: 'Invalid email or password' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


module.exports = {
    createUser,
    create_user,
    get_user,
    login
}