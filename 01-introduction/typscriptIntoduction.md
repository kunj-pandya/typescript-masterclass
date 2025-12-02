# 📘 Introduction to TypeScript

---

## ⭐ What is **TypeScript**?

TypeScript is a **high-level**, **strongly typed** programming language that adds **static typing** on top of JavaScript.

In simple words:

- JavaScript + Types = **TypeScript**
- TypeScript adds extra syntax to describe **types** (like number, string, boolean, objects, arrays, etc.)
- It is created and maintained by **Microsoft**
- It is **open-source**
- It **transpiles** (converts) to JavaScript, so it runs anywhere JS runs (browser, Node.js)

### **Official Definition**
> TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.

## ⭐ Why Should I Use TypeScript?

JavaScript is a **loosely typed** language.  
This means:

- Variables do not have fixed types  
- Function parameters can accept anything  
- If wrong data is passed, errors appear **at runtime**, not before

Example problem in JavaScript:

```js
function add(a, b) {
  return a + b;
}

add("10", 5);     // "105" — silent bug!
```
JavaScript **does not warn** you about this mistake.


TypeScript solves this.
With **TypeScript**:

```ts
function add(a: number, b: number): number {
  return a + b;
}

add("10", 5);   // ❌ Error at compile time!
```

You get **immediate feedback** before running the code.

TypeScript gives you:

-  Compile-time type checking
-  Faster debugging
-  Better IntelliSense (auto-completion)
-  More maintainable code
-  Safer large-scale applications

## ⭐ JavaScript vs TypeScript Comparison
```
| Feature        | JavaScript         | TypeScript                  |
| -------------- | ------------------ | --------------------------- |
| Typing         | Weak / Dynamic     | Strong / Static             |
| Errors         | Runtime            | Compile-time                |
| Scalability    | Hard in large apps | Easy due to types           |
| IDE Support    | Basic              | Excellent                   |
| Learning Curve | Easy               | Slightly more, but worth it |
```