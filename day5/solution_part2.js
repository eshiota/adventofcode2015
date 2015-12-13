function checkIfContainsMatchingPair(string) {
    var results = {};
    var key;

    for (var i = 0; i < string.length; i++) {
        key = string[i] + string[i+1];
        results[key] = typeof results[key] === 'number' ? results[key] + 1 : 1;

        if (results[key] === 2) {
            return true;
        }
    }

    return false;
}

module.exports = function(input) {
    return input.split(/\s+/).reduce(function(niceStringsQty, string) {
        var containsPairWithCharBetween = !!string.match(/(\w)\w\1/g);
        var containsMatchingPair = checkIfContainsMatchingPair(string);
        var containsOverlappingPair = !!string.match(/(\w)\1\1/g) && !string.match(/(\w)\1\1\1/g);

        if (!containsPairWithCharBetween || !containsMatchingPair || containsOverlappingPair) {
            return niceStringsQty;
        }

        return ++niceStringsQty;
    }, 0);
};
