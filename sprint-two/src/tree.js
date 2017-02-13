var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
 // _.extend(newTree.children, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  node = Tree(value);
  node.parent = (this);
  this.children.push(node);
};

treeMethods.contains = function(target) {

  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) { return true; }
     // return this.children[i].contains(target)
     //return true;
  }

  return false;
  //return result;
};

treeMethods.removeFromParent = function() {
  //console.log(5);
  this.parent.children = [];
  this.parent = null;
};

// var tree = Tree();
// tree.addChild(5);
// tree.addChild(6);
// tree.children[0].addChild(7);
// tree.children[1].addChild(8);
// tree.children[0].children[0].addChild(9);

// tree.contains(7);
// tree.contains(5);
// tree.contains(2);
// tree.contains(9);
// tree.contains(20);


/*
 * Complexity: What is the time complexity of the above functions?
 */
  // var test0 = this.value; 
  // var test = this.children[0];
  // var test1 = this.children[1];
  // var result = false;
  // if (!result) {
  //   for (var i = 0; i < this.children.length; i++) {
  //     if (this.children[i].value === target) {
  //       result = true;
  //     } 
  //   }
  // }