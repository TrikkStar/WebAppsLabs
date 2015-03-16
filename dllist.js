/*
 * dllist.js
 *
 * Contains implementation for a double-linked list "class"
 */

var Iterator, DLList, proto;

Iterator = require("./iterator");

/*
 *       Constructors
 */

function makeNewList() {
   var lst, sentinel;

   lst = Object.create(proto);
   sentinel = {
      value: null
   };
   sentinel.next = sentinel;
   sentinel.prev = sentinel;
   lst.sentinel = sentinel;
   return lst;
}


/*
 *       Prototype / Instance methods
 */

proto = {
	isEmpty: function(){
		return this.sentinel.next === this.sentinel;
	},
	length: function(){
		var curr, count;
		if (this.isEmpty()){
			return 0;
		} else {
			count = 0;
			curr = this.sentinel.next;
			while (curr !== this.sentinel){
				curr = curr.next;
				count = count + 1;
			}
			return count;
		}
	},
	first: function(){
		if (this.isEmpty()){
			throw new Error("Invalid Call: list is empty");
		} else {
			return this.sentinel.next;
		}
	},
	last: function(){
		if (this.isEmpty()){
			throw new Error("Invalid Call: list is empty");
		} else {
			return this.sentinel.prev;
		}
	},
	insertAt: function(val, elem){
		var temp = {
			value: val,
			next: elem.next,
			prev: elem
		};
		temp.next.prev = temp;
		elem.next = temp;
		return temp;
	},
	unshift: function(val){
		return this.insertAt(val, this.sentinel);
	},
	push: function(val){
		return this.insertAt(val, this.sentinel.prev);
	},
	endAt: function(elem){
		elem.next = this.sentinel;
		this.sentinel.prev = elem;
		return this;
	},
	remove: function(elem){
		elem.prev.next = elem.next;
		elem.next.prev = elem.prev;
		return elem.value;
	},
	pop: function(){
		if (this.isEmpty()){
			throw "Invalid Call: list is empty";
		} else {
			return this.remove(this.sentinel.prev);
		}
	},
	shift: function(){
		if (this.isEmpty()){
			throw "Invalid Call: list is empty";
		} else {
			return this.remove(this.sentinel.next);
		}
	},
	isFirst: function(elem){
		return elem === this.sentinel.next;
	},
	isLast: function(elem){
		return elem === this.sentinel.prev;
	},
	iterator: function(){

	},
	forEach: function(){

	},
	toArray: function(){

	},
	iterateFrom: function(){

	},
	reverseIterateFrom: function(){

	}
};



// DO NOT MODIFY ANYTHING BELOW THIS LINE
DLList = {
   new: makeNewList
};

Object.defineProperty(DLList, "prototype", {
   value: proto,
   writable: false
});

module.exports = DLList;
