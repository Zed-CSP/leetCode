var isPalindrome = function(s) {
    const approved = "abcdefghijklmnopqrstuvwxyz0123456789"
    s = s.toLowerCase().split('').filter(alpha => approved.includes(alpha)).join('') //filter string
    //console.log(s)
    let r = s.length - 1
    let l = 0

    while (r > l) {
        if (s[r] != s[l]) return false; 
        r--;
        l++;
    }
    return true;
};