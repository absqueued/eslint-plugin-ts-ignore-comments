module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Enforce a specific comment format before using // @ts-ignore.",
    },
    schema: []
  },
  create(context) {
    return {
      Program() {
        const sourceCode = context.getSourceCode();
        const comments = sourceCode.getAllComments();

        comments.forEach(comment => {
          if (comment.value.trim().startsWith('@ts-ignore')) {

            const tsIgnorePattern = /@ts-ignore TODO: PBI-\d+ .+/;
            if (!tsIgnorePattern.test(comment.value)) {
              context.report({
                node: comment,
                message: 'Invalid use of @ts-ignore. Use "// @ts-ignore TODO: PBI-<XXXX>-why-comment".'
              });
            }
          }
        });
      }
    };
  }
};
