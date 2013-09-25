var Queue = function(){

  this.storage = {};  
  this.mySize = 0;
  this.front = 0;
};

Queue.prototype.size = function(){
  return this.mySize;
}

Queue.prototype.enqueue = function(value){
    this.storage[this.mySize + this.front] = value;
    this.mySize++;
};

Queue.prototype.dequeue = function(){
  var fval = this.storage[this.front];
  delete this.storage[this.front];
  if(this.mySize){
    this.front++;
    this.mySize--;
  }
  return fval;
};


