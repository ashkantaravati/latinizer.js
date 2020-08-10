# latinizer.js

Simple JavaScript Library to convert non-latin digits to latin digits. (Currently only Persian is supported )

## Installation

This is a [Node.js](https://nodejs.org/) module available through the 
[npm registry](https://www.npmjs.com/). It can be installed using the 
[`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)
or 
[`yarn`](https://yarnpkg.com/en/)
command line tools.

```sh
npm install latinizer.js --save
```

## Usage

```html
<input type="text" name="age" id="age" placeholder="Age...">

    <script type="module">
        import {
            Latinizer
        } from '/dist/latinizer.js'
        Latinizer.Register("#age");
        Latinizer.Register("#month");
    </script>

```

## Tests

```sh
npm install
npm test
```

## Dependencies

- [@types/chai](https://ghub.io/@types/chai): TypeScript definitions for chai
- [@types/mocha](https://ghub.io/@types/mocha): TypeScript definitions for mocha
- [chai](https://ghub.io/chai): BDD/TDD assertion library for node.js and the browser. Test framework agnostic.
- [mocha](https://ghub.io/mocha): simple, flexible, fun test framework
- [ts-node](https://ghub.io/ts-node): TypeScript execution environment and REPL for node.js, with source map support
- [typescript](https://ghub.io/typescript): TypeScript is a language for application scale JavaScript development

## Dev Dependencies

None

## License

MIT License

## To Do

- Write specs/tests
- Publish to NPM registry
- Review dependencies
- Add support for digits in other languages/scripts