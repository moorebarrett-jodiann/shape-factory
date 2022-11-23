## Shape Factory

- [Demo](https://moorebarrett-jodiann.github.io/shape-factory/)
- [Description](#description)
- [Usage](#usage)
- [Requirements](#requirements)
- [Classes in JavaScript](#classes-in-javascript)
- [Tests](#tests)

## Description

Lightweight JavaScript shape generator application, deployed in a dev environment running on [lite-server](https://www.npmjs.com/package/light-server)


## Usage

Set type attribute on the HTML markup to 'module':

```html
<script src="...path/index.js" type="module"></script>
```

Initialize packages.json:

```sh
npm init -y
```

Install the **lite-server** package with [NPM](https://www.npmjs.org/) and create a local dev environment:

```sh
npm install lite-server --save-dev
```

Update **package.json** 'scripts' by setting the dev environment to **lite-server**:

```json
{
  "name": "es-modules",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "lite-server",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "lite-server": "^2.6.1"
  }
}
```

## Requirements

Dependencies:
- [Node.js](https://nodejs.org/)

### Classes in JavaScript

A class is a blueprint for objects. Classes have members, that are fields, constructors and methods.
**In EcmaScript, classes are just objects.**

For this application, the class **Shape** initializes the ```name``` and ```color``` properties of a shape in it's constructor.

```js
class Shape {
    constructor (name, color) {
        this._name = name;
        this._color = color;
    }
}
```

In the **Shape** class, getter and setter methods 'get' and set' the values for the ```name``` and ```shape``` properties.

The getInfo() method returns the value of the properties by invoking their respective getter functions 
```js
${this.color} ${this.name}
```

## Tests

To run the application in the browser:

- run `npm run dev` in the Terminal in the root path of the repository package.
