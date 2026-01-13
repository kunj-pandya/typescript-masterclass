// --> any and unknown in TypeScript
// ----------------------------------------------------
//
// `any` and `unknown` are special types in TypeScript.
// They allow flexibility, but behave very differently.
//
// any      → disables type checking (unsafe)
// unknown  → safer alternative to any (type-safe)
//
// ----------------------------------------------------


// --> any type
// ----------------------------------------------------
// any disables all type checking.
// TypeScript will not complain, even if the code is unsafe.

let valueAny: any = "kunj";

valueAny = 25;
valueAny = true;
valueAny = { name: 'kunj' }
valueAny = () => console.log("hello");

// No error - but this can cause runtime bugs
valueAny.toUpperCase(); // ❌ NO TS error, but unsafe

// --> unknown type
// ----------------------------------------------------
// unknown is safer than any.
// You MUST check the type before using it.

let valueUnkown: unknown = "Parth";

//  Erorr - 'valueUnkown' is of type 'unknown'.
// valueUnkown.toUpperCase();

// correct way - type narrowing
if (typeof valueUnkown === 'string') {
    console.log(valueUnkown.toUpperCase);
};

// --> unknown in functions (recommended use case)
// ----------------------------------------------------

function processData(data: unknown): void {
    if (typeof data === "string") {
        console.log("String length:", data.length);
    } else if (typeof data === "number") {
        console.log("Number value:", data);
    } else {
        console.log("Unknown data type");
    }
};

processData("Vaibhav");
processData(42);
processData(true);

// --> any vs unknown (important difference)
// ----------------------------------------------------

// any -> unsafe
function unsafeFunction(value: any) {
    return value.toUpperCase(); // might crash at run time
};

// unknown → SAFE
function safeFunction(value: unknown) {
    if (typeof value === "string") {
        return value.toUpperCase(); //  safe
    }
    return "Not a string";
}

console.log(safeFunction("Pranshi"));
console.log(safeFunction(123));

// -> When to use what?
// ----------------------------------------------------
//
// Use `any` ONLY when:
// - migrating old JavaScript code
// - you truly don't know the type (temporary)
//
// Use `unknown` when:
// - handling external input (API, user input)
// - writing safe and predictable code
// - you want TypeScript to force type checks
//
// ----------------------------------------------------

export { };
