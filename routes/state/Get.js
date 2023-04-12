const StateCollection = require('../../model/state/index')

exports.Get = async (req, res) => {

    const stateResult = await StateCollection.find()
    res.send(stateResult)
}