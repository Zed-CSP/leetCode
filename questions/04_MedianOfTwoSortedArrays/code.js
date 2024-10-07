var findMedianSortedArrays = function(nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;
    let low = 0, high = m;

    if (m > n) {
        return findMedianSortedArrays(nums2, nums1);
    } //recursive correction reduces code redundancy

    while (low <= high) {
        let partition1 = Math.floor((low + high) / 2);
        let partition2 = Math.floor((m + n + 1) / 2) - partition1;

        let maxLeft1 = (partition1 === 0) ? -Infinity : nums1[partition1 - 1];
        let minRight1 = (partition1 === m) ? Infinity : nums1[partition1];

        let maxLeft2 = (partition2 === 0) ? -Infinity : nums2[partition2 - 1];
        let minRight2 = (partition2 === n) ? Infinity : nums2[partition2];

        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            // if we have found the correct partition
            if ((m + n) % 2 === 0) {
                return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
            } else {
                return Math.max(maxLeft1, maxLeft2);
            }
        } else if (maxLeft1 > minRight2) {
            high = partition1 - 1;
        } else {
            low = partition1 + 1;
        }
    }

    throw new Error("Input arrays are not sorted.");
};