import React from 'react';
import Component from '../../../components/ProductCard';

describe('ProductCard', () => {
  it('Should match snapshot', () => {
    const props = {
      product: {
        permalink: '__LINK__',
        thumbnail: '__IMAGE__',
        title: '__TITLE__',
        currency_id: '__CURRENCY_ID__',
        price: 999,
        shipping: {
          free_shipping: true,
        },
      }
    };
    const component = shallow(<Component {...props} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });
});
