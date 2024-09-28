/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let k = 1;  // Pointer for unique elements

    // Traverse the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
        // If the current element is different from the previous unique one, we assume sorted list
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i];  // Place the unique element at the k-th position
            k++;
        }
    }

    return k;
};