try {
   var chai = require('./../chai.js');
   var expect = chai.expect;
   var methods = require('./mapCode.js');
   var binarySearch = methods.binarySearch;
   var countTags = methods.countTags;
   var extractHashTags = methods.extractHashTags;
} catch (e) {}

function randomString(len) {
   var arr = [], caseRange, i;
   if (len == null) { len = 5; }
   for (i = 0; i < len; i += 1) {
      caseRange = [65, 97][Math.floor(Math.random() * 2)];
      arr.push(Math.floor(Math.random() * 26) + caseRange);
   }
   return String.fromCharCode.apply(String, arr);
}
// DO NOT CHANGE ANYTHING ABOVE THIS LINE

// Add your tests below
describe('Your code for maps', function() {
   it('defines a variable makeMap', function() {
      expect(function() { makeMap; }).to.not.throw(Error);
   });
   it('actually defines a function makeMap', function() {
      expect(makeMap).to.be.a('function');
   });
});

describe('Your makeMap function', function() {
   var map = makeMap();
   it('returns an object', function() {
      expect(map).to.be.a('object');
   });
   it('returns an object with methods has, lookup, add, update, and remove', function() {
      ['has', 'lookup', 'add', 'update', 'remove'].forEach(function(key) {
         expect(map[key]).to.be.a('function');
      });
   });
});

describe('Map methods:', function() {
   var map;
   var a;
   var b;
   beforeEach(function() {
      map = makeMap();
      a = randomString(5);
      b = randomString(4);
   });
   it('returns true if key is present', function(){
      map.add(a,5);
      expect(map.has(a)).to.equal(true);
   });
   it('returns false if key is not present',function(){
      expect(map.has(a)).to.equal(false);
   });
   it('returns value stored at key',function(){
      map.add(a,5);
      expect(map.lookup(a)).to.equal(5);
   });
   it('returns error if key does not exist',function(){
      map.add(a,5);
       expect(function(){map.lookup();}).to.throw(Error);
   });
   it('adds key and value to map and returns map',function(){
      expect(map.add(a,5)).to.equal(map);
   });
   it('add throws an error if the key already exists',function(){
      map.add(a,5);
       expect(function(){map.add();}).to.throw(Error);
   });
   it('update returns the map',function(){
      map.add(a,5);
      expect(map.update(a,6)).to.equal(map);
   });
   it('update changes the value of a key',function(){
      map.add(a,5);
      map.update(a,7);
      expect(map.lookup(a)).to.equal(7);
   });
   it('remove removes pair stored at key',function(){
      map.add(a,5);
      map.remove(a);
      expect(map.has(a)).to.equal(false);
   });
   it('remove throws an error if key is not there',function(){
       expect(function(){map.remove();}).to.throw(Error);
   });
});
