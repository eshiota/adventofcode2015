var fs = require('fs');
var path = require('path');
var input = fs.readFileSync(path.resolve(__dirname, 'input.txt'), "utf-8");

module.exports = {
    run: function() {
        console.log(require('./solution_part1.js')(input));
        console.log(require('./solution_part2.js')(input));
    }
};
