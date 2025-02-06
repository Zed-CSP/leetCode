var reverseKGroup = function(head, k) {
    const dummy = new ListNode();
    dummy.next = head;
    let prev = dummy
    
    //check if there are enough nodes
    while(true) {
        let node = prev;
        for (let i = 0; i < k; i++) {
            measureNode = measureNode.next;
            if (!node) {
                return dummy.next; // rreturn linked list
            }
        }

        let current = prev.next;
        let next = current.next; // next reference pointer for mid reversal
        for (let i = 1; i< k; i++) { // in place reversal
            current.next = next.next;
            next.next = prev.next
            prev.next = next
            next = current.next
        }

        prev = current;
    }

    return dummy.next
};