//  --> Primtive Types : string, number, boolean, null, undefined.
// --> Object Types : Objects, arrays, tuples, enums
//  --> Spacial types : any, unknown, never, void

let userName: string = "kunj";
let age: number = 24;

//Note : JavaScript does not have a special runtime value for integers, so there’s no equivalent to int or float - everything is simply number

let isStudent: boolean = true;

let data: null = null;
let score: undefined = undefined;

// -> object
let person: { name: string, age: number } = {
    name: "kunj",
    age: 21
}

//  -> Arrays
let numbers: number[] = [1, 2, 3];
let users: string[] = ["kunj", "parth", "vaibhav"];

// alternate syntax 
let scores: Array<number> = [10, 20, 30];

//  -> tuples : Fixed-length array with specific types.
let user: [string, number] = ["vatsal", 24];

// enums : Named constant values.
enum Role {
    Admin,
    User,
    Guest
}

let myRole: Role = Role.Admin;


// -> any : Disables type checking (avoid if possible).
// The any type is useful when you don’t want to write out a long type just to convince TypeScript that a particular line of code is okay.

let value: any = "kunj";
value = 24 // allowed

// -> unknown : Safer alternative to any.
let data1: unknown = "kunj";


// -> never : Represents a value that never occurs.(used for functions that throws error,infinty loops).
function throwError(msg: string): never {
    throw new Error(msg);
}

// -> void : Used for functions that don’t return anything.
function logMessage(): void {
    console.log("hello typeScript");
}
