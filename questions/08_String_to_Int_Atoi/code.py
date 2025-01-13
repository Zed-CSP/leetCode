class Solution(object):
    def myAtoi(self, s):
        INT_MAX = 2**31 - 1  # Maximum value for a 32-bit signed integer
        INT_MIN = -2**31     # Minimum value for a 32-bit signed integer

        i = 0
        n = len(s)
        result = 0
        negative = False  # To handle the sign of the result

        # Skip whitespace
        while i < n and s[i] == ' ':
            i += 1

        # Check for sign
        if i < n and s[i] == '-':
           negative = True
           i += 1
        elif i < n and s[i] == '+':
            i += 1

        # 3. Convert numbers and skip leading zeros
        while i < n and s[i].isdigit():
            digit = int(s[i])
            # 4. Check for overflow/underflow before multiplying result by 10
            if result > INT_MAX // 10 or (result == INT_MAX // 10 and digit > INT_MAX % 10):
                return INT_MIN if negative else INT_MAX
            result = result * 10 + digit
            i += 1

        # Apply the sign
        if negative:
            result = -result

        # Clamp the result to be within the 32-bit signed integer range
        if result < INT_MIN:
            return INT_MIN
        if result > INT_MAX:
            return INT_MAX

        return result