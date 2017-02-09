var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.front = 0;
  instance.back = 0;
  instance.count = 0;
  instance.storage = {};

  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.front] = value;
  this.front++;
  this.count++;
};

queueMethods.dequeue = function () {
  if (this.count > 0) {
    this.count--;
  }
  this.back++;
  return this.storage[this.back - 1];
};

queueMethods.size = function () {
  return this.count;
};
