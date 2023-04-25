const users = require("../utils/users")


function Login(req, res) {

    const email = req.query.email;
    const password = req.query.password;
  

    const user = users.find((user) => user.email === email && user.password === password);
  
   
    if (user) return res.status(200).json({access : true});
   

    return res.status(200).json({ access:false });
   
  }


module.exports = {
    Login,
}