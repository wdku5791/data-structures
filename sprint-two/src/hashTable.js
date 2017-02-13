

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._counter = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      var oldTuple = tuple[1];
      tuple[1] = v;
      return oldTuple;
    }
  }

  bucket.push([k, v]);
  this._storage.set(index, bucket);
  this._counter++;

  if (this._counter > Math.floor(3 / 4 * this._limit)) {
    this.resize(this._limit * 2);
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }

  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) { return; }
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      var tupleValue = tuple[1];
      bucket.splice(i, 1);
      this._counter -= 1;

      if (this._counter < Math.floor(.35 * this._limit)) {
        this.resize(this._limit / 2);
      }

      return tupleValue;
    }
  }


};

HashTable.prototype.resize = function(newLimit) {
  var oldStorage = this._storage;

  if (newLimit < 8) {
    return;
  }

  this._limit = newLimit;
  this._storage = LimitedArray(this._limit);
  this._counter = 0;


  oldStorage.each(function (bucket) {
    if (!bucket) { return; }
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      this.insert(tuple[0], tuple[1]);
    }
  }.bind(this));

};
// search function

/*
 * Complexity: What is the time complexity of the above functions?
 insert: constant (linear when lots of collisions)
 retrieve: constant (linear when lots of collisions)
 remove: constant (linear when lots of collisions)

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.counter = 0;
};

//AWESOME OLD CODE STARTS HERE

HashTable.prototype.insert = function(k, v) {
  if (this.counter >= this._limit * 3 / 4) {
    this._limit = this._limit * 2;
    this._storage = LimitedArray(this._limit);
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [[k, v]]);
  } else {

    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k) {
        this._storage.get(index)[i][1] = v;
      } else {
        this._storage.get(index).push([k, v]);
      }
    }
  }

  this.counter++;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    return undefined;
  }
  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      return this._storage.get(index)[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  if ((this.counter <= this._limit / 2 * 3 / 4) && this.counter > 4) {
    this._limit = this._limit / 2;
    this._storage = LimitedArray(this._limit);
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
  this.counter--;
  console.log(this.counter);
};
 */


