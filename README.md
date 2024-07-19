# @absqueued/eslint-plugin-ts-ignore-comments

[![npm version](https://badge.fury.io/js/@absqueued%2Feslint-plugin-ts-ignore-comments.svg)](https://badge.fury.io/js/@absqueued%2Feslint-plugin-ts-ignore-comments)
![Test Status](https://github.com/absqueued/eslint-plugin-ts-ignore-comments/actions/workflows/lint-test.yml/badge.svg)

This package is a custom ESLint plugin designed to enforce a standardized comment format for the `// @ts-ignore` directive in your codebase. This rule ensures that every instance of `// @ts-ignore` is accompanied by a comment explaining the reason for its usage and a plan to address it in the future. This practice helps maintain high-quality code by preventing lazy use of `// @ts-ignore` and promoting accountability among team members.

## Purpose
In many projects, `// @ts-ignore` is often used to quickly bypass TypeScript errors without a clear explanation or plan to resolve the underlying issue. This can lead to technical debt and obscure the true state of the codebase. This plugin aims to improve code quality by:

- Requiring a specific comment format that includes a TODO and task number (e.g., `TODO: PBI-1234 needs refactoring of types`).
- Enforcing developers to document why `// @ts-ignore` was added and what needs to be done to remove it.
- Encouraging developers to address TypeScript issues rather than ignoring them.

## Installation
You can install `@absqueued/eslint-plugin-ts-ignore-comments` using npm or yarn:

```bash
npm install @absqueued/eslint-plugin-ts-ignore-comments --save-dev
```

or

```bash
yarn add @absqueued/eslint-plugin-ts-ignore-comments --dev
```

## Usage
After installation, add `@absqueued/ts-ignore-comments` to the plugins section of your `.eslintrc` configuration file. Then configure the rules you want to use under the rules section.

This plugin works out of the box with the default ESLint parser.

#### Basic setup

```js
module.exports = {
    "plugins": [
        ...
        "@absqueued/ts-ignore-comments"
    ],
    "rules": {
        "@absqueued/ts-ignore-comments/comments": "error", // or "warn"
    }
}
```

#### Custom message setup

Add a `pattern` property to the options. You can define regex patterns to match your custom message requirement. 

```js
module.exports = {
    "plugins": [
        ...
        "@absqueued/ts-ignore-comments"
    ],
    "rules": {
        "@absqueued/ts-ignore-comments/comments": ["error", {
            pattern: '@ts-ignore TODO: DEGR-\\d+ .+'
        }],
    }
}
```

#### Examples 
For more, checkout the [example](./example/) direction
```ts
// <index.ts>
// @ts-ignore TODO: DEGR-1234 this is a valid comment
const validUsage = 42;

// @ts-ignore cant fix - invalid comment
const invalidUsage = 42;

console.log({ validUsage, invalidUsage });
```

## Supported Rules
* **`comments`**: Enforces the use of `// @ts-ignore` comments in TypeScript files. This rule can help in identifying places where `@ts-ignore` is used, potentially highlighting areas of the code that may need closer inspection or refactoring.

## Licensing
The code in this project is licensed under the MIT license. See the LICENSE file for more information.
