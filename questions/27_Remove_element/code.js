var removeElement = function(nums, val) {
    let n = nums.length
    let arr = nums
    if (n === 0) return 0;

    for (let i = 0; i < n; i++) {
        if (arr[i] == val) {
            arr.splice(i, 1)
            i--;
        };
    }
    return arr.length 
};