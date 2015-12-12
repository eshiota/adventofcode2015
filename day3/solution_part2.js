module.exports = function(input) {
    var visited = {
        'i0/0' : true
    };
    var curSantaX = 0;
    var curSantaY = 0;
    var curRobotX = 0;
    var curRobotY = 0;

    input.split('').forEach(function(move, i) {
        var index;

        switch(move) {
            case '^':
                i % 2 === 0 ? curSantaY++ : curRobotY++;
                break;
            case 'v':
                i % 2 === 0 ? curSantaY-- : curRobotY--;
                break;
            case '<':
                i % 2 === 0 ? curSantaX-- : curRobotX--;
                break;
            case '>':
                i % 2 === 0 ? curSantaX++ : curRobotX++;
                break;
        }

        index = 'i' + (i % 2 === 0 ? curSantaX : curRobotX) + '/' + (i % 2 === 0 ? curSantaY : curRobotY);

        if (!visited[index]) {
            visited[index] = true;
        }
    });

    return Object.keys(visited).length;
};
