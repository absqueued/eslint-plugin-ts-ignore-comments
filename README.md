# @absqueued/eslint-plugin-ts-ignore-comments

This package provides a custom ESLint rule for enforcing the use of `ts-ignore` comments in TypeScript files. It's designed to help maintainers and contributors ensure that TypeScript ignore comments are used consistently and only where absolutely necessary.

## Installation

You can install `@absqueued/eslint-plugin-ts-ignore-comments` using npm or yarn:
```bash
npm install @absqueued/eslint-plugin-ts-ignore-comments --save-dev
```
or

`yarn add @absqueued/eslint-plugin-ts-ignore-comments --dev`

## Usage
After installation, add `@absqueued/ts-ignore-comments` to the plugins section of your `.eslintrc` configuration file. Then configure the rules you want to use under the rules section.

```bash
module.exports = {
    "plugins": [
        ...
        "@absqueued/ts-ignore-comments"
    ],
    "rules": {
        "@absqueued/ts-ignore-comments/comment": "error" // or "warn"
    }
}
```

Supported Rules
* **`comment`**: Enforces the use of `// @ts-ignore comments` in TypeScript files. This rule can help in identifying places where `@ts-ignore` is used, potentially highlighting areas of the code that may need closer inspection or refactoring.

## Configuration
This plugin works out of the box with the default ESLint parser. If you are using a custom parser, such as @typescript-eslint/parser, ensure it is correctly configured in your ESLint settings.

## Licensing
The code in this project is licensed under MIT license. See the LICENSE file for more information.
