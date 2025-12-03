//  --> Spacial types : any, unknown, never, void

// -> any : Disables type checking (avoid if possible).
// The any type is useful when you don’t want to write out a long type just to convince TypeScript that a particular line of code is okay.

let value: any = "kunj";
value = 24 // allowed

// -> unknown : Safer alternative to any.
let data: unknown = "kunj";

// -> never : Represents a value that never occurs.(used for functions that throws error,infinty loops).
function throwError(msg: string): never {
    throw new Error(msg);
}

// -> void : Used for functions that don’t return anything.
function logMessage(): void {
    console.log("hello typeScript");
}