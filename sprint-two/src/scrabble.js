var Scrabble = function(wordPart){

  this._completedWord = false;
  this._wordPart = "a" || wordPart;
  this._childNodes = {};
  this._childNodes.a = null;
  this._childNodes.b = null;
  this._childNodes.c = null;
  this._childNodes.d = null;
  this._childNodes.e = null;
  this._childNodes.f = null;
  this._childNodes.g = null;
  this._childNodes.h = null;
  this._childNodes.i = null;
  this._childNodes.j = null;
  this._childNodes.k = null;
  this._childNodes.l = null;
  this._childNodes.m = null;
  this._childNodes.n = null;
  this._childNodes.o = null;
  this._childNodes.p = null;
  this._childNodes.q = null;
  this._childNodes.r = null;
  this._childNodes.s = null;
  this._childNodes.t = null;
  this._childNodes.u = null;
  this._childNodes.v = null;
  this._childNodes.w = null;
  this._childNodes.x = null;
  this._childNodes.y = null;
  this._childNodes.z = null;
};

Scrabble.prototype.addDictionary = function(listOfWords){
  for (var i = 0; i < listOfWords.length; i++) {
      addWord(listOfWords[i]);
  }
};

Scrabble.prototype.addWord = function(word){
  if(word.length === 1){
    this._completedWord = true;
  }
  if(! this._childNodes[word[0]]){
    this._childNodes[word[0]] = new Scrabble(this._wordPart+word[0]);
    //this._childNodes[word[0]] = 
  }
  // traverse with each letter, when end is found add letter 
  // to completed words of that node
};