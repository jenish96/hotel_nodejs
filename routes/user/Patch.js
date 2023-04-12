const { ObjectId } = require('mongodb')
const UserColletion = require('../../model/user/index')

exports.Patch = async (req, res) => {
    const payload = req.body

    const user = await UserColletion.findOne({ username: payload.username })

    if (user) {
        res.send({ Message: "UserName is already Exists" })
    } else {
        const userResult = await UserColletion.updateOne({ _id: ObjectId(req.query.id) }, { $set: payload })
        res.send(userResult)
    }
}