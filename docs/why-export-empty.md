# Why We Use export {} in TypeScript Files

In “script mode”:

- All variables are considered global
- TS may show warnings like:
  - “Cannot redeclare block-scoped variable …”
  - “This variable is declared but its value is never read.”
  - “Duplicate identifier …”
- Files may accidentally conflict with each other
(because global variables can leak between files)

 ## ✅ Solution → Make each file a module
```ts
export {}
```
This tells TypeScript:

- “This file is a module. Do NOT treat its variables as global.”

- So all your variables/functions/types become file-scoped.
- No name collisions.
- No warnings.
- No global pollution.


### ❓ Should you always add `export {}` in practice?

- ✔ YES — for learning repos
- Each .ts file is standalone.
- You want to avoid global conflicts.
- Makes them safely isolated.

- ❌ NO — inside real applications using modules

Instead, you’ll naturally use real imports & exports. Example:

```ts
export function greet(name: string) {}
import { greet } from "./greet";
```

So in real apps export {} isn't needed.

## Summary

We add `export {}` to make the file a module.  
Modules prevent global variable conflicts and TypeScript warnings like  
"Cannot redeclare block-scoped variable".  
It keeps each file isolated and avoids name collisions.
