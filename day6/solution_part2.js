function turnLightRangesOnOrOff(grid, initRange, endRange, operation) {
    for (var i = initRange[0]; i <= endRange[0]; i++) {
        for (var j = initRange[1]; j <= endRange[1]; j++) {
            switch(operation) {
                case 'turn on':
                    grid[i][j] += 1;
                    break;
                case 'turn off':
                    grid[i][j] = grid[i][j] === 0 ? 0 : --grid[i][j];
                    break;
                default:
                    grid[i][j] += 2;
            }
        }
    }
}

function countBrightness(grid) {
    return grid.reduce(function(count, column) {
        return column.reduce(function(innerCount, light) {
            return innerCount + light;
        }, count);
    }, 0);
}

module.exports = function(input) {
    var grid = [];

    for (var i = 0; i < 1000; i++) {
        grid[i] = [];

        for (var j = 0; j < 1000; j++) {
            grid[i][j] = 0;
        }
    }

    input.split(/\n/).forEach(function(instruction) {
        var action = instruction.match(/^[a-z\s]+/)[0].trim();
        var range = instruction.substr(action.length + 1).split(' through ');
        var initRange = range[0].split(',').map(function(i) { return parseInt(i, 10); });
        var endRange = range[1].split(',').map(function(i) { return parseInt(i, 10); });

        turnLightRangesOnOrOff(grid, initRange, endRange, action);
    });

    return countBrightness(grid);
};
