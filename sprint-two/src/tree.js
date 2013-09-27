var makeTree = function(value, parent){
  var newTree = {};
  newTree.value = value;
  newTree.parent = parent || null;
  newTree.children = [];

  _(newTree).extend(treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(makeTree(value, this));
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

treeMethods.removeFromParent = function(){
  var siblingList = this.parent.children;
  var i = _(siblingList).indexOf(this);
  console.log(i);

  this.parent.children = siblingList.slice(0,i).concat(siblingList.slice(i+1,siblingList.length));

  this.parent = null;
};