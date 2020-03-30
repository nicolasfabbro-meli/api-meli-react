import {
  getCurrencySymbol,
  saveSearch,
  removeSavedSearch,
} from '../../../utils';

describe('Utils', () => {
  it('Should return $ when the currency_id is ARS', () => {
    const result = getCurrencySymbol('ARS');
    expect(result).toEqual('$');
  });

  it('Should return U$D when the currency_id is USD', () => {
    const result = getCurrencySymbol('USD');
    expect(result).toEqual('U$D');
  });

  it('Should return the currency_id when there are no symbol setted', () => {
    const result = getCurrencySymbol('BR');
    expect(result).toEqual('BR');
  });
});