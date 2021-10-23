'use strict'

function toInt (number) {
  return parseInt(number, 10)
}

function checkType (fodselsnummer) {
  return toInt(fodselsnummer[0]) > 3 ? 'D' : 'F'
}

function hasValidDate (fodselsnummer) {
  if (toInt(fodselsnummer[0]) > 3) {
    fodselsnummer = fodselsnummer[0] - 4 + fodselsnummer.substring(1)
  }
  const d = toInt(fodselsnummer.substr(0, 2))
  const m = toInt(fodselsnummer.substr(2, 2)) - 1
  const y = toInt(fodselsnummer.substr(4, 2))
  const currentCentury = 2000
  const yyyy = currentCentury + y
  const date = new Date(yyyy, m, d)
  const now = new Date()
  const previousCenturyYYYY = yyyy - 100
  if (date > now) return isValidDateValues(previousCenturyYYYY, m, d)
  else return isValidDateValues(previousCenturyYYYY, m, d) || isValidDateValues(yyyy, m, d)
}

function isValidDateValues (yyyy, m, d) {
  const date = new Date(yyyy, m, d)
  return date.getFullYear() === yyyy && date.getMonth() === m && date.getDate() === d
}

module.exports = function (fodselsnummer, type) {
  if (fodselsnummer.length !== 11) {
    throw new Error('Too short. Expected length of 11.')
  }
  if (!hasValidDate(fodselsnummer)) {
    throw new Error('Invalid date for fodselsnummer.')
  }

  const day = fodselsnummer.substr(0, 2)
  const month = fodselsnummer.substr(2, 2)
  const year = fodselsnummer.substr(4, 2)
  const individsiffer = fodselsnummer.substr(6, 3)
  const kontrollsiffer1 = toInt(fodselsnummer.substr(9, 1))
  const kontrollsiffer2 = toInt(fodselsnummer.substr(10, 1))

  const d1 = toInt(day.substr(0, 1))
  const d2 = toInt(day.substr(1, 1))
  const m1 = toInt(month.substr(0, 1))
  const m2 = toInt(month.substr(1, 1))
  const a1 = toInt(year.substr(0, 1))
  const a2 = toInt(year.substr(1, 1))
  const i1 = toInt(individsiffer.substr(0, 1))
  const i2 = toInt(individsiffer.substr(1, 1))
  const i3 = toInt(individsiffer.substr(2, 1))
  const k1 = 11 - (((3 * d1) + (7 * d2) + (6 * m1) + m2 + (8 * a1) +
           (9 * a2) + (4 * i1) + (5 * i2) + (2 * i3)) % 11)
  const u1 = k1 === 11 ? 0 : k1
  const k2 = 11 - (((5 * d1) + (4 * d2) + (3 * m1) + (2 * m2) + (7 * a1) +
           (6 * a2) + (5 * i1) + (4 * i2) + (3 * i3) + (2 * u1)) % 11)
  const u2 = k2 === 11 ? 0 : k2

  const result = u1 === kontrollsiffer1 && u2 === kontrollsiffer2

  return type && result !== false ? checkType(fodselsnummer) : result
}
