module.exports = function(input) {
    return input.split(/\s+/).reduce(function(niceStringsQty, string) {
        var containsForbiddenPair = !!string.match(/(ab|cd|pq|xy)/g);
        var containsRepeatChars = !!string.match(/(\w)\1/g);
        var stringVowels = string.match(/([aeiou])/g);
        var containsThreeVowels = stringVowels && stringVowels.length >= 3;

        // Does not contain ab, cd, pq or xy
        if (containsForbiddenPair) {
            return niceStringsQty;
        }

        // Contains repeating characters
        if (!containsRepeatChars) {
            return niceStringsQty;
        }

        if (!containsThreeVowels) {
            return niceStringsQty;
        }

        return ++niceStringsQty;
    }, 0);
};
