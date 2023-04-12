const UserColletion = require('../../model/user/index')

exports.Get = async (req, res) => {
    const userResult = await UserColletion.find();
    res.send(userResult)
}