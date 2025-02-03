class Solution(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

    def addTwoNumbers(self, l1, l2):
        dummy_head = ListNode(0)
        current = dummy_head
        carry = 0
    
        # Traverse both lists until both are None
        while l1 or l2 or carry:
            # Get the current values, if the node is None, use 0
            x = l1.val if l1 else 0
            y = l2.val if l2 else 0
        
            # Compute the sum and carry
            total = carry + x + y
            carry = total // 10
            current.next = ListNode(total % 10)
        
            # Move the current pointer forward
            current = current.next
        
            # Move to the next nodes in the lists if possible
            if l1: l1 = l1.next
            if l2: l2 = l2.next
    
        # Check if there's a leftover carry
        if carry > 0:
            current.next = ListNode(carry)
    
        return dummy_head.next