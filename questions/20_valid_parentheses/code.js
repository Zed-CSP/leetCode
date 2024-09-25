/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
const map = {
    '(': ')',
    '{': '}',
    '[': ']'
};

for (let i = 0; i < s.length; i++) {
    const current = s[i];

    // only opening brackets are keys in the map object, so if it's not a key, it must be a closing
    if (map[current]) {
        // If it's an opening bracket, push to the stack
        stack.push(current);
    } else {
        // If it's a closing bracket, check the top of the stack
        const last = stack.pop();
        if (map[last] !== current) {
            return false;
        }
    }
}
return stack.length === 0;
};