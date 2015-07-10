[![Build Status](https://travis-ci.org/zrrrzzt/is-valid-fodselsnummer.svg?branch=master)](https://travis-ci.org/zrrrzzt/is-valid-fodselsnummer)
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
$ npm install
```

## Usage

```javascript
var isValidFodselsnummer = require('is-valid-fodselsnummer');

isValidFodselsnummer('01010750160');
// => true

isValidFodselsnummer('12341234567');
// => false

```