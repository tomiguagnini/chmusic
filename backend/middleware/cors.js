const { clientUrl } = require("../config/variables");


const cors = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', `${clientUrl}`); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
  next();
}

module.exports ={
    cors
}