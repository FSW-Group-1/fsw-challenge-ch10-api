var express = require('express');
var router = express.Router();
const api = require('../controllers/apiController')
const restrict = require('../middlewares/restrict')

router.post('/register', api.register)
router.post('/login', api.login)

router.get('/me', restrict, api.currentProfile)
router.get('/all', api.showAllProfile)
router.post('/me/update', restrict, api.updateProfile)
router.post('/score', restrict, api.updateDetails)



module.exports = router;
