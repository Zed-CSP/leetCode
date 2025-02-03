package main

import (
    "fmt"
)

func lengthOfLongestSubstring(s string) int {
    charIndex := make(map[byte]int) // declared charIndex as a map of 'seen' chars as keys, with the int value of their indexes
    maxLength := 0 // stores the max lentgh of found chars
    left := 0 // left pointer of sliding window

    for right := 0; right < len(s); right++ { //loop with 'right' declared as our index 'anchor' pointer
        if index, found := charIndex[s[right]]; found && index >= left { //in the case that pointer index matches the map
            left = index + 1 //move the left pointer to avoid repetition
        }
        
        charIndex[s[right]] = right // store/update the last index of character
        currentLength := right - left + 1 // calculate current length
        if currentLength > maxLength { // if current is greater than previous maximum
            maxLength = currentLength // current length is the new maximum
        }
    }
    
    return maxLength //return length of longest substring
}