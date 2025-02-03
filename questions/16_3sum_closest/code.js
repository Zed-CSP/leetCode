var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a- b)
    let closestSum = Infinity; // ensure that any valid sum is closer than infinity
    //console.log(nums)

    for (let i = 0; i < nums.length - 2; i++) { //anchor index
        let left = i + 1, right = nums.length - 1;


        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            //console.log([nums[i], nums[left], nums[right]], sum)

            if (Math.abs(target - sum) < Math.abs(target - closestSum)) { //if sum is closer to target than closestSum set new closestSum
                closestSum = sum;
            }

            // moving pointers or exact sum
            if (sum < target) {
                left++;
            } else if (sum > target) {
                right--;
            } else {
                return sum; // case of exact target sum
            } 
        }
    }
    return closestSum;
};