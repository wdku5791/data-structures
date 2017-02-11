var BinarySearchTree = function(value) {

  var newBinaryTree = Object.create(binaryMethods);
  newBinaryTree.left;
  newBinaryTree.right;
  newBinaryTree.height = 0;
  newBinaryTree.grow = this; 
  newBinaryTree.value = value;
  // newBinaryTree.

  return newBinaryTree;
};
var binaryMethods = {};
binaryMethods.insert = function (value) {
  // (this.left && this.right) {
  //  this.insert;
  //}
  //var node = this;
  var climbTree = function (node) {
// node = headnode, value that we are inserting which we will make a node.
    if (value <= node.value) {
      if (node.left === undefined) {
        node.left = BinarySearchTree(value);
      } else {
        climbTree(node.left);
      }
    } else if (value > node.value) {
      if (node.right === undefined) {
        node.right = BinarySearchTree(value);
      } else {
        climbTree(node.right);
      }
    }
  };
  climbTree(this);

  // if (value <= this.value) {
  //   if (this.left === undefined) {
  //     this.left = BinarySearchTree(value);
  //   } else {
  //     this.left.right = BinarySearchTree(value);
  //   }
  // } else if (value > this.value) {
  //   if (this.right === undefined) {
  //     this.right = BinarySearchTree(value);      
  //   } else {
  //     this.right.left = BinarySearchTree(value);
  //   }
  // }
};

binaryMethods.contains = function (target) {
  var result = false;
  var climbTree = function (node) {
// node = headnode, value that we are inserting which we will make a node.
    if (node.value === target) {
      result = true;
    }

    if (node.left !== undefined) {
      if (node.left.value === target) {
        result = true;
      } else if (node.left.value <= target) {
        climbTree(node.left);
      }  
    }

    if (node.right !== undefined) {
      if (node.right.value === target) {
        result = true;
      } else if (node.right.value > target) {
        climbTree(node.right);
      }      
    }
  };
  climbTree(this);
  return result;
};

binaryMethods.depthFirstLog = function (callback) {

  var climbTree = function (node) {
    callback(node.value);
    if (node.left !== undefined) {
      climbTree(node.left);
    }
    if (node.right !== undefined) {
      climbTree(node.right);
    }
  };
  climbTree(this);

};

// var binarySearchTree = new BinarySearchTree();

//

/*
 * Complexity: What is the time complexity of the above functions?
 given a input node  ====> function insert (head node)
 it has a headvalue. we are given a Child node (childvalue)
 compare childvalue to headvalue.

 if childvalue > headvalue check if headnode.right is empty
 if headnode.right is empty add childnode to headnode.right

 if childvalue < headvalue check if headnode.left is empty
 if headnode.left is empty add childnode to headnode.left

 if headnode.left and headnode.right are occupied then compare new value
 to headnode.left and headnode.right and call recursive function with new head.
 */


//Set up a head node

//After the first node, when inserting a node, you have to check
//whether the insertion should be on the left or on the right.


//Check recursively until you reach the end of the tree and insert that node.


//If the tree is too tall, rebalance the tree.