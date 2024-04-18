
var crypto = require('crypto');
const users = [
    {
        email: 'flong@pratt.edu',
        name: 'FL',
        salt: 'f70856f4ef87d64156c801c634e0dd1e',
        encryptedPassword: '97b11ef74169bff49f64b3569a3c4d541599035ffebd33b75f8b2f15f86d31e4'
      }
  ];
  exports.add = (user) => {
    users.push(user);
  }
  exports.getByEmail = (email) => {
    return users.find((user) => user.email === email);
  }
  exports.login = (login) => {
    let user = exports.getByEmail(login.email);
    if (!user) {
      return null;
    }
    let encryptedPassword = encryptPassword(login.password, user.salt);
    if (user.encryptedPassword === encryptedPassword) {
      return user;
    }
    return null;
  }
  
  exports.all = users

const createSalt = () => {
  return crypto.randomBytes(16).toString('hex');
}

const encryptPassword = (password, salt) => {
  return crypto.pbkdf2Sync(password, salt, 310000, 32, 'sha256').toString('hex')
}

exports.add = (user) => {
  let salt = createSalt();
  let new_user = {
    email: user.email,
    name: user.name,
    salt: salt,
    encryptedPassword: encryptPassword(user.password, salt)
  }
  console.log(new_user);
  users.push(new_user);
}



  