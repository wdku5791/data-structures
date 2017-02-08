var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.front = 0;
  someInstance.end = 0;
  someInstance.sizer = 0;
  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.end] = value;
  this.sizer++;
  this.end++;
};
queueMethods.dequeue = function() {
  var result = this.storage[this.front];
  if (this.sizer > 0) {
    delete this.storage[this.front];
    this.sizer--;
    this.front++;
  }
  return result;
};
queueMethods.size = function() {
  return this.sizer;
};


