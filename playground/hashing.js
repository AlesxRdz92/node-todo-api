const crypto = require('crypto');
const hash = crypto.createHash('sha256');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

/*var data = {
    id: 10
};

var token = jwt.sign(data, '123abc');
console.log(token);
console.log(jwt.verify(token, '123abc'));
/*hash.update('I am user number 3');
console.log(hash.digest('hex'));*/

let pass = 'Alejandro';

/*bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(pass, salt, (err, res) => console.log(res));
});*/

let hashed = '$2a$10$6ozyeeI9IruSR6sjqaZ/2.8x43THXOCw4xdcUq/n9PU7SwzqJRbkO';

bcrypt.compare(pass, hashed, (err, res) => console.log(res));