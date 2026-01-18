// ---------------------------------------------
// --> Inheritance in TypeScript
//
// Inheritance allows a class to extend
// another class and reuse its properties
// and methods.
//
// ---------------------------------------------


// Parent Class
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(distance: number): string {
        return `${this.name} moved ${distance} meters.`
    }
}

//Child Class

class Dog extends Animal {
    constructor(name: string) {
        super(name);    // calls the parenet's constructor
    }

    bark(): string {
        return `${this.name} says: Woof!`
    }
};

const animal = new Animal("Generic Animal");
console.log(animal.move(5)); // Generic Animal moved 5 meters.

const buddy = new Dog("Buddy");
console.log(buddy.bark()); // Buddy says: Woof!
console.log(buddy.move(10)); // Buddy moved 10 meters.

