describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = new HashTable();
  });

  it("should have methods named 'insert' and 'retrieve", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
  });

  it("should handle hash function collisions", function(){
    // force the hash function to return 0
    spyOn(window, 'getIndexBelowMaxForKey').andReturn(0);
    var v1 = 'val1', v2 = 'val2';
    hashTable.insert(v1, v1);
    hashTable.insert(v2, v2);
    expect(hashTable.retrieve(v1)).toEqual(v1);
    expect(hashTable.retrieve(v2)).toEqual(v2);
  });

  it("should be able to insert items into table", function() {
    hashTable.set('key1', 'value1');
    var key1 = getIndexBelowMaxForKey('key1');
    expect(hashTable._storage[key1]).toEqual('value1');
  });

  it("should retrieve a particular item given its key", function(){
    hashTable.set('key1', 'value1');
    hashTable.set('key2', 'value2');

    expect(hashTable.retrieve('key1')).toEqual('value1');    
    expect(hashTable.retrieve('key2')).toEqual('value2');    
  });

  it("should remove a particular item given its key", function(){
    hashTable.set('key1', 'value1');
    hashTable.set('key2', 'value2');

    expect(hashTable.retrieve('key1')).toEqual('value1');
    hashTable.remove('key1');
    expect(hashTable.retrieve('key1')).toBe(undefined);

    expect(hashTable.retrieve('key2')).toEqual('value2');
    hashTable.remove('key2');
    expect(hashTable.retrieve('key2')).toBe(undefined);
    
  });

  // add more tests!
});
