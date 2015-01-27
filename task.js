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

function makeTaskFromObject(obj){
	var tsk = Task.new();
	tsk.setTitle(obj.title);
	tsk.addTags(obj.tags);
	return tsk;
}

function makeTaskFromString(str){

}


/*
 *       Prototype / Instance methods
 */

proto = {
	setTitle: function setTitle(str){
		str.trim();
		this.title = str;
		return this;
	},
	isCompleted: function isCompleted(){
		return this.completedTime !== null;
	},
	toggleCompleted: function toggleCompleted(){
		if (this.this.completedTime === null){
			this.completedTime = new Date();
		} else {
			this.this.completedTime = null;
		}
		return this;
	},
	hasTag: function hasTag(str){
		this.tags.forEach(function(){
			if (currentValue === str){
				return true;
			}
		});
		return false;
	},
	addTag: function addTag(str){
		if (!this.hasTag(str)){
			this.tags.push(str);
		}
	},
	removeTag: function removeTag(str){
		if (this.hasTag(str)){
			this.tags.splice(this.tags.indexOf(str), 1);
		}
		return this;
	},
	toggleTag: function toggleTag(str){
		if (this.hasTag(str)){
			this.removeTag(str);
		} else {
			this.tags.push(str);
		}
		return this;
	},
	addTags: function addTags(arr){
		arr.forEach(this.addTag(currentValue));
	},
	removeTags: function removeTags(arr){
		arr.forEach(this.removeTag(currentValue));
	},
	toggleTags: function toggleTags(arr){
		arr.forEach(this.addTag(currentValue));
	},
	clone: function clone(){
		var cln = Task.new();
		cln.title = this.title;
		cln.completedTime = this.completedTime;
		cln.tags = this.tags;
		return cln;
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
