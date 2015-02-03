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
        values: []
    });
	if (Object.prototype.toString.call(arr) === "[object Array]"){
		this.add(arr);
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
        return function(task){ return task.id === arg; };
    } else if (typeof arg === "string"){
        return function(task){ return task.title === arg; };
    }
    // need to determine if a regular expression can be evaluated the same as a string or not
}

function getIndex(arg){
	"use strict";
    arg = makeFunctionFromArg(arg);
    for (var i = 0; i < this.length; i += 1){
        if (arg(this.values[i])){
            return i;
        }
    }
    return -1;
}

function addOneTask(task){
	"use strict";
	if (!this.has(task)){
		this.values.push(task);
	}
}

function removeOneTask(task){
	"use strict";
	if (!this.has(task)){
		this.values.splice(this.values.indexOf(this.get(task)), 1);
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
		var x = getIndex(arg);
		if (x === -1){
		    return null;
		}
		return this.values[x];
   },
   has: function has(arg){
		"use strict";
		if (getIndex(arg) === -1){
			return false;
		}
		return true;
   },
   add: function add(arg){
		"use strict";
		arg.forEach(function (item, i){
			addOneTask(item);
		}, this);
		return this;
   },
   new: function newTask(){
	    "use strict";
	    var task = Task.new();
	    addOneTask(task);
	    return task;
   },
   remove: function remove(arg){
		"use strict";
		arg.forEach(function (item, i){
			removeOneTask(item);
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

module.exports = Task;
