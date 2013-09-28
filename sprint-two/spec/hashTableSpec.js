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

  it("should be able to insert items into table ** check spec if fails", function() {

    // !!
    // This test is a hack that accesses internal (private) info
    // it MUST be changed if the way the insert is coded is changed
    // !!

    hashTable.insert('key1', 'value1');
    var key1 = getIndexBelowMaxForKey('key1',8);
    expect(hashTable._storage.get(key1)[0][1]).toEqual('value1');
  });

  it("should retrieve a particular item given its key", function(){
    hashTable.insert('key1', 'value1');
    hashTable.insert('key2', 'value2');

    expect(hashTable.retrieve('key1')).toEqual('value1');
    expect(hashTable.retrieve('key2')).toEqual('value2');
  });

  it("should remove a particular item given its key", function(){
    hashTable.insert('key1', 'value1');
    hashTable.insert('key2', 'value2');

    expect(hashTable.retrieve('key1')).toEqual('value1');
    hashTable.remove('key1');
    expect(hashTable.retrieve('key1')).toBe(undefined);

    expect(hashTable.retrieve('key2')).toEqual('value2');
    hashTable.remove('key2');
    expect(hashTable.retrieve('key2')).toBe(undefined);

  });


  it("should double in size when 75% capacity is obtained", function(){
    hashTable.insert('key1', 'value1');
    hashTable.insert('key2', 'value2');
    hashTable.insert('key2', 'value2');

    var key1 = getIndexBelowMaxForKey('key2',8);
    expect(hashTable._storage.get(key1)[0][1]).toEqual('value2');

    expect(hashTable._limit).toEqual(8);

    hashTable.insert('key3', 'value3');
    hashTable.insert('key4', 'value4');
    hashTable.insert('key5', 'value5');
    hashTable.insert('key6', 'value6');

    key1 = getIndexBelowMaxForKey('key2',16);
    expect(hashTable._storage.get(key1)[0][1]).toEqual('value2');

    expect(hashTable._limit).toEqual(16);
  });
  // add more tests!
});
