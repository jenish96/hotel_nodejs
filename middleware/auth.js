const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
    if (req.headers.authorization) {

        let token = req.headers.authorization.split(' ')[1]
        let result = await jwt.verify(token, process.env.JWT_KEY)

        if (result) {
            next()
        } else {
            res.send("Invalid Token")
        }
    } else {
        res.send("Please Enter Token")
    }
}