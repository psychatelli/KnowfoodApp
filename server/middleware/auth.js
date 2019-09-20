const jwt = require('jsonwebtoken');
const config = require('../config/config');

 
module.exports = function(req, res, next) {
    //Get Token from header
    const token = req.header('x-auth-token');
    

    // Check if no token
    if(!token) {
 
        return res.status(401).json({ msg: 'No token, authorization denied'})
    }
     
    //Verify token
    try {
  
        var decoded = jwt.verify(token, global.gConfig.jwtSecret);
    
        req.user = decoded.user;
        next();
    }catch(err){
        res.status(401).json({ msg: 'Token is not valid'});

    }

}






// module.exports = function(req, res, next) {
//     //Get Token from header
//     // console.log(`THE ENTIRE REQ ${JSON.stringify(req)}`)    
  
//     //  const token = req.header('x-auth-token');
//     const token = JSON.stringify(req.body)
//     const Mytoken = JSON.parse(token)
//     const TheToken = Mytoken.token
//      console.log(`TOKEN IN AUTH MIDDLEWARE ROUTE${TheToken}`)    
 
//     // Check if no token
//     if(!token) {
//         console.log('NO TOKEN IN SERVER MIDDLEWARE')
 
//         return res.status(401).json({ msg: 'No token, authorization denied'})
//     }
     
   
//     //Verify token
//     try {
//         console.log(`TOKEN IN SERVER MIDDLEWARE HERE `)
  
//         var decoded = jwt.verify(TheToken, global.gConfig.jwtSecret);
//         console.log(`DECODED IN AUTH MIDDLEWARE ROUTE${JSON.stringify(decoded)}`)
    
//         req.user = decoded.user;
//         next();
//     }catch(err){
//         res.status(401).json({ msg: 'Token is not valid'});
//         console.log(`TOKEN IN SERVER EROR `)

//     }

// }

