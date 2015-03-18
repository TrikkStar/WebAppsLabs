/*
 * history.spec.js
 *
 * Test file for your history class
 */
var expect, DLList, CmdHistory;

expect = require('./chai.js').expect;

DLList = require('./dllist.js');
CmdHistory = require('./history.js');

var LogEntries = [];
var Log = {
   add: function(s) { LogEntries.push(s); return this; },
   get: function() { return LogEntries; },
   clear: function() { LogEntries = []; return this; }
};
var id = 0;
function mockExecute() { Log.add(this.toString + " executed"); }
function mockUnexecute() { Log.add(this.toString + " unexecuted"); }
function mockCommand() {
   id += 1;
   return {
      execute: mockExecute,
      unexecute: mockUnexecute,
      toString: "command " + id
   };
}

describe("Your CmdHistory object", function(){
	beforeEach(function(){
		LogEntries = [];
		id = 0;
	});
	it("constructs correctly", function(){
		var hist = CmdHistory.new();
		expect(hist).to.be.a("object");
		expect(hist).to.have.ownProperty("list", "current", "add", "canRedo", "canUndo", "redo", "undo", "undoableIterator", "redoableIterator");
		expect(hist.current).to.equal(null);
	});
	it("adds commands properly", function(){
		var hist, cmd;
		hist = CmdHistory.new();
		cmd = mockCommand();
		hist.add(cmd);
		expect(hist.current.value).to.equal(cmd);
		expect(hist.canUndo()).to.be.true;
		expect(hist.canRedo()).to.be.false;
		expect(LogEntries[0]).to.equal("command 1 executed");
		hist.undo();
		hist.add(mockCommand());
		expect(hist.current.value).to.not.equal(cmd);
		expect(LogEntries[2]).to.equal("command 2 executed");
	});
	it("undo's commands properly", function(){
		var hist, cmd;
		hist = CmdHistory.new();
		cmd = mockCommand();
		hist.add(cmd);
		hist.add(mockCommand());
		expect(hist.current.value).to.not.equal(cmd);
		hist.undo();
		expect(hist.canUndo()).to.be.true;
		expect(hist.canRedo()).to.be.true;
		expect(LogEntries[2]).to.equal("command 2 unexecuted");
		expect(function() {hist.undo()}).to.not.throw(Error);
		expect(LogEntries[3]).to.equal("command 1 unexecuted");
		expect(hist.current).to.equal(null);
		expect(hist.canUndo()).to.be.false;
		expect(hist.canRedo()).to.be.true;
		expect(function() {hist.undo()}).to.throw(Error);
	});
	it("redo's commands properly", function(){
		var hist, cmd;
		hist = CmdHistory.new();
		cmd = mockCommand();
		hist.add(mockCommand());
		hist.add(cmd);
		hist.add(mockCommand());
		expect(hist.current.value).to.not.equal(cmd);
		hist.undo();
		expect(hist.current.value).to.equal(cmd);
		expect(LogEntries[3]).to.equal("command 3 unexecuted");
		expect(function() {hist.redo()}).to.not.throw(Error);
		expect(hist.current.value).to.not.equal(cmd);
		expect(LogEntries[4]).to.equal("command 3 executed");
		expect(function() {hist.redo()}).to.throw(Error);
	});
	it("gives proper iterators", function(){
		var hist, cmd, i, ittrU, ittrR;
		hist = CmdHistory.new();
		for (i = 0; i < 4; i += 1){
			hist.add(mockCommand());
		}
		cmd = mockCommand();
		hist.add(cmd);
		for (i = 0; i < 4; i += 1){
			hist.add(mockCommand());
		}
		for (i = 0; i < 4; i += 1){
			hist.undo();
		}
		expect(hist.current.value).to.equal(cmd);
		ittrR = hist.redoableIterator().toArray();
		ittrU = hist.undoableIterator().toArray();
		expect(ittrR.length).to.equal(4);
		expect(ittrU.length).to.equal(5);
		expect(ittrR[0].value.toString).to.equal("command 6");
		expect(ittrU[0].value.toString).to.equal(cmd.toString);
		expect(ittrR[3].value.toString).to.equal("command 9");
		expect(ittrU[4].value.toString).to.equal("command 1");
	});
});
