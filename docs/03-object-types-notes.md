# 📘 Object Types in TypeScript

### ⭐ Basic Object Type

```ts
let person: { name: string; age: number } = {
    name: "kunj",
    age: 23
};
```

## ⭐ Object With Multiple Properties

```ts
let student: { name: string; age: number; isActive: boolean } = {
    name: "parth",
    age: 25,
    isActive: true
};
```

## ⭐ Object Array Type

```ts
let users: { name: string; age: number }[] = [
    { name: "kunj", age: 23 },
    { name: "vaibhav", age: 26 },
    { name: "pranshi", age: 20 }
];
```

## ⭐ Nested Object Type

```ts
let employee: {
    name: string;
    department: {
        id: number;
        tital: string;
    };
} = {
    name: "kunj",
    department: {
        id: 101,
        tital: "Software Development"
    }
};

console.log(employee);
```

## ⭐ Optional Properties (?)

Optional keys may or may not exist.

```ts
let product: { id: number; name: string; description?: string } = {
    id: 1,
    name: "Laptop"
};

console.log(product); // { id: 1, name: 'Laptop' }
```

## ⭐ Readonly Properties

readonly prevents changes after assignment.

```ts
let car: { readonly brand: string; model: string } = {
    brand: "Tesla",
    model: "Model 3"
};
```
```ts
// car.brand = "BMW";  // ❌ Error
console.log(car); // { brand: 'Tesla', model: 'Model 3' }
```

## ⭐ Object Type With Functions

Objects can store function types.

```ts
let calculator: {
    add: (a: number, b: number) => number;
    multiply: (a: number, b: number) => number;
} = {
    add: (a, b) => a + b,
    multiply: (a, b) => a * b
};


console.log(calculator.add(10, 20));       // 30
console.log(calculator.multiply(10, 20));  // 200
```