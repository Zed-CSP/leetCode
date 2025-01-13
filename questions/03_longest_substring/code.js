/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let maxLength = 0;
    let indexMap = {};

    for(let i = 0; i < s.length; i++) {
        let char = s[i];

         if (indexMap.hasOwnProperty(char) && indexMap[char] >= start) {
            start = indexMap[char] + 1;
        }

        indexMap[char] = i;

        maxLength = Math.max(maxLength, i - start + 1);
    }

    return maxLength;
};