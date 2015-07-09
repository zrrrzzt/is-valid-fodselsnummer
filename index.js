'use strict';

function isValidFodselsnummer(fodselsnummer) {
  if( fodselsnummer.length !== 11 ) {
    throw new Error('Too short. Expected length of 11.');
  }

  var day = fodselsnummer.substr(0,2);
  var month = fodselsnummer.substr(2,2);
  var year = fodselsnummer.substr(4,2);
  var individsiffer = fodselsnummer.substr(6,3);
  var kontrollsiffer1 = parseInt(fodselsnummer.substr(9,1), 10);
  var kontrollsiffer2 = parseInt(fodselsnummer.substr(10,1), 10);

  var d1 = parseInt(day.substr(0,1), 10);
  var d2 = parseInt(day.substr(1,1), 10);
  var m1 = parseInt(month.substr(0,1), 10);
  var m2 = parseInt(month.substr(1,1), 10);
  var a1 = parseInt(year.substr(0,1), 10);
  var a2 = parseInt(year.substr(1,1), 10);
  var i1 = parseInt(individsiffer.substr(0,1), 10);
  var i2 = parseInt(individsiffer.substr(1,1), 10);
  var i3 = parseInt(individsiffer.substr(2,1), 10);
  var k1 = 11 - (((3 * d1) + (7 * d2) + (6 * m1) + m2 + (8 * a1)
           + (9 * a2) + (4 * i1) + (5 * i2) + (2 * i3)) % 11);
  var u1 = k1 === 11 ? 0:k1;
  var k2 = 11 - (((5 * d1) + (4 * d2) + (3 * m1) + (2 * m2) + (7 * a1)
           + (6 * a2) + (5 * i1) + (4 * i2) + (3 * i3) + (2 * u1)) % 11);
  var u2 = k2 === 11 ? 0:k2;

  return u1 === kontrollsiffer1 && u2 === kontrollsiffer2;
}

module.exports = isValidFodselsnummer;