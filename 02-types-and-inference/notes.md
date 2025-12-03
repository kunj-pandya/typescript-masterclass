# 📘 Types and Type Inference in TypeScript

This chapter covers the most important building blocks of TypeScript:

- Primitive Types  
- Object Types  
- Special Types  
- Type Inference  

# ⭐ 1. Primitive Types  
Primitive types are the basic data types in TypeScript.

### ✔ Syntax  

```ts
let variableName: type = value;
```

### 🔹 string  
Represents text values.

```ts
let userName: string = "kunj";
```

### 🔹 number
Represents integers, floats, and decimals.

```ts
let age: number = 24;
```
-> Note: JavaScript does not have a separate int or float. Everything is just number.

### 🔹 boolean
Represents true/false values.

```ts
let isStudent: boolean = true;
```

### 🔹 null
Represents intentional absence of value.

```ts
let data: null = null;
```

### 🔹 undefined
A variable that is declared but not assigned.

```ts
let score: undefined = undefined;
```

# ⭐ 2. Object Types
These represent collections of related values.

### 🔹 object
A structured group of key–value pairs.

```ts
let person: { name: string; age: number } = {
    name: "kunj",
    age: 21
};
```

### 🔹 arrays
A list of values of the same type.

```ts
let numbers: number[] = [1, 2, 3];
let users: string[] = ["kunj", "parth", "vaibhav"];
```

Alternate syntax:

```ts
let scores: Array<number> = [10, 20, 30];
```

### 🔹 tuples
A fixed-length array with specific types in order.

```ts
let user: [string, number] = ["vatsal", 24];
```
### 🔹 enums

Named constant values.

```ts
enum Role {
  Admin,
  User,
  Guest
}

let myRole: Role = Role.Admin;
```

# ⭐ 3. Special Types
These types behave differently from normal types.

### 🔹 any
Disables type checking completely.

```ts
let value: any = "kunj";
value = 24;  // allowed
```

### 🔹 unknown
A safer alternative to any.

```ts
let data: unknown = "kunj";
```

### 🔹 never
A type that never returns a value.


Used in:

- infinite loops
- functions that throw errors

```ts
function throwError(msg: string): never {
  throw new Error(msg);
}
```

### 🔹 void
Functions that do not return anything.

```ts
function logMessage(): void {
  console.log("hello typeScript");
}
```

# ⭐ 4. Type Annotations & Type Inference

### 🔹 Type Annotation (explicit typing)
```ts
let myName: string = "kunj";
```

### 🔹 Type Inference (automatic typing)
```ts
TypeScript automatically understands the type based on the assigned value.

let myName = "kunj"; 
// inferred as string
```

You do NOT need to write the type if TypeScript can infer it.