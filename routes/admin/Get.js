const Admin = require("../../model/admin/Admin");

exports.Get = async (req, res) => {
    const condition = [{
        $match: { age: 21 }
    }]
    const data = await Admin.aggregate(condition);
    res.send(data)
}