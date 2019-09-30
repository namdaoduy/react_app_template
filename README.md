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
    - [3. Set up `pre-commit`](#3-set-up-pre-commit)
    - [4. Add `LICENSE`](#4-add-license)
    - [5. Set up NODE PATH for absolute import](#5-set-up-node-path-for-absolute-import)
    - [6. Set up `dotenv`](#6-set-up-dotenv)
    - [7. Create source code structure](#7-create-source-code-structure)
    - [8. Set up configs for multiple environments](#8-set-up-configs-for-multiple-environments)


## How we made it
This section is for reference, or if you want to set up your own project with some features of this template.

---
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

---
### 2. Set up `eslint` and `vscode`

```bash
  $ ./node_modules/.bin/eslint --init
```
Then follow the instructions:

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

```js
{
  // ...
  "rules": {
    "no-console": 0,
    "import/no-named-as-default": 0,
    // ...
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
```js
{
  "editor.tabSize": 2,
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true,
  "files.trimFinalNewlines": true,
  "eslint.autoFixOnSave": true
}
```

---
### 3. Set up `pre-commit`
To make sure your collaborative project to be clean, I also add `pre-commit` to run linting script everytime someone make a commit.

First, install `pre-commit`

```bash
  $ npm install --save-dev pre-commit
```

Second, add config for `pre-commit` to `package.json`

```js
{
  // ...
  "scripts": {
    // ...
    "lint": "./node_modules/.bin/eslint src"
  },
  // ...
  "pre-commit": [
    "lint"
  ]
}
```

After that, before every `git commit` command, `npm run lint` will be called.

For better UI/UX, I added a `scripts/lint.js` script to make custom linting script, then we have to modify `package.json`:

```js
{
  // ...
  "scripts": {
    // ...
    "lint": "node ./scripts/lint.js",
    "fix": "FIX=1 node ./scripts/lint.js"
  }
  // ...
}
```
Have a look at this [file](./scripts/lint.js), you can see that all I did is handling result from eslint manually and print custom info.

---
### 4. Add `LICENSE`
Yes, we're in the open source world. Remember to choose your right LICENSE [here](https://choosealicense.com/), but please keep my `LICENSE` as a new name `LICENSE.namdaoduy` if you use this template!

---
### 5. Set up NODE PATH for absolute import
```js
// Ewww
import { Header } from './../../../../../components/Common/Header';

// Yasss
import { Header } from 'components/Common/Header';
```

This is not magic. We just need 3 step to set up absolute import for our app:

**Step 1:** Add `NODE_PATH` to `.env` file
```sh
# file: .env
NODE_PATH=src
```
**Step 2:** For eslint, add this to `.eslintrc.json`
```js
{
  // ...
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"]
      }
    }
  }
}
```

**Step 2:** Create file `jsconfig.json` so VSCODE can enable absolute import intelliSense
```js
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "allowSyntheticDefaultImports": true,
    "baseUrl": "./src/"
  },
  "exclude": [
    "node_modules"
  ]
}
```

You're all set! Now you can use absolute import like a pro!

---
### 6. Set up `dotenv`
Wait a second.

`create-react-app` has already included `dotenv`. If you eject a CRA project and look into `scripts/env.js`, you can see pre-configured `dotenv`.

Some `env` files we can use are listed [here](https://github.com/bkeepers/dotenv#what-other-env-files-can-i-use)

We can **EJECT** the CRA app to config every environments we want. But in this template, I want to make a `clean` template with `create-react-app`, means **NO EJECT**. So, if you want to configure multiple `.env` files for your custom environments, you have to eject CRA and config by your own.

**IMPORTANT!**

`NODE_ENV` can not be overrided. It depends on the script you run:
- `react-scripts start` -> `NODE_ENV`=`development`
- `react-scripts test` -> `NODE_ENV`=`test`
- `react-scripts build` -> `NODE_ENV`=`production`

So, be careful when use these `.env` files. We'll have `configs` for multi environments later, so keep in mind that, we mainly use `.env` and `.env.local` for set up some common environment variables.

**Step 1:** Add `.env` files
```
.env
.env.local-example
.env.production
.env.production.local-example
```

**Step 2:** In `.gitignore`, add these lines
```sh
# local files
.env.local
.env.production.local
```

**NOTE**: As this [link](https://github.com/bkeepers/dotenv#what-other-env-files-can-i-use), `.env` files end with **.local** postfix should be ignored from `git`, because those files are for local development, and it will overwrite the same `.env` file without **.local** postfix.

So with these files, we'll add **-example** postfix to it, and this file will not be ignored in `.gitignore`. Developer will copy this example file and remove **-example** postfix to use for local development.

**Step 3:** Add some env variables to `.env` files

In `.env.production`, add
```
GENERATE_SOURCEMAP=false
```
This one will make sure the build not include source map, that expose your React codes.

**NOTE**: React App can only read these env variables:
- `NODE_ENV`
- `REACT_APP_` + anything

---
### 7. Create source code structure
I added some folders and move files in `src` to create a structure
```
src
├── assets
│   ├── css
│   │   ├── App.css
│   │   └── index.css
│   └── images
│       └── logo.svg
├── components
│   ├── __tests__
│   │   └── App.test.js
│   └── App.js
├── configs
├── constants
├── redux
│   ├── actions
│   ├── reducers
│   └── store
├── utils
│   └── serviceWorker.js
└── index.js
```

About each directory
- `assets`: contains images and css (assets stuff)
- `components`: all your `React` components codes. You can create sub-directory for nested components
- `configs`: your configurations, I'll set up later for multiple environments
- `constants`: contains const, enum, ...
- `redux`: all about `redux`, we'll set up later
- `utils`: contains all helpers, utilities modules
- `index.js`: our main js file
- `__tests__`: when we write unit test for a component, create `__tests__` folder in the same directory and put test file in there.

---
### 8. Set up configs for multiple environments
**Step 1:** set up config files

I added some files here in `configs` folder
```
src
└── configs
    ├── base.js
    ├── dev.js
    ├── index.js
    ├── local.js
    └── prod.js
```

As we **can not** override `NODE_ENV` for our script, so we'll use another variable, `REACT_APP_ENV` to set up configs.

So we'll have 3 files for 3 env `local`, `development`, `production`. Look inside each file:

- `base.js`: here we have all configs that applied for all environments
```js
const baseConfig = {
  appName: 'react_app_template',
};

export default baseConfig;
```

- `local.js`: configs for local environment
```js
const localConfig = {
  apiUrl: 'http://127.0.0.1:8000',
};

export default localConfig;
```

Same as `dev.js` and `prod.js`. Then we'll combine them all in `index.js`
```js
import deepFreeze from 'deep-freeze';

import baseConfig from './base';
import localConfig from './local';
import devConfig from './dev';
import prodConfig from './prod';

const env = process.env.REACT_APP_ENV;
let envConfig = {};
if (env === 'development') {
  envConfig = devConfig;
} else if (env === 'production') {
  envConfig = prodConfig;
} else {
  envConfig = localConfig;
}

const configs = {
  ...baseConfig,
  ...envConfig,
};

deepFreeze(configs);

export default configs;
```

Depends on wich env is defined in `REACT_APP_ENV`, we'll export the right configs for that env. If not provided, `localConfig` will be used as default.

Here I also installed `deep-freeze` to make `configs` object immmutable.

**Step 2:** modify scripts in `package.json`

```js
{
  // ...
  "scripts": {
    "start": "REACT_APP_ENV=local react-scripts start",
    "start:dev": "REACT_APP_ENV=development react-scripts start",
    "start:prod": "REACT_APP_ENV=production react-scripts start",
    "build": "REACT_APP_ENV=local react-scripts build",
    "build:dev": "REACT_APP_ENV=development react-scripts build",
    "build:prod": "REACT_APP_ENV=production react-scripts build",
    "test": "REACT_APP_ENV=local react-scripts test",
    "lint": "node ./scripts/lint.js",
    "fix": "FIX=1 node ./scripts/lint.js"
  },
  // ...
}
```

Now, if you want to use different environment, just run
```sh
# local
npm start
npm run build

# dev
npm run start:dev
npm run build:dev

# prod
npm run start:prod
npm run build:prod
```

And then in your modules
```js
import configs from 'configs';

console.log(configs.apiUrl);
```

That's it!
