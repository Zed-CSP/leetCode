import heapq

class Solution(object):
    def mergeKLists(self, lists):
        """
        :type lists: List[Optional[ListNode]]
        :rtype: Optional[ListNode]
        """
        heap = []

        for idx, node in enumerate(lists):
            if node:
                heapq.heappush(heap, (node.val, idx, node))

        dummy = ListNode(0)
        curr = dummy

        while heap:
            val, idx, node = heapq.heappop(heap)
            curr.next = node
            curr = curr.next
            if node.next:
                heapq.heappush(heap, (node.next.val, idx, node.next))

        return dummy.next