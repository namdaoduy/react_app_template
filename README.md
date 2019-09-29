# React App Template

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to use
Just fork this project and build your app on it.

## What is included
- [React App Template](#react-app-template)
  - [How to use](#how-to-use)
  - [What is included](#what-is-included)
  - [How we made it](#how-we-made-it)
    - [1. Init with `create-react-app`](#1-init-with-create-react-app)
    - [2. Set up `eslint` and `vscode`](#2-set-up-eslint-and-vscode)


## How we made it
### 1. Init with `create-react-app`

Instruction: [Link](https://reactjs.org/docs/create-a-new-react-app.html)

Pre-condition: `nodejs` and `npm` installed ([LTS version](https://nodejs.org/en/download/))

**Step 1:** Navigating to a parent folder you want to place your project

```bash
  $ cd ~/Documents/git/
```

**Step 2:** Init app with `npx` (installed with `npm`)

```bash
  $ npx create-react-app react_app_template
```

**Step 3:** Init `git` and follow the instructions

```bash
  $ cd react_app_template/
  $ git init
```

### 2. Set up `eslint` and `vscode`

```bash
  $ ./node_modules/.bin/eslint --init
```
Then follow the instuctions:

- ? How would you like to use ESLint? `To check syntax, find problems, and enforce code style`

- ? What type of modules does your project use? `JavaScript modules (import/export)`

- ? Which framework does your project use? `React`

- ? Does your project use TypeScript? `No`

- ? Where does your code run? (Press `<space>` to select, `<a>` to toggle all, `<i>` to invert selection) `Browser`

- ? How would you like to define a style for your project? `Use a popular style guide`

- ? Which style guide do you want to follow? `Airbnb`

- ? What format do you want your config file to be in? `JSON`

If Local ESLint installation not found, then choose `Yes` to install them locally.

If you are using VSCODE, install extension `ESLint` to check and fix syntax.

After set up successfully, you can enable/disable your custom rules in `.eslintrc.json` file:

```json
{
  ...
  "rules": {
    "no-console": 0,
    "import/no-named-as-default": 0,
    ...
  }
}
```
*Note: ESLint rule*
- `0` - turns the rule off
- `1`- turn the rule on as a warning (doesn't affect exit code)
- `2` - turn the rule on as an error (exit code is 1 when triggered)

We've pre-configured some useful rules for the React project. Modify it as your favorite.

After set up `eslint`, set up `vscode` setting for workspace to make consistence between developers. `autoFixOnSave` is also useful.

In `.vscode/settings.json`:
```json
{
  "editor.tabSize": 2,
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true,
  "files.trimFinalNewlines": true,
  "eslint.autoFixOnSave": true
}
```
