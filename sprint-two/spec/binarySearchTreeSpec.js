describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree(3);
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(binarySearchTree.insert).toEqual(jasmine.any(Function));
    expect(binarySearchTree.contains).toEqual(jasmine.any(Function));
    expect(binarySearchTree.depthFirstLog).toEqual(jasmine.any(Function));
  });
  // add more tests here to test the functionality of binarySearchTree

  it("should insert multiple items", function(){
    binarySearchTree.insert(1);
    binarySearchTree.insert(6);
    binarySearchTree.insert(10);


    expect(binarySearchTree.value).toEqual(3);
    expect(binarySearchTree.left.value).toEqual(1);
    expect(binarySearchTree.right.value).toEqual(6);
    expect(binarySearchTree.right.right.value).toEqual(10);

  });

  it("should use .contains to find inserted items", function(){
    binarySearchTree.insert(3);
    binarySearchTree.insert(1);
    binarySearchTree.insert(6);
    binarySearchTree.insert(10);

    expect(binarySearchTree.contains(3)).toBe(true);
    expect(binarySearchTree.contains(1)).toBe(true);
    expect(binarySearchTree.contains(6)).toBe(true);
    expect(binarySearchTree.contains(10)).toBe(true);
    expect(binarySearchTree.contains(11)).toBe(false);
  });


});