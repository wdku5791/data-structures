

// Instantiate a new graph
var Graph = function() {
  this.nodeList = {};
  this.edgeList = {};

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodeList[node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodeList.hasOwnProperty(node)) {
    return true;
  } else {
    return false;
  }    
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodeList[node];
  delete this.edgeList[node];
  for (var prop in this.edgeList) {
    if (this.edgeList[prop] === node) {
      delete this.edgeList[prop];
    }
  }

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.edgeList.hasOwnProperty(fromNode) === true && this.edgeList[fromNode] === toNode;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edgeList[fromNode] = toNode;
  this.edgeList[toNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.edgeList[fromNode];
  delete this.edgeList[toNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var prop in this.nodeList) {
    cb(this.nodeList[prop]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


