describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree();
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(binarySearchTree.children).toEqual(jasmine.any(Function));
    expect(binarySearchTree.contains).toEqual(jasmine.any(Function));
    expect(binarySearchTree.depthFirstLog).toEqual(jasmine.any(Function));
  });
  // add more tests here to test the functionality of binarySearchTree

  it("should insert multiple items", function(){
    binarySearchTree.insert(3);
    binarySearchTree.insert(1);
    binarySearchTree.insert(6);
    binarySearchTree.insert(10);


    expect(binarySearchTree.value).toEqual(3);
    expect(binarySearchTree.left.value).toEqual(1);
    expect(binarySearchTree.right.value).toEqual(6);
    expect(binarySearchTree.right.right.value).toEqual(10);

  });

  it("should use .contains to find inserted items", function(){

  });


});