// 02 — Union Types in TypeScript
/*
-------------------------------------------------
Union type allows a variable to store more than one type.
Syntax:
let variable: type1 | type2;
Used when data can be of different types.
 */
// -------------------------------------------------

// -> union with primitive types
let id: string | number;

id = "ABC123";
console.log(id);  // ABC123



// -> union in function parameter
function printId(id: string | number): void {
    console.log("Your id is:", id);
}

printId(500);      // Your id is: 500  
printId("AB789");  // Your id is: AB789


// -> union with array values
let data: (string | number)[] = ["kunj", 21, "parth", 25];

console.log(data); // [ 'kunj', 21, 'parth', 25 ]


// -> union with literal types
type Status = "success" | "error" | "loading";

let currentStatus: Status = "success";
// currentStatus = "failed" ❌ error

console.log(currentStatus); // success


// -> real example: search function
function searchUser(user: string | number): string {
    return `Searching for user: ${user}`;
}

console.log(searchUser("parth"));   // Searching for user: parth
console.log(searchUser(246));       // Searching for user: 246


export { };
