var Stack = function(){

  this.storage = {};
  this.mySize = 0; 

};

Stack.prototype.push = function(value){
    
    this.mySize++;
    this.storage[this.mySize] = value;
};

Stack.prototype.pop = function(){
  var val = this.storage[this.mySize];
  delete this.storage[this.mySize];
  this.mySize && this.mySize--;
  return val;  
};

Stack.prototype.size = function(){
  return this.mySize;
};