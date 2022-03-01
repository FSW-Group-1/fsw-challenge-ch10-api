const { User_account } = require('../models')


module.exports = {
    registerPost: async (req, res) => {
        const { username, email, password} = req.body
        
        try {
            var user = await User_account.findOne({
                where: {
                    email: req.body.email
                }
            })

            if(user){
                console.log('here')
                return res.status(400).json({
                    result: 'failed',
                    message: 'Email already existed'
                })
            }
        } catch (error) {
            return res.status(500).json({
                result: 'failed',
                error: error.message,
              });
        }

        try {
            await User_account.register(req.body)
                .then(
                    res.status(201).json({
                        message: 'Account has successfully registered!',
                        data: {
                          email,
                          username,
                        }
                    })
                )
        } catch (error) {
            return res.status(400).json({
                result: 'failed',
                message: error.message
            })
        }
        
    }
}

