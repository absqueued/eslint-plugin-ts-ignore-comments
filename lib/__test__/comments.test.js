const { RuleTester } = require("eslint");
const rule = require("../rules/comments");

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2015
  }
});

ruleTester.run("ts-ignore", rule, {
  valid: [
    {
      code: `
      // @ts-ignore TODO: PBI-1234 my reasons for not fixing it now, but I will later
      dispatch(setSelectValue(defaultValue));
      `
    }
  ],
  invalid: [
    {
      code: `
      // @ts-ignore
      dispatch(setSelectValue(defaultValue));
      `,
      errors: [{ message: 'Invalid use of @ts-ignore. Use "@ts-ignore TODO: PBI-d+ .+".' }]
    }
  ]
});

console.log("All tests passed!");
