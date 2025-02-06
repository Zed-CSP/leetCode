var longestValidParentheses = function(s) {
    let maxLen = 0;
    let open = 0, closed = 0;


    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") open++;
        else closed++;

        if (open === closed) maxLen = Math.max(maxLen, 2 * closed);
        else if (closed > open) open = closed = 0; 
    }

    open = closed = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ")") closed++;
        else open++;

        if (open === closed) maxLen = Math.max(maxLen, 2 * open);
        else if (open > closed) open = closed = 0;  
    }

    return maxLen;