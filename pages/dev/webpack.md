---
title: "WebPack"
category: dev-docs
permalink: /dev/webpack/
---
This page will give a basic overview setting up a TypeScript project using Babel and WebPack.

## TypeScript Configuration

The `tsconfig.json` file contains the TypeScript configuration. Below is a basic example for this library.

```js
{
    "compilerOptions": {
        "lib": [
            "dom",
            "es2015"
        ],
        "target": "es5"
    },
    "include": [
        "src/**/*"
    ]
}
```

## NPM Installation Command

```
npm i --save-dev @babel/core @babel/preset-env webpack webpack-cli ts-loader babel-loader
```

### [Babel](https://babeljs.io/)

The `@babel/core`, `babel-loader` and `@babel/preset-env` are required to compile the code to ESCurrent, which helps ensure the JavaScript code is supported in the current browsers. The `ts-loader` plugin is required for compiling TypeScript code to JavaScript.

### [WebPack](https://webpack.js.org/)

The `webpack` and `webpack-cli` libraries are required to bundle the code.

## Promise Library Dependency

The `gd-sprest` library does depend on the Promise library. As browsers support web components, it may or maynot be necessary to include an additional library in the bundle. If you do need to, then you can reference the distribution file which includes the promise library from the `core-js` library.

```js
var path = require("path");

// Return the configuration
module.exports = {
    // Include the gd-sprest global library
    entry: [
        "./node_modules/gd-sprest/dist/gd-sprest.min.js",
        "./src/index.ts"
    ],

    // Exclude the gd-sprest reference from the bundle
    externals: {
        "gd-sprest": "$REST"
    },

    // Output location
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.js"
    },

    // Resolve the file names
    resolve: {
        extensions: [".js", ".ts"]
    },

    // Loaders
    module: {
        rules: [
            // TypeScript to JavaScript
            {
                // Target TypeScript files
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    // JavaScript (ES5) -> JavaScript (Current)
                    {
                        loader: "babel-loader",
                        options: { presets: ["@babel/preset-env"] }
                    },
                    // TypeScript -> JavaScript (ES5)
                    { loader: "ts-loader" }
                ]
            }
        ]
    }
}
```

## CSS/SASS Support

The `node-sass` and `sass-loader` libraries are required if you are using `.sass` code. The `css-loader` and `style-loader` libraries are required if you want to include `.css` code in the bundle.

### NPM Install
```
npm i --save-dev webpack webpack-cli @babel/core @babel/preset-env babel-loader ts-loader node-sass sass-loader css-loader style-loader
```

### webpack.config.js

```js
var path = require("path");

// Return the configuration
module.exports = {
    // Include the gd-sprest global library
    entry: [
        "./node_modules/gd-sprest/dist/gd-sprest.min.js",
        "./src/index.ts"
    ],

    // Exclude the gd-sprest reference from the bundle
    externals: {
        "gd-sprest": "$REST"
    },

    // Output location
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.js"
    },

    // Resolve the file names
    resolve: {
        extensions: [".js", ".css", ".scss", ".ts"]
    },

    // Loaders
    module: {
        rules: [
            // SASS to JavaScript
            {
                // Target the sass and css files
                test: /\.s?css$/,
                // Define the compiler to use
                use: [
                    // Create style nodes from the CommonJS code
                    { loader: "style-loader" },
                    // Translate css to CommonJS
                    { loader: "css-loader" },
                    // Compile sass to css
                    { loader: "sass-loader" }
                ]
            },
            // TypeScript to JavaScript
            {
                // Target TypeScript files
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    // JavaScript (ES5) -> JavaScript (Current)
                    {
                        loader: "babel-loader",
                        options: { presets: ["@babel/preset-env"] }
                    },
                    // TypeScript -> JavaScript (ES5)
                    { loader: "ts-loader" }
                ]
            }
        ]
    }
}
```