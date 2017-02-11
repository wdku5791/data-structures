var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.node = null;

  // var headNext = 0;
  // var counter = 0;

  list.addToTail = function(value) {
    if (list.tail !== null) {
      list.node = list.tail;
      list.tail = Node(value);
      list.node.next = list.tail.value;
    } else {
      list.tail = Node(value);
    }

    if (list.head === null) {
      list.head = list.tail;
    } else if (list.head === list.tail) {
      list.head.next = list.tail.value;
    }

  };

  list.removeHead = function() {
    var tempHead = list.head.value;
    list.head.value = list.head.next;
    //list.head.next = list.head.next.next;
    return tempHead;
  };

  list.contains = function(target) {
    if (list.head.value === target || list.tail.value === target || list.node.value === target) {
      return true;
    } else {
      return false;
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 add to tail: constant O(1)
 remove head: constant O(1)
 contains: linear O(n)
 node: constant O(1)
 Linkedlist: constant O(1)
 */

/*assuming [1,2,3,4] 
  tail [4], head[1]
[1,2]
tail 
*/