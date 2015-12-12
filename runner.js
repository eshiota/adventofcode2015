var fs = require('fs');
var path = require('path');
var argv = require('minimist')(process.argv.slice(2));
var dayPath;
var input;

if (!argv.day) {
    console.error('Error: You must specify a day.');
    console.log('\nUsage:\n');
    console.log('node runner.js --day={1,25}');
    process.exit(1);
}

dayPath = path.resolve(__dirname, 'day' + argv.day);

try {
    input = fs.readFileSync(dayPath + '/input.txt', "utf-8");
} catch(e) {
    console.error('Error reading the day\'s input file');
    process.exit(1);
}

console.log(require('./day' + argv.day + '/solution_part1')(input));
console.log(require('./day' + argv.day + '/solution_part2')(input));
