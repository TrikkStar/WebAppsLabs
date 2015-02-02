/*
 * task.js
 *
 * Contains implementation for a "task" "class"
 */

var Task, proto, val = 0;

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
	"use strict";
	var	tsk;

	tsk = Object.create(proto);
	tsk.title = "";
	tsk.completedTime = null;
	Object.defineProperty(tsk, "tags", {
		configurable: false,
		writeable: false,
		enumerable: false,
		value: []
	});
	function gitValue(){
		val += 1;
		return val;
	}
	Object.defineProperty(tsk, "id", {
		configurable: false,
		writeable: false,
		value: gitValue()
	});

	Object.preventExtensions(tsk);
	return tsk;
}

function makeTaskFromObject(obj){
	"use strict";
	var tsk = Task.new();
	tsk.setTitle(obj.title);
	tsk.addTags(obj.tags);
	return tsk;
}

function makeTaskFromString(str){
	"use strict";
	return Task.fromObject(processString(str));
}


/*
 *       Prototype / Instance methods
 */

proto = {
	setTitle: function setTitle(str){
		"use strict";
		str.trim();
		this.title = str;
		return this;
	},
	isCompleted: function isCompleted(){
		"use strict";
		return this.completedTime !== null;
	},
	toggleCompleted: function toggleCompleted(){
		"use strict";
		if (this.completedTime === null){
			this.completedTime = new Date();
		} else {
			this.completedTime = null;
		}
		return this;
	},
	hasTag: function hasTag(str){
		"use strict";
		for (var i=0; i < this.tags.length; i +=1){
			if (this.tags[i] === str){
				return true;
			}
		}
		return false;
	},
	addTag: function addTag(str){
		"use strict";
		if (!this.hasTag(str)){
			this.tags.push(str);
		}
		return this;
	},
	removeTag: function removeTag(str){
		"use strict";
		if (this.hasTag(str)){
			this.tags.splice(this.tags.indexOf(str), 1);
		}
	},
	toggleTag: function toggleTag(str){
		"use strict";
		if (this.hasTag(str)){
			this.removeTag(str);
		} else {
			this.tags.push(str);
		}
		return this;
	},
	addTags: function addTags(arr){
		"use strict";
		arr.forEach(function (item, i){
			this.addTag(item);
		}, this);
	},
	removeTags: function removeTags(arr){
		"use strict";
		arr.forEach(function (item, i){
			this.removeTag(item);
		}, this);
	},
	toggleTags: function toggleTags(arr){
		"use strict";
		arr.forEach(function (item, i){
			this.toggleTag(item);
		}, this);
	},
	clone: function clone(){
		"use strict";
		var i, cln;
		cln = Task.new();
		cln.title = this.title;
		cln.completedTime = this.completedTime;
		cln.addTags(this.tags);
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
