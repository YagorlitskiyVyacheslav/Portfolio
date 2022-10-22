module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "react", "prettier"],
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier",
    "plugin:storybook/recommended",
  ],
  rules: {
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        allowSingleExtends: true,
      },
    ],
    "jsx-a11y/control-has-associated-label": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".ts", ".tsx"],
      },
    ],
    "import/prefer-default-export": "off",
    "react/require-default-props": "off",
    "import/extensions": "off",
    "react/prop-types": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "react/jsx-props-no-spreading": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "react/no-unescaped-entities": "off",
    "import/no-cycle": [
      0,
      {
        ignoreExternal: true,
      },
    ],
    "prefer-const": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        functions: false,
        classes: false,
        variables: true,
      },
    ],
    "react/function-component-definition": "off",
    "react/react-in-jsx-scope": "off",
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: ["state"],
      },
    ],
    "react-hooks/exhaustive-deps": "off",
    "no-shadow": "off",
    "consistent-return": "off",
    "react/jsx-no-useless-fragment": "off",
    "@typescript-eslint/explicit-module-boundary-types": ["error"],
    camelcase: "off",
    "no-console": [
      "error",
      {
        allow: ["warn", "error"],
      },
    ],
    "import/no-extraneous-dependencies": "off",
    "react/no-unstable-nested-components": "off",
  },
  settings: {
    "import/resolver": {
      "babel-module": {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        paths: ["src"],
      },
      typescript: {
        alwaysTryTypes: true,
        // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        project: "tsconfig.json",
      },
    },
  },
  overrides: [
    {
      files: [
        "next.config.js",
        "server.js",
        "robots.js",
        "ckeditor5-inline/webpack.config.js",
      ],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      files: ["pages/_app.tsx", "pages/_document.tsx"],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off",
      },
    },
    {
      files: ["src/components/selects/SearchDropdown/SearchDropdown.tsx"],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/ban-ts-comment": "off",
      },
    },
    {
      files: ["src/containers/Timeline/components/*"],
      rules: {
        "no-nested-ternary": "off",
      },
    },
  ],
};
