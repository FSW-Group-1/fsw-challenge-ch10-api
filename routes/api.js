var express = require('express');
var router = express.Router();
const authController = require('../controllers/authController')
const restrict = require('../middlewares/restrict')

router.post('/register', authController.register)
router.post('/login', authController.login)

router.get('/me', restrict, authController.currentProfile)
router.get('/all', authController.showAllProfile)
router.post('/me/update', restrict, authController.updateProfile)



module.exports = router;
