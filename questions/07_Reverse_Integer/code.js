var reverse = function(x) {

    const isNegative = x < 0;
    const reversed = parseInt(Math.abs(x).toString().split('').reverse().join(''));
    
    // 32-bit signed integer limits
    const INT_MIN = -(2 ** 31);
    const INT_MAX = 2 ** 31 - 1;

    // Overflow check
    if (reversed > INT_MAX || reversed < INT_MIN) {
        return 0;
    }

    return isNegative ? -reversed : reversed;
};