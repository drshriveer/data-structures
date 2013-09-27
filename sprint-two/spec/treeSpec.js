describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree('initial');
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

  it("should have property 'children' which is an Array", function(){
    expect(Array.isArray(tree.children)).toBe(true);
  });

  it("should 'addChild' with value and child's value should exist", function(){
    tree.addChild('a');
    tree.addChild('b');

    expect(tree.children[0].value).toEqual('a');
    expect(tree.children[1].value).toEqual('b');
  });

  it("should check if a value is 'contained' in a tree or is subsequent children", function(){
    tree.addChild('a');
    tree.addChild('b');
    tree.children[0].addChild('c');
    tree.children[0].addChild('d');
    tree.children[1].addChild('e');

    expect(tree.contains('a')).toBe(true);
    expect(tree.contains('b')).toBe(true);
    expect(tree.contains('c')).toBe(true);
    expect(tree.contains('d')).toBe(true);
    expect(tree.contains('e')).toBe(true);
    expect(tree.contains('foo')).toBe(false);
    expect(tree.contains('bar')).toBe(false);
  });

  it("nodes should have parents", function(){
    tree.addChild('a');
    tree.addChild('b');
    tree.children[0].addChild('c');
    tree.children[0].addChild('d');
    tree.children[1].addChild('e');

    expect(tree.parent).toBe(null);
    expect(tree.children[0].parent.value).toEqual('initial');
    expect(tree.children[1].parent.value).toEqual('initial');
    expect(tree.children[0].children[0].parent.value).toEqual('a');
    expect(tree.children[0].children[1].parent.value).toEqual('a');
    expect(tree.children[1].children[0].parent.value).toEqual('b');

  });

  it("should remove a tree from ", function(){
    tree.addChild('a');
    tree.addChild('b');
    tree.children[0].addChild('c');
    tree.children[0].addChild('d');
    tree.children[1].addChild('e');

    expect(tree.children[1].value).toEqual('b');

    tree.children[1].removeFromParent();
    expect(tree.children[1]).toBe(null);

    tree.children[0].children[0].removeFromParent();
    expect(tree.children[0].children[0].value).toEqual('d');
  });


  // Add more tests here to test the functionality of tree.
});