'use strict'

var tap = require('tap')
var isValidFodselsnummer = require('../index.js')

tap.equal(
  true, isValidFodselsnummer('01010750160'),
  '01010750160 is a valid ID-number'
)

tap.equal(
  false, isValidFodselsnummer('12341234567'),
  '12341234567 is not a valid ID-number'
)

tap.throws(
  function () {
    isValidFodselsnummer('1234123456')
  },
  {message: 'Too short. Expected length of 11.'},
  'Throws if number too short'
)

tap.equal(
  true, isValidFodselsnummer('41085801188'),
  '41085801188 is a valid ID-number'
)
