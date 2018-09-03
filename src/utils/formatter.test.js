import { toMoney } from './formatter';

describe('Formatter utils', () => {
  describe('toMoney function', () => {
    it('should return empty string if no money is send in params', () => {
      const moneyFormatter = toMoney();
      expect(moneyFormatter).toBe('');
    });

    it('should return NaN if no integer is send', () => {
      const moneyFormatter = toMoney('no soy dinero');
      expect(moneyFormatter).toBe('NaN');
    });

    describe('Happy path :D', () => {
      it('should works', () => {
        const moneyFormatter = toMoney(1000);
        expect(moneyFormatter).toBe('$1,000.00');
      });

      it('should works with strings', () => {
        const moneyFormatter = toMoney('1000');
        expect(moneyFormatter).toBe('$1,000.00');
      });

      it('should work with big numbers', () => {
        const moneyFormatter = toMoney(123456);
        expect(moneyFormatter).toBe('$123,456.00');
      });

      it('should work with big numbers in string!', () => {
        const moneyFormatter = toMoney('123456');
        expect(moneyFormatter).toBe('$123,456.00');
      });

      it('should work with bigger numbers', () => {
        const moneyFormatter = toMoney(123456789);
        expect(moneyFormatter).toBe('$123,456,789.00');
      });

      it('should work with biggest numbers', () => {
        const moneyFormatter = toMoney(123456789123);
        expect(moneyFormatter).toBe('$123,456,789,123.00');
      });

      it('should works with 0s', () => {
        const moneyFormatter = toMoney(0);
        expect(moneyFormatter).toBe('$0.00');
      });
    });
  });
});
