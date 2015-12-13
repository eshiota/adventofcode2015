var md5 = require('md5');

module.exports = function(key) {
    var answer = 1;
    var hash;

    do {
        hash = md5(key + answer);
        answer++;
    } while(hash.substr(0, 5) !== '00000');

    return --answer;
};
