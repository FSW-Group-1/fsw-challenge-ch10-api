var express = require('express');
var router = express.Router();
const api = require('../controllers/apiController');
const game = require('../controllers/gameController');
const authorize = require('../middlewares/authorize');
const restrict = require('../middlewares/restrict')

router.post('/register', api.register)
router.post('/login', api.login)

//Profile
router.get('/me', restrict, api.currentProfile) //Ini disatuin sama playedGame juga bisa
router.post('/me/update', restrict, api.updateProfile)

router.get('/all', api.showAllProfile)

//Ini method untuk update game
router.post('/score', restrict, game.updatePoints)
router.get('/played', restrict, game.playedGame)

//Profile list method
router.get('/users', game.allUser) //ini bisa dipake untuk gantiin '/all' + details
router.post('/search', api.search)

//Leaderboard
router.get('/leaderboard/:id', game.getLeaderboardGame)

router.get('/verifytoken', restrict, api.verify)





module.exports = router;
