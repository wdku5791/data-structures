var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // var headNext = 0;
  // var counter = 0;

  list.addToTail = function(value) {
    list.tail = Node(value);
    if (list.head === null) {
      list.head = Node(value);
    } else {
      list.head.next = Node(value);
    }

  };

  list.removeHead = function() {
    var tempHead = list.head;
    list.head = list.head.next;
    return tempHead.value;
  };

  list.contains = function(target) {
    if (list.head.value === target || list.tail.value === target) {
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
 */
