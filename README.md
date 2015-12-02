[![Build Status](https://travis-ci.org/zrrrzzt/is-valid-fodselsnummer.svg?branch=master)](https://travis-ci.org/zrrrzzt/is-valid-fodselsnummer)
[![Coverage Status](https://coveralls.io/repos/zrrrzzt/is-valid-fodselsnummer/badge.svg?branch=master&service=github)](https://coveralls.io/github/zrrrzzt/is-valid-fodselsnummer?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# is-valid-fodselsnummer

Check if supplied input is valid fødselsnummer ([Norwegian national identification number](https://en.wikipedia.org/wiki/National_identification_number#Norway)).

## Installation

From npm

```sh
$ npm install --save is-valid-fodselsnummer
```

From GitHub

```sh
$ git clone https://github.com/zrrrzzt/is-valid-fodselsnummer.git
```

cd into directory and install dependencies

```sh
$ npm run setup
```

## Usage

```javascript
var isValidFodselsnummer = require('is-valid-fodselsnummer')

isValidFodselsnummer('01010750160')
// => true

isValidFodselsnummer('12341234567')
// => false

```

## Test

```sh
$ npm test
```

## Coverage

```sh
$ npm run coverage
```

## Related
- [is-valid-fodselsnummer-cli](https://github.com/zrrrzzt/is-valid-fodselsnummer-cli) CLI version of this module