// 01 — Basic Interface in TypeScript


/* ---------------------------------------------

An interface defines the shape of an object.
Think of it as a contract the object must follow.
---------------------------------------------

 */

interface Person {
    name: string;
    age: number;
};

const kunj: Person = {
    name: "Kunj",
    age: 23
};

const parth: Person = {
    name: "parth",
    age: 25
}

console.log(kunj, parth);
// { name: 'Kunj', age: 23 } { name: 'parth', age: 25 }


export { };