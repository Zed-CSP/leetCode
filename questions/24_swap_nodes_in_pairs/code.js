var swapPairs = function(head) {
    const dummy = new ListNode();
    dummy.next = head
    prev = dummy

    while (prev.next && prev.next.next) {
        let node1 = prev.next;
        let node2 = prev.next.next;
        prev.next = node2;
        node1.next = node2.next
        node2.next = node1;
        prev = node1;       
    }
    return dummy.next
};