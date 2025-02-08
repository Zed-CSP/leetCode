var mySqrt = function(x) {
    //edgecase 0 or 1
    if (x < 2) return x;

    let left = 1, right = x, result = 0;

    while (left<=right) {
        let mid = Math.floor((left+right) / 2);

        if (mid * mid === x) return mid;
        else if (mid * mid < x) {
            result = mid; // "caching" jik
            left = mid + 1; //search right half
        } else {
            right = mid - 1;
        }
    }
    return result;
};