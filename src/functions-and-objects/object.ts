// --> Object Types in TypeScript

// Basic Syntax:
// let variableName: { key: type, key2: type } = { ... };

// -> Basic Object Type
let person: { name: string; age: number } = {
    name: "kunj",
    age: 23
};

// -> Object Array Type
let users: { name: string; age: number }[] = [
    { name: "kunj", age: 23 },
    { name: "vaibhav", age: 26 },
    { name: "pranshi", age: 20 }
];

console.log(users);
/*
[
    { name: 'kunj', age: 23 },
    { name: 'vaibhav', age: 26 },
    { name: 'pranshi', age: 20 }
] 
*/

// -> Nasted Object Type
let employee: {
    name: string;
    department: {
        id: number;
        tital: string;
    };
} = {
    name: "kunj",
    department: {
        id: 101,
        tital: "Software Development"
    }
};

console.log(employee);
/* 
{
    name: 'kunj',
    department: { id: 101, tital: 'Software Development' }
}
*/


// -> Optional Properties (?)
let product: { id: number, name: string; description?: string } = {
    id: 1,
    name: "Laptop"
};

console.log(product); // { id: 1, name: 'Laptop' }

// --> Readonly Properties
let car: { readonly brand: string; model: string } = {
    brand: "Tesla",
    model: "Model 3"
};

// car.brand = "BMW";  ❌ Error — readonly property

console.log(car); // { brand: 'Tesla', model: 'Model 3' }

// -> Object Type With Function
let calculator: {
    add: (a: number, b: number) => number;
    multiply: (a: number, b: number) => number;
} = {
    add: (a, b) => a + b,
    multiply: (a, b) => a * b
};

console.log(calculator.add(10, 20));       // 30
console.log(calculator.multiply(10, 20));  // 200
