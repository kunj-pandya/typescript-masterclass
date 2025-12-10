# 📘 Type Alias vs Interface in TypeScript

TypeScript gives us **two ways** to describe the shape of objects:

- `type`
- `interface`

Both look similar, but they are **NOT the same**.  
Each has its own strengths and ideal use cases.


## 🔹 **Type Alias**
A `type` creates a **new name** for any type.

can be used for:
- primitive types  
- object types  
- union & intersection types  
- tuples  
- function types  
- literal types  

```ts
type User = {
  name: string;
  age: number;
};
```

## 🔹 Interface

An interface is used specifically for **describing objects** and **class structures**.

```ts
interface User {
  name: string;
  age: number;
}
```

## ⭐ When to Use What?

✔ Use interface when:

- Defining object shapes
- Defining class structures
- we expect multiple declarations (merging)

✔ Use type when:

- You need unions: type ID = string | number;
- You need intersections
- You work with tuples
- You create function types
- You use utility types (ReturnType, Record, etc.)
- You want more flexibility

## ⭐ Summary
Both type and interface can define object shapes, but:

- Interface excels in OOP, extending, and declaration merging
- Type Alias is more powerful, flexible, and used for advanced types (unions, intersections, functions, primitives)

In modern TypeScript:

- Use interface for objects & classes.
- Use type for everything else.
