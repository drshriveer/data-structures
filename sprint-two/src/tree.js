var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = []; //has property length

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(makeTree(value));
};

treeMethods.contains = function(value){
  var results = [];

  if(this.value === value){
    results.push(true);
  }
  _(this.children).each(function(childNode){
    results = results.concat(childNode.contains(value),results);
  });

  return _.some(results);

};