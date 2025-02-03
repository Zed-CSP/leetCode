package main

import (
	"fmt"
)


func longestPalindrome(s string) string {
	if len(s) < 2 { // edgecase: one char or empty string
		return s
	}

	start, maxLen := 0, 0

	// Function to expand around the center and check for palindromes
	centerOut := func(left, right int) { 
		for left >= 0 && right < len(s) && s[left] == s[right] { // expand outwards
			if right-left+1 > maxLen { //if current length is greater than max length
				start = left // update start index
				maxLen = right - left + 1 // update max length
			}
			left--  // decriment left pointer
			right++ // incriment right pointer
		}
	}

	// Iterate through the string and expand around each character
	for i := 0; i < len(s); i++ {
		centerOut(i, i)     // Odd-length palindromes
		centerOut(i, i+1)   // Even-length palindromes
	}

	return s[start : start+maxLen]
}