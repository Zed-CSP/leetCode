/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
function minExtraChar(s, dictionary) {
    const n = s.length;
    const firstLetterMap = new Map();
    
    for (let word of dictionary) {
        const firstLetter = word[0];
        if (!firstLetterMap.has(firstLetter)) {
            firstLetterMap.set(firstLetter, []);
        }
        firstLetterMap.get(firstLetter).push(word);
    }
    
    // Initialize dp array, dp[i] represents the minimum extra characters for substring s[0..i-1]
    const dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0; // No extra characters for an empty string

    // Loop through each character in the string
    for (let i = 0; i < n; i++) {
        // Assume the current character is extra
        dp[i + 1] = Math.min(dp[i + 1], dp[i] + 1);
        
        // If there's a match in the map for the first letter, check possible words
        if (firstLetterMap.has(s[i])) {
            const possibleWords = firstLetterMap.get(s[i]);
            
            for (let word of possibleWords) {
                const wordLen = word.length;
                const endIndex = i + wordLen;
                
                if (endIndex <= n && s.substring(i, endIndex) === word) {
                    dp[endIndex] = Math.min(dp[endIndex], dp[i]);
                }
            }
        }
    }
    
    return dp[n];
}