const users = require('../users.json')

function getAllUsers(req,res){
    res.json(users);
}

module.exports = {
    getAllUsers
}