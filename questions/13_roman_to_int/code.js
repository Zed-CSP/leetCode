/**
 * @param {string} s
 * @return {number}
 */
const roman = { 
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000
}

var romanToInt = function(s) {

    let total = 0;
    
    for (let i = 0; i < s.length; i++) {
        current = roman[s[i]]; // current window anchor
        next = roman[s[i+1]]; // next in array traversal

        if (next && current < next) { // checks if next bool true && if current is less than next for subtraction rule
            total -= current
        } else {
            total += current;
        }
    }

    return total;
};