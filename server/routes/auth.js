
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const AuthorizedUser = require('../middleware/AuthorizedUser');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const config = require('../config/config');
 

router.post('/getuser', AuthorizedUser,  async (req, res) => {
  console.log(`fired api/auth route in server routes`)

    try{

      const user = await User.findById(req.user.id).select('-pssword');
      res.json(user);
      console.log(res.json(user))
    }catch(err) {
      console.error(err.message);
      res.status(500).send('Server Error 1')
    }
  })






//@route POST api/auth
//@desc 
//@access Public
router.get('/', auth,  async (req, res) => {
  console.log(`fired api/auth route in server routes`)

    try{
      console.log(`tried to get user. heres value: ${req.user.id}`)

      const user = await User.findById(req.user.id).select('-pssword');
      res.json(user);

    }catch(err) {
      console.error(err.message);
      res.status(500).send('Server Error 1')
    }
  })


//@route POST api/auth
//@desc Authenticate user and get token
//@access Public

router.post('/', [
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password is required').exists()
  ], 
  async (req, res) => {
  const errors = validationResult(req);

  if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array() })
  }


  const { email, password } = req.body;
try {
  //See if User exists
  let user = await User.findOne({ email: email})

  if(!user) {
    return res.status(400).json({errors: [{ msg: 'Invalid Credentials - Need email'}] });
  }

  
    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
      return res.status(400).json({errors: [{ msg: 'Invalid Credentials - Invalid password'}] });

    }
  
    // Return jsonwebtoken
    const payload = {
      user: {
        id: user.id
      }
    }


  
    
      jwt.sign(payload, global.gConfig.jwtSecret, {expiresIn: 136000 }, (err, token) => {
          if(err) throw err;
          res.json({ token });
          // res.status(201).header('x-auth', token).send()
      })
        

      }catch(err) {
        console.error(err.message)
        res.status(500).send('Server Error 2')
      }

    })

   
module.exports = router;
