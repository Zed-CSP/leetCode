var plusOne = function(digits) {

    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++; // add the 1
            return digits // return array
        }
        digits[i] = 0 // if 9 set a 0
    }
    digits.unshift(1) // if all 9's
    return digits;
};