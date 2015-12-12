module.exports = function(input) {
    var commands = input.split("");
    var floor = 0;

    for (var i = 0; i < commands.length; i++) {
        floor += commands[i] === "(" ? 1 : -1;

        if (floor === -1) {
            return i + 1; // the position is 1-indexed
        }
    }

    return i;
};
