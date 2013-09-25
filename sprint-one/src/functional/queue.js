var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var front = 0;
  // Implement the methods below

  instance.enqueue = function(value){
    storage[size + front] = value;
    size++;
  };

  instance.dequeue = function(){
    var fval = storage[front];
    delete storage[front];
    if(size){
      front++;
      size--;
    }
    return fval;
  };

  instance.size = function(){
    return size;
  };

  return instance;
};