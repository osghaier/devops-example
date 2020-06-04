// init_db.js
// ===================================================

use admin

db.createUser({
    user: "tch_user",
    pwd: "tch_pwd",
    roles: [{ role: "readWrite", db: "admin" }]
})