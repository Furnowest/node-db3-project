  
const db = require("../data/config");

function find() {
    return db("Schemes")
}
function findById(id){
    return db()
}
module.exports ={
    find
}