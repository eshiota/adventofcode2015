module.exports = function(input) {
    return input.trim().split(/\s+/).reduce(function(length, box) {
        var d = box.split('x').map(function(item) { return parseInt(item, 10); }).sort(function(a, b) { return a - b; });

        return 2 * (d[0] + d[1]) + d[0] * d[1] * d[2] + length;
    }, 0);
};
