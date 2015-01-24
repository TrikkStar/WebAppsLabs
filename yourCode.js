/*
 * Name 1: Noah Thederahn
 * Name 2: Shelby Babcock
 */
// All your code will go here
var makeStack = function() {
	var values = [];
	var stk = {
		push: function push(el){
			values.push(el);
			return stk;
		},

		pop: function pop(){
			if (stk.isEmpty()){
				throw new Error ("Attempt to pop from empty stack");
			} else {
					return values.pop();
			}
		},
		
		isEmpty: function isEmpty(){
			return values.length === 0;
		}
	}
	return stk;
};


// Do NOT change anything below this line.
/*
 * To allow node.js to run our tests. DO NOT CHANGE!
 */
try {
   module.exports = {
      binarySearch: binarySearch,
      countTags: countTags,
      extractHashTags: extractHashTags
   };
} catch (e) {}
