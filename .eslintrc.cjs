/** @type {import("eslint").Linter.Config} */
const config = {
  ignorePatterns: [".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  plugins: ["@typescript-eslint", "simple-import-sort"],
  extends: [
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "expo",
  ],
  rules: {
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      { prefer: "type-imports", fixStyle: "separate-type-imports" },
    ],
    "@typescript-eslint/no-misused-promises": [
      2,
      { checksVoidReturn: { attributes: false } },
    ],
    "@typescript-eslint/no-unnecessary-condition": [
      "error",
      {
        allowConstantLoopConditions: true,
      },
    ],
    "@typescript-eslint/no-non-null-assertion": "error",
    "no-restricted-properties": [
      "error",
      {
        object: "process",
        property: "env",
        message:
          "Use `import { env } from '~/env'` instead to ensure validated types.",
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        name: "process",
        importNames: ["env"],
        message:
          "Use `import { env } from '~/env'` instead to ensure validated types.",
      },
    ],
    "@typescript-eslint/ban-types": "off",
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
  },
  overrides: [
    {
      files: ["env.ts"],
      rules: {
        "no-restricted-imports": "off",
        "no-restricted-properties": "off",
      },
    },
  ],
};

module.exports = config;
