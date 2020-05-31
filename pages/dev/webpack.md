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

## Import the Libraries

```
npm i --save-dev @babel/core @babel/preset-env webpack webpack-cli ts-loader babel-loader
```

### [Babel](https://babeljs.io/)

The `@babel/core`, `babel-loader` and `@babel/preset-env` are required to compile the code to ESCurrent, which helps ensure the JavaScript code is supported in the current browsers. The `ts-loader` plugin is required for compiling TypeScript code to JavaScript.

### [WebPack](https://webpack.js.org/)

The `webpack` and `webpack-cli` libraries are required to bundle the code.

### CSS/SASS Support

The `node-sass` and `sass-loader` libraries are required if you are using `.sass` code. The `css-loader` and `style-loader` libraries are required if you want to include `.css` code in the bundle.

```
npm i --save-dev webpack webpack-cli @babel/core @babel/preset-env babel-loader ts-loader node-sass sass-loader css-loader style-loader
```

#### WebPack Configuration Updates

Add a rule for compiling sass/css in the webpack configuration.

```
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
            }
        ]
    }
```

### [React](https://reactjs.org/)

The `@types/react` and `@types/react-dom` are optional, but recommended to provide intellisense for react. The `react` and `react-dom` are both required for react projects. The `@babel/preset-react` will be required for the webpack configuration for compiling react to JavaScript.

```
npm i --save-dev @types/react @types/react-dom react react-dom @babel/preset-react
```

#### WebPack Configuration Updates

Update the TypeScript rule to include the react preset library.

```
    // Loaders
    module: {
        rules: [
            // Handle TypeScript Files
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-env", "@babel/preset-react"
                            ]
                        }
                    },
                    {
                        loader: "ts-loader"
                    }
                ]
            }
        ]
    }
```

## Example Configurations

Each library contains a `build` folder containing the JavaScript source code and a `dist` folder containing the bundled library. By default, each package will default to the `build\index.js` source file. Any non-JavaScript file (.html, .scss, .css, .svg) has been compiled into JavaScript to ensure the consumption of the library is easier.

**External Resources**

WebPack allows you to reference libraries as an external resource. Below are examples for loading the libraries as an **external source**.

### gd-sprest

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
                test: /\.ts$/,
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

### gd-sprest-bs

```js
var path = require("path");

// Return the configuration
module.exports = {
    // Include the gd-sprest-bs global library
    entry: [
        "./node_modules/gd-sprest-bs/dist/gd-sprest-bs.min.js",
        "./src/index.ts"
    ],

    // Exclude the gd-sprest reference from the bundle
    externals: {
        "gd-sprest": "$REST"
        "gd-sprest-bs": "$REST"
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
            // SASS to JavaScript (Optional)
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
                test: /\.ts$/,
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

### gd-sprest-bsx

```js
var path = require("path");

// Return the configuration
module.exports = {
    // Include the gd-sprest-bs icons global library
    entry: [
        "./node_modules/gd-sprest-bsx/dist/gd-sprest-bsx.min.js",
        "./src/index.ts"
    ],

    // Output location
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.js"
    },

    // Resolve the file names
    resolve: {
        extensions: [".js", ".jsx", ".css", ".scss", ".ts", ".tsx"]
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
                        options: { presets: ["@babel/preset-env", "@babel/preset-react"] }
                    },
                    // TypeScript -> JavaScript (ES5)
                    { loader: "ts-loader" }
                ]
            }
        ]
    }
}
```