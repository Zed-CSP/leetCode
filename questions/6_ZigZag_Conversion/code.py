class Solution(object):
    def convert(self, s, numRows):
        if numRows == 1 or numRows >= len(s): # Edgecases
            return s

        # Initialize an array for each row
        rows = [''] * numRows
        cur_row = 0
        going_down = False

        for char in s:
            rows[cur_row] += char
            
            if cur_row == 0 or cur_row == numRows - 1:
                going_down = not going_down
            
            cur_row += 1 if going_down else -1

        return ''.join(rows)