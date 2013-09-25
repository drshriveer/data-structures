var makeQueue = function(){
  var instance = Object.create(queueMethods);

  instance.storage = {};  
  instance.mySize = 0;
  instance.front = 0;

  return instance;
};

queueMethods = {};

queueMethods.size = function(){
  return this.mySize;
}

queueMethods.enqueue = function(value){
    this.storage[this.mySize + this.front] = value;
    this.mySize++;
};

queueMethods.dequeue = function(){
  var fval = this.storage[this.front];
  delete this.storage[this.front];
  if(this.mySize){
    this.front++;
    this.mySize--;
  }
  return fval;
};


