// --> Object Types : Objects, arrays, tuples, enums

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