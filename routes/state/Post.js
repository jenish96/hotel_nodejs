const StateCollection = require('../../model/state/index')

exports.Post = async (req, res) => {

    const payload = req.body
    const state = await StateCollection.findOne({ state_name: payload.state_name })
    if (state) {
        res.send({ Message: "State already Exists" })
    } else {
        const stateResult = await StateCollection.insertMany(payload)
        res.send(stateResult)
    }
}