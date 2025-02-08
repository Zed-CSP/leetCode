var addBinary = function(a, b) {
    let result = ""
    let carry = 0

    //standardize length
    while (a.length < b.length) a = "0" + a;
    while (b.length < a.length) b = "0" + b;

    //perform binary addition
    for (let i = a.length - 1; i >= 0; i--) {
        let sum = parseInt(a[i]) + parseInt(b[i]) + carry;
        result = (sum % 2 ) + result // this line is the key 2%2 = 0 while 3%2=1
        carry = Math.floor(sum / 2)
    }

    //append carry
    if (carry) result = "1" + result;

    return result

};