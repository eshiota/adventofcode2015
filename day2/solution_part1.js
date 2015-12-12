module.exports = function(input) {
    return input.trim().split(/\s+/).reduce(function(totalArea, box) {
        var areas = [];
        var dimensions = box.split('x');

        dimensions.forEach(function(size, i) {
            dimensions.slice(i + 1).forEach(function(otherSize) {
                areas.push(size * otherSize);
            });
        });

        return 2 * areas.reduce(function(prev, item) { return prev + item }, 0) + Math.min.apply(null, areas) + totalArea;
    }, 0);
};
