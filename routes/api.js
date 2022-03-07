var express = require('express');
var router = express.Router();
const api = require('../controllers/apiController');
const game = require('../controllers/gameController');
const authorize = require('../middlewares/authorize');
const restrict = require('../middlewares/restrict')


router.post('/register', api.register)
router.post('/login', api.login)

router.get('/me', restrict, api.currentProfile)
router.post('/me/update', restrict, authorize, api.updateProfile)
router.get('/all', api.showAllProfile)
router.post('/score', restrict, game.updatePoints)
router.get('/played', restrict, game.playedGame)
router.get('/users', game.allUser)
router.get('/leaderboard/:id', game.getLeaderboardGame)
router.post('/search', api.search)




module.exports = router;
