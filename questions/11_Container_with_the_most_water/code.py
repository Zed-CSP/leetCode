class Solution:
    def maxArea(self, height):
        left, right = 0, len(height) - 1 # two pointers placed at ends of the array moving inward
        max_area = 0
        
        while left < right:
            # Calculate the area with the current boundaries
            current_height = min(height[left], height[right]) # height is confined to the shorter of the two values
            current_width = right - left # calculating the length between the two pointers
            current_area = current_height * current_width 
            
            # Update max_area if the current one is greater
            max_area = max(max_area, current_area)
            
            # Move the pointer for the shorter line inward
            if height[left] < height[right]:
                left += 1
            else:
                right -= 1
        
        return max_area