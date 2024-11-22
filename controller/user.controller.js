const userService = require('../service/user.service');

exports.register = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Call the service to register the user
        const user = await userService.registerUser(email, password);

        // Send success response
        return res.json({ 
            status: true, 
            message: "User registered successfully", 
        });
    } catch (error) {
        // Send error response
        return res.status(500).json({ 
            status: false, 
            message: "An error occurred during registration", 
            error: error.message 
        });
    }
};

exports.login = async(req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await userService.checkUser(email);

        if(!user){
            throw new Error('User does not exist');
        }else{
            const isMatch = await user.comparePassword(password)

            if(isMatch == false){
                throw new Error('Invalid password')
            }else{
                const tokenData = {
                    _id: user._id,
                    email: user.email,
                } 

                const token = await userService.generateToken(tokenData, 'secretKey', '1h');
                
                res.status(200).json({status: true, id: user._id, email: user.email, token : token})
            }
        }
    } catch (error) {
        throw error; 
    }
}
