// --> Function Types in TypeScript

// Basic syntax
/* 
function functionName(parameter: type): returnType {
    return value;
}
*/

// -> Basic Function with Parameter Types
function greet(name: string): string {
    return `Hello, ${name}!`;
}

console.log(greet("Kunj"));  // Hello, Kunj!

// -> Function with Multiple Parameters
function add(a: number, b: number): number {
    return a + b;
}

console.log(add(10, 20));

// -> Function with default parameters
function calculateTex(amount: number, tax: number = 18): number {
    return amount + (amount * tax) / 100;
}

console.log(calculateTex(1000));     // tax = 18 (default value)
console.log(calculateTex(1000, 10)); // tax = 10 here

// -> Function with Optional parameters (?)

function welcome(name: string, message?: string): string {
    return `${message ?? "Welcome"}, ${name}`;
}

console.log(welcome("parth"));                  // Welcome, parth
console.log(welcome("parth", "Good Morning"));  // Good Morning, parth


// --> Function with No Return Type (void)
function logMessage(message: string): void {
    console.log("Log:", message);
}

logMessage("TypeScript function types are easy!");  // Log: TypeScript function types are easy!


// Arrow Function Syntex
/* 
const functionName = (parameter: type): returnType => {
    return value;
}
*/

// --> Arrow Function Type
const isAdult = (age: number): boolean => age >= 18;

console.log(isAdult(21));  // true


// --> Function That Never Returns (never)
function throwError(msg: string): never {
    throw new Error(msg);
}

// ⚠ Don't call throwError here or app will stop!
// throwError("Critical Error!");

export { };