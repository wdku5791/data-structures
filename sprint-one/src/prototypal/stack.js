var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.count = 0;
  instance.storage = {};
  return instance;
};

var stackMethods = {};

stackMethods.push = function (value) {
  this.count++;
  this.storage[this.count - 1] = value;
};

stackMethods.pop = function () {
  if (this.count > 0) {
    this.count--;
  }
  return this.storage[this.count];
};

stackMethods.size = function () {
  return this.count;
};
