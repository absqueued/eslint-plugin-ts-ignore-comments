/**
 * @fileoverview Enforce the use of custom format ts-ignore comments in TypeScript files.
 * @author Shekhar K. Sharma (@absqueued)
 */
"use strict";

const tsIgnoreComments = require("./rules/comments");

const plugin = {
  meta: {},
  configs: {},
  rules: {
    "comments": tsIgnoreComments
  },
  processors: {},
};

module.exports = plugin;
