module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  extends: [
    "standard",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "prettier",
    "react-app",
  ],
  plugins: ["sort-destructure-keys", "sort-keys-fix", "typescript-sort-keys"],
  rules: {
    "import/no-default-export": 2,
    "no-restricted-syntax": [
      2,
      {
        selector: "TSEnumDeclaration",
        message:
          "Do not use `enum`. Use `Plain Object` or `Literal Types` instead.",
      },
    ],
    "prefer-template": 2,
    "react/jsx-boolean-value": 2,
    "react/jsx-sort-props": 2,
    "react/jsx-uses-react": 0,
    "react/no-access-state-in-setstate": 2,
    "react/no-array-index-key": 2,
    "react/react-in-jsx-scope": 0,
    "react/self-closing-comp": 2,
    "require-await": 0,
    "sort-destructure-keys/sort-destructure-keys": 2,
    "sort-keys-fix/sort-keys-fix": 2,
    "typescript-sort-keys/interface": 2,
    "typescript-sort-keys/string-enum": 2,
    yoda: [2, "never", { onlyEquality: true }],

    "@typescript-eslint/ban-types": [
      2,
      {
        types: {
          "React.FC": {
            message: "Use `({...}: Props): JSX.Element => {...}` style instead",
          },
          "React.VFC": {
            message: "Use `({...}: Props): JSX.Element => {...}` style instead",
          },
        },
      },
    ],
    "@typescript-eslint/consistent-type-definitions": [2, "type"],
    "@typescript-eslint/naming-convention": [
      2,
      {
        // "type" naming should be PascalCase
        custom: {
          match: false,
          regex: "send|start|find",
        },
        format: ["PascalCase"],
        selector: "typeAlias",
      },
    ],
    "@typescript-eslint/no-explicit-any": 2,
    "@typescript-eslint/no-misused-promises": 2,
    "@typescript-eslint/no-unused-vars": [
      2,
      // for import { jsx } from "@emotion/react"
      { vars: "all", args: "all", varsIgnorePattern: "^jsx$" },
    ],
    "@typescript-eslint/prefer-readonly": 2,
    "@typescript-eslint/require-await": 2,
  },
  overrides: [
    {
      files: ["src/components/pages/**/*.tsx"],
      rules: {
        // for React.Suspense/Dynamic import
        "import/no-default-export": 0,
        "no-restricted-exports": 2,
      },
    },
  ],
}
