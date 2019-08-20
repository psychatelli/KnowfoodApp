const jwt = require('jsonwebtoken');
const config = require('../config/config');
const User = require('../models/user');


module.exports = (req, res, next) => {
    console.log('MIDDLEWARE 2 FIRED')

    const { token } = req.body;
    console.log(`THE TOKEN ${token}`)
    try{
        let payload = jwt.verify(token, global.gConfig.jwtSecret)

        console.log(`USER  ${JSON.stringify(payload.user.id)}`)
        const ID = payload.user.id
        User.findById(ID)
        .then((user) => {
            if(!user){
                console.log('no user')
                return res.status(401).send()
            }
            req._id = ID;
            next()
            
        })
        .catch(err =>{
            if(err){
                return res.status(401).send(err)
            }
            return res.status(401).send(err)
        })

    }catch(err){
        return res.status(401).send(err)
    }


    

}