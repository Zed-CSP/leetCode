package main

import (
    "fmt"
    "math" //MinInt32 and MaxInt32 for edge cases.
)

func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
	m, n := len(nums1), len(nums2) // m and n defined per question

	
	if m > n { // Ensure nums1 is the smaller array
		return findMedianSortedArrays(nums2, nums1) //recurse
	}

	low, high := 0, m //define low and high for binary search

	for low <= high {
		partitionM := (low + high) / 2
		partitionN := (m + n + 1) / 2 - partitionM

		// Edge cases: handle min/max values when partitioning
		maxLeftM := math.MinInt32
		if partitionM > 0 {
			maxLeftM = nums1[partitionM-1]
		}

		minRightM := math.MaxInt32
		if partitionM < m {
			minRightM = nums1[partitionM]
		}

		maxLeftN := math.MinInt32
		if partitionN > 0 {
			maxLeftN = nums2[partitionN-1]
		}

		minRightN := math.MaxInt32
		if partitionN < n {
			minRightN = nums2[partitionN]
		}

		// Check if correct partition is found
		if maxLeftM <= minRightN && maxLeftN <= minRightM {
			if (m+n)%2 == 0 { // If the total number of elements is even
				return float64(max(maxLeftM, maxLeftN)+min(minRightM, minRightN)) / 2.0
			} else {		
				return float64(max(maxLeftM, maxLeftN)) // If the total number of elements is odd
			}
		} else if maxLeftM > minRightN { //If maxLeftM is too large 
			high = partitionM - 1 //move high left.
		} else { 
			low = partitionM + 1 //move low right
		}
	}

	panic("Input arrays are not sorted or valid") // This should never happen *fingers crossed*
}