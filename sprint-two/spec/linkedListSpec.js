describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  // it("should add to tail"), function(){
    
  //   //expect(linkedList.addToTail('a'));
  // }

  it("should contain node in 'head' ", function(){
    linkedList.addToTail('a');
    var node = makeNode('a');
    expect(linkedList.head).toEqual(node);
  });

  it("should remove head and return value", function(){
    linkedList.addToTail('a');
    linkedList.addToTail('b');
    expect(linkedList.removeHead()).toEqual('a');
    expect(linkedList.removeHead()).toEqual('b');
  });

  it("should test if list contains value", function(){
    linkedList.addToTail('a');
    linkedList.addToTail('b');
    linkedList.addToTail('c');
    linkedList.addToTail('d');
    expect(linkedList.contains('a')).toBe(true);
    expect(linkedList.contains('c')).toBe(true);
    expect(linkedList.contains('e')).toBe(false);
  });
  // add more tests here to test the functionality of linkedList
    it("should accept 'addToHead' to add value to top of list", function(){
    var aNode = makeNode('a');
    var bNode = makeNode('b');
    var cNode = makeNode('c');

    linkedList.addToTail('a');
    expect(linkedList.head).toEqual(aNode);

    linkedList.addToTail('b');
    expect(linkedList.head).toEqual(aNode);

    likedList.addToHead('c');
    expect(linkedList.head).toEqual(cNode);
  });

});