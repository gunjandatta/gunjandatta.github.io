---
layout: default
---
<div class="page-info" markdown="1">

[Back](/development)
## WebPack

</div>

I thought it was important to give examples of using webpack with this framework.

### NPM Libraries

```
npm i --save-dev webpack webpack-cli babel-core babel-loader babel-preset-env ts-loader
```

#### WebPack
The `webpack` and `webpack-cli` libraries are required to bundle the code.

#### Babel
The `babel-core`, `babel-loader` and `babel-preset-env` are required to compile the code to ESCurrent, for support of all browsers. The `ts-loader` plugin is required for compiling TypeScript code to JavaScript.

### Basic Example

#### tsconfig.json
```js
{
    "compilerOptions": {
        "lib": [
            "dom",
            "es2015"
        ],
        "sourceMap": true,
        "target": "es5"
    },
    "include": [
        "src/**/*"
    ]
}
```

#### webpack.config.js
```js
var path = require("path");
var webpack = require("webpack");

// Return the configuration
module.exports = {
    // Main entry point(s) of your libraries/applications
    entry: "./src/index.ts",

    // Output location
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.js"
    },

    // Resolve the file names
    resolve: {
        extensions: [".js", ".css", ".sass", ".ts"]
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
                        options: { presets: ["env"] }
                    },
                    // TypeScript -> JavaScript (ES5)
                    { loader: "ts-loader" }
                ]
            }
        ]
    }
}
```

### Externals
If your application uses a core/common file, then applications requiring the `gd-sprest` and/or `gd-sprest-js` libraries to be excluded from their bundle will need to add the following configuration.

```js
// Return the configuration
module.exports = {
    // Basic Configuration Here

    // Exclude the gd-sprest and gd-sprest-js libraries
    externals: {
        "gd-sprest": "$REST",
        "gd-sprest-js": "$REST.JS"
    }
}
```