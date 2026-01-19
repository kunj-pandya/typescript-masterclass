
// An interface defines the shape of an object.
// Think of it as a contract the object must follow.

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

// --> One interface can inherit properties from another.
interface User {
    name: string;
    email: string;
}

interface Admin extends User {
    role: string;
}

const admin1: Admin = {
    name: "Kunj",
    email: "kunj@example.com",
    role: "Super Admin"
};

console.log(admin1);
// { name: 'Kunj', email: 'kunj@example.com', role: 'Super Admin' }


// --> interfac with functions
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
