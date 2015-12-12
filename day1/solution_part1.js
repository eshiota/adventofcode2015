module.exports = function(input) {
    return input.split("").reduce(function(mem, item) { return mem += item === "(" ? 1 : -1; }, 0);
};