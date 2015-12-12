module.exports = function(input) {
    var visited = {
        'i0/0' : true
    };
    var curX = 0;
    var curY = 0;

    input.split('').forEach(function(move) {
        var index;

        switch(move) {
            case '^':
                curY++;
                break;
            case 'v':
                curY--;
                break;
            case '<':
                curX--;
                break;
            case '>':
                curX++;
                break;
        }

        index = 'i' + curX + '/' + curY;

        if (!visited[index]) {
            visited[index] = true;
        }
    });

    return Object.keys(visited).length;
};
