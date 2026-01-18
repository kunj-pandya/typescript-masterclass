// --> Class Basics in TypeScript
// ---------------------------------------------
//
// A class is a blueprint for creating objects.
// A class can contain:
//  - properties (variables)
//  - methods (functions)
//  - a constructor (runs when object is created)
//
// Syntax:
//
// class ClassName {
//      property: type;
//      constructor(args) { ... }
//      method() { ... }
// }
//
// ---------------------------------------------

//  --> Example 
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    introduce(): string {
        return `Hi, I am ${this.name}and i am ${this.age}years old.`;
    }
};

const kunj = new Person("kunj", 23);
const parth = new Person("parth", 22);

console.log(kunj.introduce());
console.log(parth.introduce());

export { };