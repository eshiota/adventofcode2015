module.exports = function (input) {
    return input.split(/\s/).reduce(function (count, str) {
        return count + str.length - eval(str).length;
    }, 0);
};