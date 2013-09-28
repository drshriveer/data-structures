var makeSet = function(){
  var set = Object.create(setPrototype); // fix me
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(string){
  this._storage[string] = string;
};

setPrototype.contains = function(string){
  return !!(this._storage[string]);
};

setPrototype.remove = function(string){
  delete this._storage[string];
};
