var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var front = 0;
  var back = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[back] = value;
    back++;
    size++;
  };

  someInstance.dequeue = function() {
    var temp = storage[(front)];
    if (size > 0) { 
      delete storage[front];
      front++;
      size--; 
    }

    return temp;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
