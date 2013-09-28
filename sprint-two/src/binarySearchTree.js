var makeBinarySearchTree = function(value){
  var bTree = Object.create(bTreePrototype);

  bTree.value = value;
  bTree.left = null;
  bTree.right = null;

  return bTree;
};

var bTreePrototype = {};

bTreePrototype.insert = function(value){

  if(value < this.value && this.left === null){
    this.left = makeBinarySearchTree(value);
  }else if(value < this.value && this.left !== null){
    this.left.insert(value);
  }else if( value > this.value && this.right === null){
    this.right = makeBinarySearchTree(value);
  }else if( value > this.value && this.right !== null){
    this.left.insert(value);
  }else{
    //same value do nothing bitch!
  }

};

bTreePrototype.contains = function(){
};

bTreePrototype.depthFirstLog = function(){  
};



