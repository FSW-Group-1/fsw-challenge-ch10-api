const { User_account } = require('../models')


module.exports = {
    registerPost: async (req, res) => {
        const { email, username, password } = req.body;

        try {
            var user = await User_account.findOne({
                where: { email }
            })

            if(user){
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
            User_account.register()
        } catch (error) {
            return res.status(400).json({
                result: 'failed',
                message: error.message
            })
        }
        
    }
}

