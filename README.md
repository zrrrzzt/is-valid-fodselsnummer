[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# is-valid-fodselsnummer

Check if supplied input is valid fødselsnummer ([Norwegian national identification number](https://en.wikipedia.org/wiki/National_identification_number#Norway)).

Identify if number is an F or [D-number](https://no.wikipedia.org/wiki/F%C3%B8dselsnummer#D-nummer)

## Installation

From npm

```sh
$ npm i --save is-valid-fodselsnummer
```

From GitHub

```sh
$ git clone https://github.com/zrrrzzt/is-valid-fodselsnummer.git
```

cd into directory and install dependencies

```sh
$ npm run setup
```

## Usage validation

```JavaScript
const isValidFodselsnummer = require('is-valid-fodselsnummer')

isValidFodselsnummer('01010750160')
// => true

isValidFodselsnummer('12341234567')
// => false

```

## Usage identification

```JavaScript
const isValidFodselsnummer = require('is-valid-fodselsnummer')

isValidFodselsnummer('01010750160', true)
// => F

isValidFodselsnummer('41085801188', true)
// => D

isValidFodselsnummer('12341234567', true)
// => false

```


## Related

- [is-valid-fodselsnummer-cli](https://github.com/zrrrzzt/is-valid-fodselsnummer-cli) CLI version of this module

## License

[MIT](LICENSE)
