const jwt = require('jsonwebtoken');
const config = require('../config/config');


module.exports = function(req, res, next) {
    //Get Token from header
    const token = req.header('x-auth-token');
    
    console.log(`TOKEN IN AUTH MIDDLEWARE ROUTE${token}`)    
    console.log(`THE ENTIRE REQ ${req}`)    

    // Check if no token
    if(!token) {
        console.log('NO TOKEN IN SERVER MIDDLEWARE')
 
        return res.status(401).json({ msg: 'No token, authorization denied'})
    }
     
    //Verify token
    try {
        console.log(`TOKEN IN SERVER MIDDLEWARE HERE `)
  
        var decoded = jwt.verify(token, global.gConfig.jwtSecret);
        console.log(`DECODED IN AUTH MIDDLEWARE ROUTE${JSON.stringify(decoded)}`)
    
        req.user = decoded.user;
        next();
    }catch(err){
        res.status(401).json({ msg: 'Token is not valid'});
        console.log(`TOKEN IN SERVER EROR `)

    }

}