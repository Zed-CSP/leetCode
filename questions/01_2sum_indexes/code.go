package main

import (
    "fmt"
)

func twoSum(nums []int, target int) []int { // args are a slice of ints 'nums' and our target int, returns a slice of two ints (solution)
    hashMap := make(map[int]int) // initialize an empty hashmap key is an integer (a num from nums) and the value is defined as an integer(our index in nums).

    for i, num := range nums { // loop through nums.
        compliment := target - num // calculates compliment needed for current num in nums.

        if index, exists := hashMap[compliment]; exists { // exists is a boolean flag similar to 'truthy' concept in JS.
            return []int{index, i} // returns slice of integers: the current index of num in nums, and the saved value of the key compliment
        } 
        // else
        hashMap[num] = i // stores the current num in nums with the current index into the hashmap
    }
    return nil // edgecase for no solution
}