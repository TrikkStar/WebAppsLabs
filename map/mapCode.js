/*
 * Name 1: Noah Thederahn
 * Name 2: Shelby Babcock
 */

// Do not change the name of this function
var makeMap = function() {
// All your code will go inside this function
   // This object should contain the methods you want to expose:
   var o = {
   		has: function has(key){
   			return storedPairs.hasOwnProperty(key);
   		},
   		lookup: function lookup(key){
   			if(this.has(key)){
   				return storedPairs[key];
   			}
   			throw new Error ("Attempt to lookup nonexistant key");
   		},
   		add: function add(key, value){
			if(!this.has(key)){
   				storedPairs[key] = value;
   				return this;
   			}
   			else{
   				throw new Error ("Attempt to assign to pre-existing key");
   			}
   		},
   		update: function update(key, value){

   		},
   		remove: function remove (key){
   			if(this.has(key)){
   				delete storedPairs[key];
   			}
   			else{
   				throw new Error ("Attempt to delete nonexistant key");
   			}
   		}
   	}
   // Use this object to store the key-value pairs:
   var storedPairs = {};

   // Add local functions here
  
   // Prepare the object o before returning it

   return o;
}


// Do NOT change anything below this line.
/*
 * To allow node.js to run our tests. DO NOT CHANGE!
 */
try {
   module.exports = {
      makeMap: makeMap
   };
} catch (e) {}
