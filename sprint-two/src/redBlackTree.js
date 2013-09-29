var makeRedBlackTree = function(value){
  var rbTree = Object.create(rbTreePrototype);

  rbTree.value = value;
  rbTree.left = null;
  rbTree.right = null;
  rbTree.parent = null;
  rbTree.isRed = false;

  return rbTree;
};

var rbTreePrototype = {};

rbTreePrototype.insert = function(val){

  if(val < this.value){
    if(this.left === null) {
      this._makeChild(this.left, val);
    }else{
      this.left.insert(val);
    }
  }else if( val > this.value){
    if (this.right === null) {
      this._makeChild(this.right, val);
    } else {
      this.right.insert(val);
    }
  }else{
    //same value do nothing bitch!
  }

};

rbTreePrototype._makeChild = function(newChildNode, val){
  newChildNode = makeRedBlackTree(val);
  newChildNode.isRoot = false;
  newChildNode.isRed = true;
  newChildNode._checkColors();
};

rbTreePrototype._checkColors = function(){
  if(!this.parent.isRed){
    return;
  }else{
    var parent = this.parent;
    var uncle = (parent.parent.left !== this) ? parent.parent.left : parent.parent.right;
    if(uncle.isRed){
      parent.isRed = !parent.isRed;
      uncle.isRed = !uncle.isRed;
      parent.parent.isRed = !parent.parent.isRed;
      _checkColors(parent);
    }else{ //uncle is black
      var isRight = (parent.right === this);
      this.rotate(isRight);
    }
  }
};

rbTreePrototype._rotate = function(isRight){

};



rbTreePrototype.contains = function(val){
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


