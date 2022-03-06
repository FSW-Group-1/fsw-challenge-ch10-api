const { User_account, Details } = require('../models')

module.exports = {
    updatePoints: async(req, res) =>{
        try {
            let userDetail = await Details.findOne({
                attributes: ['point'],
                where: {
                    gameID: req.body.gameID, userID: req.user.id
                }
            });

            let user = await User_account.findOne({
                attributes: ['point'],
                where: {
                    id: req.user.id
                }  
            })
            if(!userDetail){
                // console.log('IF NOT EXIST RUN HERE')
                Details.create({
                    gameID: req.body.gameID,
                    userID: req.user.id,
                    point: req.body.point
                })
                .then(User_account.update({ point: parseInt(req.body.point) + user.point}, {where: {id: req.user.id}}))

                res.status(200)
                .json({
                        result: 'sucess',
                        message: 'point created',})
            }
            else{
                Details.update({
                    point: parseInt(req.body.point) + userDetail.point
                },
                {
                    where: {
                        userID: req.user.id,
                        gameID: req.body.gameID
                    }
                })
                .then(User_account.update({ point: parseInt(req.body.point) + user.point}, {where: {id: req.user.id}}))
    
                res.status(200)
                .json({
                        result: 'success',
                        message: 'point updated!',})
            }
            

        } catch (error) {
            return res.status(500).json({
                result: 'Server failed',
                error: error.message,
              });
        }
    },
}