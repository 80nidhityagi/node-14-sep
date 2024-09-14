const users = require('../users.json')

function getAllUsers(req,res){
    res.json(users);
}
function getUser(req,res){
    let id = req.params.id
    let u = users.find((user)=>user.id==id)
    res.json(u);
}

module.exports = {
    getAllUsers,
    getUser
}