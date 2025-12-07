// 05 —> Interface with Function Types

/* 
---------------------------------------------

Interfaces can contain functions that must follow
a specific signature.
---------------------------------------------
 */

interface Calculator {
    add: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
}

const calc: Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
};

console.log(calc.add(10, 20));       // 30
console.log(calc.subtract(20, 5));   // 15

export { };
