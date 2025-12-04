# 📘 Function Types in TypeScript

### ⭐ Basic Function Syntax

```ts
function functionName(parameter: type): returnType {
    return value;
}
```
This is the core structure of all **TypeScript functions**.

## ⭐ Function with Parameter Types

```ts
function greet(name: string): string {
    return `Hello, ${name}!`;
}

greet("Kunj");  // "Hello, Kunj!"
```
Here:
- name must be a string
- The function returns a string

## ⭐ Function with Multiple Parameters

```ts
function add(a: number, b: number): number {
    return a + b;
}
```
Both parameters and the return type must be number.

## ⭐ Default Parameters

You can set a default value for a parameter.

```ts
function calculateTex(amount: number, tax: number = 18): number {
    return amount + (amount * tax) / 100;
}
```
Usage:

```ts
calculateTex(1000);     // tax = 18 (default)
calculateTex(1000, 10); // tax = 10
```

## ⭐ Optional Parameters (?)

Optional parameters are marked with ?.

```ts
function welcome(name: string, message?: string): string {
    return `${message ?? "Welcome"}, ${name}`;
}
```
Usage:

```ts
welcome("Parth");                  // "Welcome, Parth"
welcome("Parth", "Good Morning");  // "Good Morning, Parth"
```

## ⭐ Functions That Return Nothing (void)

```ts
function logMessage(message: string): void {
    console.log("Log:", message);
}
```

void means the function **does NOT return a value**.

## ⭐ Arrow Function Syntax

Basic syntax:

```ts
const functionName = (parameter: type): returnType => {
    return value;
};
```


Example:

```ts
const isAdult = (age: number): boolean => age >= 18;
```

## ⭐ Functions That Never Return (never)

Used when a function:

- Always throws an error
- Never finishes (infinite loop)

```ts
function throwError(msg: string): never {
    throw new Error(msg);
}
```

Calling this will **stop execution**.
