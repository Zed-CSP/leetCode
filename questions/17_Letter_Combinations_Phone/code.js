var letterCombinations = function(digits) {
    digits = Array.from(String(digits), Number);
    if (!digits.length) return [];
    const dialMap = { // Manually inputting this is more efficient than generating dynamically
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    };
    let result = [];

    const backtrack = (index, combination) => { //recursive function
        if (index === digits.length) { // Base case: If we have processed all digits, store the combination
            result.push(combination);
            return;
        }

        let letters = dialMap[digits[index]]; // Get the array of letters corresponding to the current digit
        for (let letter of letters) { // Iterate over each letter corresponding to the current digit
            backtrack(index + 1, combination + letter); // Recursively call `backtrack`, moving to the next digit & Append the current letter to the growing combination string
        }
    }


    backtrack(0, "")
    return result
};