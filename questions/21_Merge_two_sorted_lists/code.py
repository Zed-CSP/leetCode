class Solution(object):
    def mergeTwoLists(self, list1, list2):

        # 'Dummy node' to act as the start of the merged list
        dummy = ListNode(-1)
        current = dummy
        
        # Traverse both lists
        while list1 and list2:
            if list1.val <= list2.val:
                current.next = list1
                list1 = list1.next
            else:
                current.next = list2
                list2 = list2.next
            current = current.next
        
        # If one of the lists is not empty, append it to the result
        if list1:
            current.next = list1
        elif list2:
            current.next = list2
        
        # Return the merged list starting from the *next* node of dummy
        return dummy.next
    