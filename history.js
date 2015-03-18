/*
 * history.js
 *
 * Contains implementation for a CmdHistory "class"
 */

var DLList, CmdHistory, proto;

DLList = require("./dllist");

/*
 *       Constructors
 */

function makeNewHistory() {
   var hist = Object.create(proto);
   hist.list = DLList.new();
   hist.current = null;
   return hist;
}


/*
 *       Prototype / Instance methods
 */

proto = {
	add: function(cmd){
		if (this.current === null){
			this.current = this.list.push(cmd);
		} else {
			this.current = this.list.insertAt(cmd, this.current);
		}
		cmd.execute();
	},
	canRedo: function(){
		if (this.current !== null){
			return !this.list.isLast(this.current);
		}
		return false;
	},
	canUndo: function(){
		return this.current !== null;
	},
	redo: function(){
		if (this.canRedo()){
			this.current = this.current.next;
			this.current.value.execute();
		} else {
			throw new Error("Invalid Call: no latter commands");
		}
	},
	undo: function(){
		if (this.canUndo()){
			this.current.value.unexecute();
			if (this.list.isFirst(this.current)){
				this.current = null;
			} else {
				this.current = this.current.prev;
			}
		} else {
			throw new Error("Invalid Call: no prior commands");
		}
	},
	undoableIterator: function(){
		// if (this.canRedo()){
		// 	return this.list.reverseIterateFrom(this.current);
		// } else {
		// 	return this.list.reverseIterateFrom(this.current.prev);
		// }
	},
	redoableIterator: function(){
		// if (this.canUndo()){
		// 	return this.list.reverseIterateFrom(this.current);
		// } else {
		// 	return this.list.reverseIterateFrom(this.current.prev);
		// }
	}
};



// DO NOT MODIFY ANYTHING BELOW THIS LINE
CmdHistory = {
   new: makeNewHistory
};

Object.defineProperty(CmdHistory, "prototype", {
   value: proto,
   writable: false
});

module.exports = CmdHistory;
