class Solution(object):
    def longestCommonPrefix(self, strs):
        if not strs:
            return ""
        
        # Assume the smallest string is the shortest possible common prefix
        for i in range(len(strs[0])):
            char = strs[0][i]
            for s in strs[1:]:
                # If the length is less than or equal to i or characters differ
                if i >= len(s) or s[i] != char:
                    return strs[0][:i]
        return strs[0]