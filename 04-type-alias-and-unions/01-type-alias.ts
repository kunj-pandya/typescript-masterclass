// --> Type Alias in TypeScript

/*

--> Type Alias allows you to create your own custom type.

* Syntax:
type AliasName = Type;

-- Used to improve code readability and reuse.

*/
// -------------------------------------------------

// -> Type alias for string

type UserName = string;

let user1: UserName = "kunj";
let user2: UserName = "parth";

console.log(user1, user2);  // kunj parth



// -> Type alias for an object

type Person = {
    name: string;
    age: number;
    isActive: boolean;
};


let kunj: Person = { name: "kunj", age: 23, isActive: false };
let pranshi: Person = { name: "pranshi", age: 20, isActive: true };

console.log(kunj, pranshi);
// { name: 'kunj', age: 23, isActive: false } { name: 'pranshi', age: 20, isActive: true }



// -> Type alias for a function
type Add = (a: number, b: number) => number;

let addNumbers: Add = (a, b) => a + b;

console.log(addNumbers(4, 5)); // 9



// -> Type alias with arrays
type StringList = string[];
let friends: StringList = ["vaibhav", "parth", "kunj"];

console.log(friends); // [ 'vaibhav', 'parth', 'kunj' ]



// -> Type alias with literal types
type Direction = "up" | "down" | "left" | "right";

let move: Direction = "up";
// move = "forward"; ❌ error

console.log(move); // up
