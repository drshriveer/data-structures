describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).toEqual(jasmine.any(Function));
    expect(set.contains).toEqual(jasmine.any(Function));
    expect(set.remove).toEqual(jasmine.any(Function));
  });

    it("after add should add specific elemets", function() {
    set.add('a');
    set.add('b');
    set.add('c');
    set.add('d');
    set.add('e');
    expect(set._storage['a'].toEqual('a'));
    expect(set._storage['b'].toEqual('b'));
    expect(set._storage['c'].toEqual('c'));
    expect(set._storage['d'].toEqual('d'));
  });

  it("after add should contain", function() {
    set.add('a');
    set.add('b');
    set.add('c');
    set.add('d');
    set.add('e');
    expect(set.contains('a').toBe(true));
    expect(set.contains('e').toBe(true));
    expect(set.contains('s').toBe(false));
  });
});