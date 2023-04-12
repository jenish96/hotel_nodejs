const UserColletion = require('../../model/user/index')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

exports.Post = async (req, res) => {

    const payload = req.body
    payload['password'] = bcrypt.hashSync(payload.password, 10)
    const user = await UserColletion.findOne({ username: payload.username })

    if (user) {
        res.send({ Message: "UserName is already Exists" })
    } else {

        const token = await jwt.sign(payload, process.env.JWT_KEY)
        const userResult = await UserColletion.insertMany(payload)

        res.send({ user: userResult, token: token })
    }
}