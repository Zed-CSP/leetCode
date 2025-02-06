var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0) //create dummy head for return statement, value irrelevant
    dummy.next = head; //set dummy's reference to head
    let result = dummy; // set result to dummy 
    let count = 0; // incrimenting var to reference n
    let tail = head;

    while(count < n) { // while count is less than n
        tail = tail.next; // move tail down list
        count++ // incriment counter
    }

    let target = head; // start target node n distance from tail
    let prev = dummy; // start 'trailing' prev node behind target

    while(tail) { // while tail exists
        tail = tail.next; // move tail along list
        target = target.next // move target along list
        prev = prev.next// move prev along list
    }

    prev.next = target.next // sever target by changing prev's reference to target's next

    return result.next // return result from the dummy head
};