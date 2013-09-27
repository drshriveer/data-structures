// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = makeNode(value);
    if (list.head === null) {
      list.head = node;
      list.tail = node;
    }else{
      list.tail.next = node;
      node.prev = list.tail;
      list.tail = node;
    }
  };

  list.addToHead = function(value){
    var node = makeNode(value);
    if (list.head === null) {
      list.tail = node;
      list.head = node;
    }else{
      node.next = list.head;
      list.head = node;
    }
  };

  list.removeHead = function(){
    var value = list.head.value;
    list.head = list.head.next;
    list.tail.prev = null;

    return value;
  };

  list.removeTail = function(){
    var value = list.tail.value;
    list.tail = list.tail.prev;
    return value;
  };

  list.contains = function(value){
    var currentNode = list.head;
    while(currentNode.next){
      if(value === currentNode.value){ return true; }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null && next;
  node.prev = null && prev;
  return node;
};
//
