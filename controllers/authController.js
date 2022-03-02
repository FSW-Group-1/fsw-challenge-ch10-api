const { User_account } = require('../models')


module.exports = {
    register: async (req, res) => {
        const { username, email, password} = req.body
        
        try {
            var user = await User_account.findOne({
                where: {
                    email
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
    },

    login: async(req, res) => {
        try {
            User_account
            .authenticate(req.body)
            .then(user => {
                res.status(201).json({
                    result: "Login success",
                    message: "Login successfully",
                    data: {
                        id: user.id, 
                        username: user.username, 
                        accessToken: user.generateToken()
                    },
                });
            })
            .catch(error => {
                res.status(400).json({
                    result: 'failed',
                    message: error.message
                })
            })
        } catch (error) {
            return res.status(500).json({
                result: 'Server failed',
                error: error.message,
              });
        }
    },

    currentProfile: async (req, res) => {
        try {
            const currentUser = await User_account.findByPk(req.user.id)
            res.status(200).json({
                success: true,
                currentUser,
              });
        } catch (error) {
            return res.status(500).json({
                result: 'Server failed',
                error: error.message,
              });
        }
    }
}

