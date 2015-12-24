function escapeString (str) {
    return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

module.exports = function (input) {
    return input.split(/\s/).reduce(function (count, str) {
        return count + ('"' + escapeString(str) + '"').length - str.length;
    }, 0);
};