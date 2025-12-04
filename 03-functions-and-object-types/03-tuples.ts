// --> Tuples in TypeScript

// ---------------------------------------------
//
// A tuple is a fixed-length array where each position
// has a specific and predefined type.
//
// Syntax:
// let variableName: [type1, type2, ...] = [value1, value2];
//
// --------------

// -> Basic Tuple
let user: [string, number] = ["kunj", 24];

console.log(user); // / [ 'Kunj', 23 ]


// -> Array Of Tuple
let people: [string, number][] = [
    ["Vaibhav", 23],
    ["Parth", 26],
    ["Pranshi", 20]
];

console.log(people); // [ [ 'Vaibhav', 23 ], [ 'Parth', 26 ], [ 'Pranshi', 20 ] ]

// -> Tuple With Optional Elements
let employee: [string, number, string?] = ["kunj", 24];

console.log(employee); // [ 'kunj', 24 ]

//  -> Tuple With Readonly
let coordinates: readonly [number, number] = [10, 20];

// coordinates[0] = 50 ❌ Error

console.log(coordinates); // [ 10, 20 ]


// -> Using Tuple To Return Multiple Values
function getUser(): [string, number] {
    return ["kunj", 23];
}

console.log(getUser());  // [ 'kunj', 23 ]


// -> Lablled Tuple 
let rgb: [red: number, green: number, blue: number] = [255, 20, 50];
console.log(rgb); // [ 255, 100, 50 ]


export { };

