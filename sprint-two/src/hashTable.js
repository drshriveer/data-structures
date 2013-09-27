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
  console.log(i);

  // if(this._storage.get(i) === undefined){
  //   this._storage.set(i, [[k,v]]);
  // }else if ( _(this._storage.get(i)).reduce(function(memo, keyPair){
  //   return memo || (keyPair[0] === k);
  // },false) ){
  //   this._storage.get(i).push([k,v]);
  // }

  console.log(i);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  for (var j = 0; j < this._storage(i).length; j++) {
    if( this._storage.get(i)[j][0] === k){
      return this._storage.get(i)[j][1];
    }
  }
  return;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  delete this._storage.get(i)[k];
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you

