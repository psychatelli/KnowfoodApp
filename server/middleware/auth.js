const jwt = require('jsonwebtoken');
const config = require('../config/config');

 
module.exports = function(req, res, next) {
    //Get Token from header
    console.log('you hit auth')
    const token = req.header('x-auth-token');
    

    // Check if no token
    if(!token) {
        console.log('you have no token')

        return res.status(401).json({ msg: 'No token, authorization denied'})
    }
     
    //Verify token
    try {
  
        var decoded = jwt.verify(token, global.gConfig.jwtSecret);
        console.log('you decoded')
        req.user = decoded.user;
        next();
    }catch(err){
        res.status(401).json({ msg: 'Token is not valid'});

    }

}





