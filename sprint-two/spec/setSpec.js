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

    it("after add should add string elemets", function() {
    set.add('a');
    set.add('b');
    set.add('c');
    set.add('d');
    set.add('e');
    expect(set._storage['a']).toEqual('a');
    expect(set._storage['b']).toEqual('b');
    expect(set._storage['c']).toEqual('c');
    expect(set._storage['d']).toEqual('d');
  });

  it("should have a working 'contains' method", function() {
    set.add('a');
    set.add('b');
    set.add('c');
    set.add('d');
    set.add('e');
    expect(set.contains('a')).toBe(true);
    expect(set.contains('e')).toBe(true);
    expect(set.contains('s')).toBe(false);
  });

  it("should remove specific element from set", function() {
    set.add('a');
    set.add('b');
    set.add('c');
    set.add('d');
    set.add('e');
    set.remove('a');
    set.remove('b');
    set.remove('c');
    expect(set.contains('a')).toBe(false);
    expect(set.contains('b')).toBe(false);
    expect(set.contains('c')).toBe(false);
    expect(set.contains('d')).toBe(true);
    expect(set.contains('e')).toBe(true);
    expect(set.contains('e')).toBe(true);
    expect(set.contains('s')).toBe(false);

  });

    it("should add number elemets", function() {
    set.add(1);
    set.add(2);
    set.add(3);
    set.add(4);
    set.add(5);
    expect(set._storage['1']).toEqual(1);
    expect(set._storage['2']).toEqual(2);
    expect(set._storage['3']).toEqual(3);
    expect(set._storage['4']).toEqual(4);
  });


});