// ---------------------------------------------
// --> Access Modifiers in TypeScript
//
// Access modifiers control the visibility
// of class properties and methods.
//
// TypeScript provides three access modifiers:
//  - public    (default)
//  - private
//  - protected
//
// ---------------------------------------------

// --> Public  
// Accessible everywhere
// If we don’t write anything, it is public by default

class User {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public greet(): string {
        return `Hello, ${this.name}`;

    }
}

const user = new User("Kunj");
console.log(user.name);  //Kunj
console.log(user.greet());  // Hello, Kunj


// --> private (Encapsulation)
// Accessible only inside the same class
// Not accessible from outside or child classes

class BackAccount {
    private balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    getBalance(): number {
        return this.balance;
    }

}

const account = new BackAccount(1000);
console.log(account.getBalance()); // 1000
// console.log(account.balance);  // Error : Property 'balance' is private and only accessible within class 'BackAccount'.


// --> protected(inheritance friendly)
// Accessible inside the class
// Accessible in child classes
// NOT accessible from outside

class Employee {
    protected department: string;

    constructor(department: string) {
        this.department = department;

    }
}

class Manager extends Employee {
    getDepartment(): string {
        return this.department;
    }
}

const manager = new Manager("IT");
console.log(manager.getDepartment());  // IT
// console.log(manager.department);  // Error: Property 'department' is protected and only accessible within class 'Employee' and its subclasses.

// --> Access Modifiers with Constructor Parameters

class Student {
    constructor(
        public name: string,
        private rollno: number,
        protected course: string,
    ) { }

    getRollNo(): number {
        return this.rollno;
    }
}

const student = new Student("Parth", 28, "Computer Eng.");
console.log(student.getRollNo()); // 28
console.log(student.name);  // Parth
// console.log(student.rollno); // Property 'rollno' is private and only accessible within class 'Student'.

//  --> Read Only

class Product {
    readonly id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

const product = new Product(1, "Laptop");
// product.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
product.name = "MacBook"; //  allowed

export { };
