var makeBinarySearchTree = function(value){
  var bTree = Object.create(bTreePrototype);

  bTree.value = value;
  bTree.left = null;
  bTree.right = null;

  return bTree;
};

var bTreePrototype = {};

bTreePrototype.insert = function(val){

  if(val < this.value){
    if(this.left === null) {
      this.left = makeBinarySearchTree(val);
    }else{
      this.left.insert(val);
    }
  }else if( val > this.value){
    if (this.right === null) {
      this.right = makeBinarySearchTree(val);
    } else {
      this.right.insert(val);
    }
  }else{
    //same value do nothing bitch!
  }

};

bTreePrototype.contains = function(val){
  if (val === this.value){
    return true;
  } else if(val < this.value){
    if(!this.left){
      return false;
    } else {
      return this.left.contains(val);
    }
  } else if (val > this.value){
    if(!this.right){
      return false;
    } else {
    return this.right.contains(val);
    }
  }

};

bTreePrototype.depthFirstLog = function(callBack){
  callBack(this);

  if(this.left){
    this.left.depthFirstLog(callBack);
  }
  if(this.right){
    this.right.depthFirstLog(callBack);
  }

};

bTreePrototype.breadthFirstLog = function(callBack){
  callBack(this);

  var traverse = function(child){
    if (child.right){
      callBack(child.right);
    }
    if(child.left){
      callBack(child.left);
    }
    if(child.right){
      traverse(child.right);
    }
    if(child.left){
      traverse(child.left);
    }
  };
  traverse(this);
};

