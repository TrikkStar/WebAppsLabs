/*
 * task.js
 *
 * Contains implementation for a "task" "class"
 */

var Task, proto;

// Helper method. You should not need to change it.
// Use it in makeTaskFromString
function processString(s) {
   "use strict";
   var tags, title;

   tags = [];
   title = s.replace(/\s*#([a-zA-Z]+)/g, function(m, tag) {
      tags.push(tag);
      return "";
   });
   return { title: title, tags: tags };
}

/*
 *       Constructors
 */

function makeNewTask(){
	var	tsk, val;
	
	tsk = Object.create(proto);
	val = 0;
	tsk.title = "";
	tsk.completedTime = null;
	Object.defineProperty(tsk, "tags", {
		configurable: false,
		writeable: false,
		enumerable: false,
		value: []
	});
	Object.defineProperty(tsk, "id", {
		configurable: false,
		writeable: false,
		value: function gitValue(){
			val += 1;
			return val;
		}
	});

	Object.preventExtensions(tsk);
	return tsk;
}

function makeTaskFromObject(o){

}

function makeTaskFromString(str){

}


/*
 *       Prototype / Instance methods
 */

proto = {
	setTitle: function setTitle(str){

	},
	isCompleted: function isCompleted(){

	},
	toggleCompleted: function toggleCompleted(){

	},
	hasTag: function hasTag(str){

	},
	addTags: function addTags(arr){

	},
	removeTags: function removeTags(arr){

	},
	toggleTags: function toggleTags(arr){

	},
	clone: function clone(){

	}
};



// DO NOT MODIFY ANYTHING BELOW THIS LINE
Task = {
   new: makeNewTask,
   fromObject: makeTaskFromObject,
   fromString: makeTaskFromString
};

Object.defineProperty(Task, proto, {
   value: proto,
   writable: false
});

module.exports = Task;
