module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Enforce a specific comment format for using // @ts-ignore.",
    },
    schema: [
      {
        type: 'object',
        properties: {
          pattern: {
            type: 'string',
            description: "Custom pattern to match the @ts-ignore comment."
          }
        }
      }
    ]
  },
  create(context) {
    const sourceCode = context.getSourceCode();
    const options = context.options[0] || {};
    const customPattern = options.pattern || '@ts-ignore TODO: PBI-\\d+ .+';
    const tsIgnorePattern = new RegExp(customPattern);
    const comments = sourceCode.getAllComments();
    
    return {
      Program() {
        comments.forEach(comment => {
          if (comment.value.trim().startsWith('@ts-ignore')) {
            if (!tsIgnorePattern.test(comment.value)) {
              context.report({
                node: comment,
                message: `Invalid use of @ts-ignore. Use "${customPattern.replace('\\', '')}".`
              });
            }
          }
        });
      }
    };
  }
};
