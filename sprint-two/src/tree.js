var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = []; //has property length

  _(newTree).extend(treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(makeTree(value));
};

treeMethods.contains = function(value){
  var results = false;

  if(this.value === value){
    results = true;
  }else{
    _(this.children).each(function(childNode){
      results = (results || childNode.contains(value));
    });
  }

  return results;
};