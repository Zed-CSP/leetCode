var search = function(nums, target) {
    // edge cases
    if (nums.length < 3) {
        if (nums.length == 1) {
            if (nums[0] == target) {
                return 0
            } else {return - 1;}
        }
        return nums.indexOf(target) // no sense in optimizing if array this short
    } 
    let l = 0
    let r = nums.length - 1

    while (l <= r) {
        let mid = Math.floor(l + ((r - l) / 2 )) //calc rounded mid between l & r pointer

        if (nums[mid] == target) return mid; // if mid is target return index of mid

        if (nums[l] <= nums[mid]) { // if nums at left pointer is less than nums at mid, then that section is sorted
            if (nums[l] <= target && target <= nums[mid]) { //if target is between l and mid
                r = mid - 1; //move right pointer to upper bound inside mid & left
            } else {
                l = mid + 1; // move left pointer above mid inside bounds of mid -> right
            }
        } else { // right is sorted section
            if (nums[mid] <= target && target <= nums[r]) { // if target is between mid & right pointer
                l = mid + 1 //move left above mid
            } else {
                r = mid - 1 // move right below mid
            }
        }
    }


    return -1;
};