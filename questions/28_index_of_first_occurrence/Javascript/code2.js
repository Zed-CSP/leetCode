function strStr(haystack, needle) {
    if (needle === "") return -1; // empty needle

    let n = haystack.length, m = needle.length;

    for (let i = 0; i <= n - m; i++) { 
        if (haystack.substring(i, i + m) === needle) { 
            return i;
        }
    }
    return -1; 
}
