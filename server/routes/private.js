
const router = require('express').Router()
const auth = require('../middleware/auth2');

router.get('/',auth, (req,res) => {
    console.log('you hit private')
    let obj = {
        message: 'This is a secret route',
        secret: 'you may pass',
        _id: req._id
    };

    res.status(200).send(obj);
})

module.exports = router;