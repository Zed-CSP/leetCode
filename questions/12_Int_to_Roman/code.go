package main

import (
	"fmt"
)

func intToRoman(num int) string {
	// Mapping of Roman numerals in descending order
	values := []int{1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1}
	symbols := []string{"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"}

	result := ""

	// Iterate through values and subtract from num
	for i := 0; i < len(values); i++ { // Loop through the values for the length of the values slice
		for num >= values[i] {  // While num is greater than or equal to the current value **WHILE LOOP IN GO SYNTAX**
			result += symbols[i]  // Append Roman numeral
			num -= values[i]       // Subtract value from num
		}
	}

	return result
}