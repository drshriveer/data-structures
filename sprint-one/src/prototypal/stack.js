var makeStack = function(){
  var instance = Object.create(stackMethods);
  instance.storage = {};
  instance.mySize = 0; // Hint: set an initial value here

  return instance;
};

stackMethods = {};
/////////////////////////////////////////
stackMethods.push = function(value){
    
    this.mySize++;
    this.storage[this.mySize] = value;
};

stackMethods.pop = function(){
  var val = this.storage[this.mySize];
  delete this.storage[this.mySize];
  this.mySize && this.mySize--;
  return val;  
};

stackMethods.size = function(){
  return this.mySize;
};