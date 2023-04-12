
const Admin = require('./Admin')

const Insert = async (data) => {
    return await Admin.insertMany(data) 
}