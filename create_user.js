// make_user.js 
// =================================================== 

use tchallenge

db.createUser({
    user: "tch_user",
    pwd: "tch_pwd",
    roles: [{ role: "readWrite", db: "tchallenge" }]
})

