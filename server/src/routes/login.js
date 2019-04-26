var express = require('express')
var router = express.Router()

// define the home page route
router.get('/', (req, res) => {
    res.send('login please')
});

// define the about route
router.post('/', (req, res) => {
  //res.send('About birds')
  let email = req.body.txtemail;
  let pwd = req.body.txtpwd;
  console.log(email);
  console.log(pwd);

  if (email === 'ikram@gmail.com' && pwd === '12345') {
      res.send({ message: 'login succefully' });
  }
  else {
      res.send({ failmessage: 'Invalid user name or password' });
  }

})

module.exports = router