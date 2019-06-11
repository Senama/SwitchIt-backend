const {db} = require('./dbConnect');
const UserService = {};


UserService.create=(uid, firstname, lastname, email,username)=>{
    const sql = `INSERT INTO 
    users 
    (uid,firstname,lastname,email,username) 
    VALUES 
    ($[uid], $[firstname], $[lastname],$[email],$[username])`;
    return db.none(sql, {uid, firstname, lastname, email,username});
}

UserService.readUser = (email) =>{
    console.log("Email", email)
    const sql = `SELECT * 
    from users 
    where email=$[email]`
    console.log(db.one(sql, {email}))
    return db.any(sql, {email});
  
  }

module.exports = UserService
