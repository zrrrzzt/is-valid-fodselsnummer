'use strict'

const tap = require('tap')
const isValidFodselsnummer = require('../index.js')

tap.equal(
  true, isValidFodselsnummer('01010750160'),
  '01010750160 is a valid ID-number'
)

tap.equal(
  false, isValidFodselsnummer('11111234567'),
  '11111234567 is not a valid ID-number'
)

tap.throws(
  function () {
    isValidFodselsnummer('1234123456')
  },
  { message: 'Too short. Expected length of 11.' },
  'Throws if number too short'
)

tap.throws(
  function () {
    isValidFodselsnummer('30029012311')
  },
  { message: 'Invalid date for fodselsnummer.' },
  'Throws if number contains invalid date (for f-numbers only)'
)

tap.equal(
  true, isValidFodselsnummer('41085801188'),
  '41085801188 is a valid ID-number'
)

tap.equal(
  'D', isValidFodselsnummer('41085801188', true),
  '41085801188 is a D-Number'
)

tap.equal(
  'F', isValidFodselsnummer('01010750160', true),
  '01010750160 is a F-Number'
)

tap.equal(
  false, isValidFodselsnummer('11111234567', true),
  '11111234567 is not a valid ID-number'
)
