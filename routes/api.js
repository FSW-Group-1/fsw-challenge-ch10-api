var express = require('express');
var router = express.Router();
const authController = require('../controllers/authController')

router.post('/register', authController.registerPost)




module.exports = router;
