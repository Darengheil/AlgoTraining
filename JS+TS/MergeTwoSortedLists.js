/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let answ = [];
    while (true) {
        if(l1 === null){
            answ.next = l2;
            break;
        }
        if(l2 === null){
            answ.next = l1;
            break;
        }
        if(l1.value <= l2.value){
            answ.next = l1;
            l1 = l1.next;
        }
        else{
            answ.next = l2;
            l2 = l2.next;
        }
        answ = answ.next;
    }
    return answ.next;
};

console.log(mergeTwoLists([1,2,4],[1,3,4]));
// console.log(mergeTwoLists([],[]));
// console.log(mergeTwoLists([],[0]));

// TODO