"use strict";

// Run from this folder: node tests.js (Node.js required).
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const calculator = vm.createContext({});
for (const file of ["addition.js", "subtraction.js", "multiplication.js", "division.js"]) {
    vm.runInContext(fs.readFileSync(path.join(__dirname, file), "utf8"), calculator);
}
assert.equal(calculator.add(10, 20), 30);
assert.equal(calculator.add(-2, 0.5), -1.5);
assert.equal(calculator.subtract(20, 10), 10);
assert.equal(calculator.subtract(3, 7), -4);
assert.equal(calculator.multiply(6, 7), 42);
assert.equal(calculator.multiply(4, 0), 0);
assert.equal(calculator.divide(7, 2), 3.5);
assert.equal(calculator.divide(-9, 3), -3);
assert.throws(() => calculator.divide(7, 0), /Cannot divide by zero/);
console.log("PASS: all 9 operator checks.");
