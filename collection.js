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
		//console.log("f");
		return arg;
	} else if (typeof arg === "number"){
		//console.log("n");
		return function(task){
			return task.id === arg;
		};
	} else if (typeof arg === "string"){
		//console.log("s");
		return function(task){
			return task.title === arg;
		};
	}
    // need to determine if a regular expression can be evaluated the same as a string or not
}

function getIndex(arg, self){
	"use strict";
	var i;
    arg = makeFunctionFromArg(arg);
    //console.log(self);
    //console.log(self.length());
    //console.log(arg(13));
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
	if (!self.has(task)){
		self.values.splice(self.values.indexOf(self.get(task)), 1);
	}
}

proto = {
   length: function length(){
		"use strict";
		return this.values.length;
   },
   isEmpty: function isEmpty(){
		"use strict";
		return this.length !== 0;
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
		arg.forEach(function (item, i){
			addOneTask(item, this);
		}, this);
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
		arg.forEach(function (item, i){
			removeOneTask(item, this);
		}, this);
		return this;
   },
   filter: function filter(arg){
		"use strict";
		var tsk = Task.new();
		arg.forEach(function (item, i){
			tsk.add(this.get(item));
		}, this);
		return tsk;
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
   },
   print: function print(){
		"use strict";
   },
   concat: function concat(coll){
		"use strict";
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
