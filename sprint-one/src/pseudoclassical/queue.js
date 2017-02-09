var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.storage = {};
  this.back = 0;
  this.front = 0;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.front] = value;
  this.front++;
  this.count++;
};

Queue.prototype.dequeue = function () {
  if (this.count > 0) {
    this.count--;
  }
  this.back++;
  return this.storage[this.back - 1];
};

Queue.prototype.size = function () {
  return this.count;
};


