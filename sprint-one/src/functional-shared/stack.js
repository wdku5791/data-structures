var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.sizer = 0;
  _.extend(someInstance, stackMethods);

  return someInstance;
};
var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.sizer] = value;
  this.sizer++;
};
stackMethods.pop = function() {
  if (this.sizer > 0) { this.sizer--; }
  return this.storage[(this.sizer)];
};
stackMethods.size = function() {
  return this.sizer;
};


