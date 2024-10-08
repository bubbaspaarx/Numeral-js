// numeral.js locale configuration
// locale : norwegian krone (dk)
// author : Edward Sparks

;(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['../numeral'], factory)
  } else if (typeof module === 'object' && module.exports) {
    factory(require('../numeral'))
  } else {
    factory(global.numeral)
  }
})(this, function (numeral) {
  numeral.register('locale', 'se-sk', {
    delimiters: {
      thousands: '.',
      decimal: ',',
    },
    abbreviations: {
      thousand: 'k',
      million: 'm',
      billion: 'b',
      trillion: 't',
    },
    ordinal: function (number) {
      return '.'
    },
    currency: {
      symbol: 'SEK',
    },
  })
})
