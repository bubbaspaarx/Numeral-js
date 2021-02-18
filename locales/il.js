// numeral.js locale configuration
// locale : israeli (il)
// author : Edward Sparks

(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
      define(['../numeral'], factory);
  } else if (typeof module === 'object' && module.exports) {
      factory(require('../numeral'));
  } else {
      factory(global.numeral);
  }
}(this, function (numeral) {
  numeral.register('locale', 'il', {
      delimiters: {
          thousands: '.',
          decimal: ','
      },
      abbreviations: {
          thousand: 'k',
          million: 'm',
          billion: 'bn',
          trillion: 'tn'
      },
      ordinal: function (number) {
          return '';
      },
      currency: {
          symbol: '₪'
      }
  });
}));
