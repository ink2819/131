
var crypto = require('crypto');
const users = [
    {
        email: 'flong@pratt.edu',
        name: 'FL',
        salt: '0f36d24a0c8bb66c74b4d64d2c30bc86',
        encryptedPassword: '9ba0f1f74b5213849058ccfc0ed0fad08e73ad874b010bad28eb748b0c13190d'
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



  