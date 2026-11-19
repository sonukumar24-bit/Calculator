"use strict";

const form = document.getElementById("calculator");
const first = document.getElementById("first");
const second = document.getElementById("second");
const operation = document.getElementById("operation");
const result = document.getElementById("result");
const expression = document.getElementById("expression");
const operations = {
    add: { calculate: add, symbol: "+" },
    subtract: { calculate: subtract, symbol: "-" },
    multiply: { calculate: multiply, symbol: "×" },
    divide: { calculate: divide, symbol: "÷" }
};

form.addEventListener("submit", function (event) {
    event.preventDefault();
    try {
        if (first.value.trim() === "" || second.value.trim() === "") {
            throw new Error("Please enter both numbers.");
        }
        const a = Number(first.value);
        const b = Number(second.value);
        if (!Number.isFinite(a) || !Number.isFinite(b)) {
            throw new Error("Please enter valid, finite numbers.");
        }
        const selected = operations[operation.value];
        if (!selected) throw new Error("Please select an operation.");
        const answer = selected.calculate(a, b);
        if (!Number.isFinite(answer)) {
            throw new Error("Result is too large. Try smaller numbers.");
        }
        expression.textContent = `${a} ${selected.symbol} ${b} =`;
        result.textContent = String(Number(answer.toPrecision(12)));
        result.classList.remove("error");
    } catch (error) {
        expression.textContent = "Check your input";
        result.textContent = error.message;
        result.classList.add("error");
    }
});

form.addEventListener("reset", function () {
    expression.textContent = "Your result will appear here";
    result.textContent = "0";
    result.classList.remove("error");
    first.focus();
});
