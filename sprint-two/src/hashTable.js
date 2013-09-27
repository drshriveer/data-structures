var HashTable = function(){
  this._limit = 8;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  // There's also a '.each' method that you might find
  // handy once you're working on resizing
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){

  var i = getIndexBelowMaxForKey(k, this._limit);
  var somethingInStorage = !!this._storage.get(i) || this._storage.get(i) === [];
  var keyAlreadyExists = _.reduce(this._storage.get(i), function(memo, keyPair){
    return memo || (keyPair[0] === k);
  },false);

  if( ! somethingInStorage ){
     this._storage.set(i, [[k,v]]);
  }
  else if (! keyAlreadyExists ){
    var store =  this._storage.get(i);
    store.push([k,v]);
    this._storage.set(i, store);
  }

  console.log(i);
};

HashTable.prototype.retrieve = function(k){

  var i = getIndexBelowMaxForKey(k, this._limit);
  for (var j = 0; j < this._storage.get(i).length; j++) {
    if( this._storage.get(i)[j][0] === k){
      return this._storage.get(i)[j][1];
    }
  }

  return;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var temp = this._storage.get(i);

  for (var j = 0; j < temp.length; j++) {
    if(temp[j][0] === k){
      this._storage.set(i, temp.slice(0,j).concat(temp.slice(j+1,temp.length)));
    }
  }

};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you

