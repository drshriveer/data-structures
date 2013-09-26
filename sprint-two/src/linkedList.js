// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = makeNode(value);
    if (list.head === null) {
      list.head = node;
    }
    list.tail.next = node;
    list.tail = node;
  };

  list.removeHead = function(){
    var value = list.head.value;
    list.head = list.head.next;
    return value;
  };

  list.contains = function(value){
    var currentNode = list.head;
    var found = false;
    while(currentNode.next || !found ){
      found = (value === currentNode.value);
      currentNode = currentNode.next;
    }
    return found;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null && next;  
  return node;
};
