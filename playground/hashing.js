const crypto = require('crypto');
const hash = crypto.createHash('sha256');
const jwt = require('jsonwebtoken');

var data = {
    id: 10
};

var token = jwt.sign(data, '123abc');
console.log(token);
console.log(jwt.verify(token, '123abc'));
/*hash.update('I am user number 3');
console.log(hash.digest('hex'));*/