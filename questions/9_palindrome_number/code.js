/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x >= 0 && x < 10) return true; // single digit always palindrome
    if ((x < 0) || (x != 0 && x % 10 === 0)) return false; //negative case is never palindrome, neither is any number evenly / 0

    let reversedHalf = 0;

    while (x > reversedHalf) {
        reversedHalf = reversedHalf * 10 + x % 10; // shift current 1 to 10's place, modulus the x number by 10 to free the last digit and add to reversed half
        x = Math.floor(x / 10);// remove the last digit from x
    }
        // The number is a palindrome if
        // The first half (x) is equal to the reversed second half.
        // OR
        // in odd-length number cases, we can ignore the middle digit, so we check reversedHalf // 10.
    return x === reversedHalf || x === Math.floor(reversedHalf / 10); 
    
};