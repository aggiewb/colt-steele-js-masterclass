let stack = [];
// adding to end, and removing from the end
stack.push("a");
stack.push("little");
stack.push("example");
stack.pop(); // example
stack.pop(); // little
stack.pop(); // a

stack = [];
// adding to beginning, and removing from the beginning
stack.unshift("another");
stack.unshift("stack");
stack.unshift("example");
stack.shift(); // example
stack.shift(); // stack
stack.shift(); // another