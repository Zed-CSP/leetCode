/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.slice().sort((a, b) => a - b); //sort nums O(n log n)
    console.log(nums)
    let result = []

    for (let i = 0; i < (nums.length - 2); i++) { 
        if (i > 0 && nums[i] === nums[i - 1]) continue; //skip duplicate elements to avoid duplicate triplets

        let left = i + 1, right = nums.length - 1;
            
        while (left < right) { //while left and right have not crossed
            let sum = nums[i] + nums[left] + nums[right]

            if (sum < 0) { //raise left pointer if sum less than 0
                left++;
            } else if (sum > 0) {
                right--; //lower right pointer if sum greater than 0
            } else {
                result.push([nums[i],nums[left],nums[right]]); //if sum 0 push to result
                left++; // continue search for additional triples on i
                while (nums[left] === nums[left - 1] && left < right) { //if new left pointer is the same as the last, skip as many times necessary
                    left++
                }
            }
        } 
        
    }

    return result;
};