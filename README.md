# TypeScript Tutorial/Self-Learning

# Hooks

# Typing Hooks

# null vs undefined

- TypeScript has two special types, `null` and `undefined`. 

- `--strictNullChecks` switches to a new strict null checking mode

- In strict null checking mode, the `null` and `undefined` values are *not* in the domain of every type and are only assignable to themselves and `any` (`undefined` is also assignable to `void`).

- So as `T` and `T | undefined` are considered synonymous in regular type checking mode (as `undefined` is a subtype of any `T`), they are different types in strict type checking mode, and only `T |undefined` permits `undefined` values. The same is true for the relationship of `T` to `T | null` 

- ```tsx
  // Compiled with --strictNullChecks
  let x: number;
  let y: number | undefined;
  let z: number | null | undefined;
  x = 1; // Ok
  y = 1; // Ok
  z = 1; // Ok
  x = undefined; // Error
  y = undefined; // Ok
  z = undefined; // Ok
  x = null; // Error
  y = null; // Error
  z = null; // Ok
  x = y; // Error
  x = z; // Error
  y = x; // Ok
  y = z; // Error
  z = x; // Ok
  z = y; // Ok
  ```

  

