const db = require('../database');
var crypto = require('crypto');



const createSalt = () => {
  return crypto.randomBytes(16).toString('hex');
}

const encryptPassword = (password, salt) => {
  return crypto.pbkdf2Sync(password, salt, 310000, 32, 'sha256').toString('hex')
}



/*const users = [
  {
    email:"flong@pratt.edu",
    name:"FL",
    salt:"2f233d9cf091b57dda36493a68d98bba",
    encryptedPassword:"683ad1730c0690361b96522db920ed8f306f73db57780fceb56a88cf432fc6cb"
  }
];*/

exports.add = async(user) => {
  let salt = createSalt();
  let encryptedPassword = encryptPassword(user.password, salt)
  return db.getPool()
    .query("INSERT INTO users(email, name, salt, password) VALUES($1, $2, $3, $4) RETURNING *",
      [user.email, user.name, salt, encryptedPassword])
}


exports.getByEmail = async(email) => {
  const { rows } = await db.getPool().query("select * from users where email = $1", [email])
  return db.camelize(rows)[0]
}


exports.login = async (login) => {
  let user = await exports.getByEmail(login.email);
  if (!user) {
    return null;
  }
  let encryptedPassword = encryptPassword(login.password, user.salt);
  if (user.password === encryptedPassword) {
    return user;
  }
  return null;
}

/*exports.all = users*/