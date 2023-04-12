const ContactUsCollection = require('../../model/contactUs/index')

exports.Post = async (req, res) => {
    const payload = req.body
    const contactUsResult = await ContactUsCollection.insertMany(payload)
    res.send(contactUsResult)
}