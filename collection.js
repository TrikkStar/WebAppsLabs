/*
 * collection.js
 *
 * Contains implementation for a "TaskCollection" "class"
 */

var TaskCollection, Task, proto;

Task = require("./task");

/*
 *       Constructors
 */

function makeNewCollection(arr){
    "use strict";
    var col = Object.create(proto);

    Object.defineProperty(col, "values", {
        writable: false,
        value: []
    });
	if (Object.prototype.toString.call(arr) === "[object Array]"){
		col.add(arr);
	}
    Object.preventExtensions(col);
    return col;
}

/*
 *       Prototype / Instance methods
 */
function makeFunctionFromArg(arg){
	"use strict";
	if (typeof arg === "function"){
		return arg;
	} else if (typeof arg === "number"){
		return function(task){
			return task.id === arg;
		};
	} else if (typeof arg === "string"){
		return function(task){
			return task.title === arg;
		};
	} else if (typeof arg === "object"){ // regex
		return function(task){
			return arg.test(task.title);
		};
	}
}

function getIndex(arg, self){
	"use strict";
	var i;
    arg = makeFunctionFromArg(arg);
    for (i = 0; i < self.length(); i += 1){
        if (arg(self.values[ i ])){
            return i;
        }
    }
    return -1;
}

function addOneTask(task, self){
	"use strict";
	if (!self.has(task.id)){
		self.values.push(task);
	}
}

function removeOneTask(task, self){
	"use strict";
	if (self.has(task)){
		self.values.splice(self.values.indexOf(self.get(task)), 1);
	}
}

function printTask(tsk){
	"use strict";
	var str = tsk.title;
	if (tsk.isCompleted()){
		str = str + " " + tsk.completedTime;
	}
	if (tsk.tags.length !== 0){
		tsk.tags.forEach(function (item, i){
			str = str + " #" + item;
		});
	}
	str = str + "\n";
	return str;
}

proto = {
   length: function length(){
		"use strict";
		return this.values.length;
   },
   isEmpty: function isEmpty(){
		"use strict";
		return this.length() === 0;
   },
   get: function get(arg){
		"use strict";
		var x = getIndex(arg, this);
		if (x === -1){
		    return null;
		}
		return this.values[ x ];
   },
   has: function has(arg){
		"use strict";
		if (getIndex(arg, this) === -1){
			return false;
		}
		return true;
   },
   add: function add(arg){
		"use strict";
		if (Object.prototype.toString.call(arg) === "[object Array]"){
			arg.forEach(function (item, i){
				addOneTask(item, this);
			}, this);
		} else {
			addOneTask(arg, this);
		}
		return this;
   },
   new: function newTask(){
	    "use strict";
	    var task = Task.new();
	    addOneTask(task, this);
	    return task;
   },
   remove: function remove(arg){
		"use strict";
		if (typeof arg === "number"){
			removeOneTask(arg, this);
		} else {
			arg.forEach(function (item, i){
				removeOneTask(item, this);
			}, this);
		}
		return this;
   },
   filter: function filter(arg){
		"use strict";
		var tskC = TaskCollection.new();
		if (Object.prototype.toString.call(arg) === "[object Array]"){
			arg.forEach(function (item, i){
				tskC.add(this.get(item));
			}, this);
		} else {
			tskC.add(this.get(arg));
		}
		return tskC;
   },
   forEach: function forEach(func){
		"use strict";
		this.values.forEach(function (item, i){
			func(item);
		}, this);
		return this;
   },
   groupByTag: function groupByTag(){
		"use strict";
		var obj, func, container;
		obj = {};
		container = Task.new();
		func = function(tsk){
			container.addTags(tsk.tags);
		};
		this.forEach(func);
		container.tags.forEach(function (tag, i){
			var arr = [];
			this.values.forEach(function (task, i2){
				if (task.hasTag(tag)){
					arr.push(task);
				}
			});
			obj[ tag ] = TaskCollection.new(arr);
		}, this);
		return obj;
   },
   print: function print(){
		"use strict";
		var str = "";
		if (!this.isEmpty()){
			this.values.forEach(function (item, i){
				str = str + printTask(item);
				// console.log("String " + str);
				// console.log("\n");
			});
		}
		return str;
   },
   concat: function concat(coll){
		"use strict";
		coll.values.forEach(function (item, i){
			this.add(item);
		}, this);
		return this;
   }
};




// DO NOT MODIFY ANYTHING BELOW THIS LINE
TaskCollection = {
   new: makeNewCollection
};

Object.defineProperty(TaskCollection, proto, {
   value: proto,
   writable: false
});

module.exports = TaskCollection;
