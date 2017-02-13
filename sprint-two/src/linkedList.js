var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.node = null;

  // var headNext = 0;
  // var counter = 0;

  list.addToTail = function(value) {
    if (list.tail === null) {
      list.head = Node(value);
      list.tail = list.head;
    } else if (list.head === list.tail) {
      list.tail = Node(value);
      list.head.next = list.tail;
      list.tail.previous = list.head;
    } else {
      var tempNode;
      tempNode = list.tail;
      list.tail = Node(value);
      tempNode.next = list.tail;
      list.tail.previous = tempNode;
    }

  };

  list.removeHead = function() {
    var tempNode;
    tempNode = list.head;
    list.head = list.head.next;
    if (list.head !== list.tail) {
      list.head.previous = null;
    }
    return tempNode.value;
  };

  list.addToHead = function(value) {
    if (list.head === null) {
      list.head = Node(value);
      list.tail = list.head;
    } else if (list.head === list.tail) {
      list.head = Node(value);
      list.head.next = list.tail;
      list.tail.previous = list.head;
    } else {
      var tempNode;
      tempNode = list.head;
      list.head = Node(value);
      tempNode.previous = list.head;
      list.head.next = tempNode;
    }
  };
  list.removeTail = function () {
    var tempNode;
    tempNode = list.tail;
    list.tail = list.tail.previous;
    if (list.head !== list.tail) {
      list.tail.next = null;
    }
    return tempNode.value;
  };

  list.contains = function(target) {
    var result = false;
    
    var traverse = function(object) {
      //console.log(this);
      //debugger;

      if (this.value === target) {
        result = true;
        return;
      }
      if (this.next === undefined) {
        return;
      }
      traverse.apply(this.next, this.next);
    };
    traverse.apply(list.head, list.head);
    return result;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

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