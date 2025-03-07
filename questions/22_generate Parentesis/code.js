var generateParenthesis = function(n) {
    let result = [];

    function backtrack(current, open, close) {
        if (current.length === n * 2) {
            result.push(current);
            return;
        }

        if (open < n) {
            backtrack(current + "(", open + 1, close);
        }
        if (close < open) {
            backtrack(current + ")", open, close + 1);
        }
    }

    backtrack("", 0, 0);
    return result;
};