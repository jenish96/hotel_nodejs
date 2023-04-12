const ContactUsCollection = require('../../model/contactUs/index')

exports.Get = async (req, res) => {

    const contactUsResult = await ContactUsCollection.find()
    res.send(contactUsResult)

}