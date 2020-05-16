const crypto = require('crypto');

module.exports = function genareteUnique(){
    return crypto.randomBytes(4).toString('HEX');
}