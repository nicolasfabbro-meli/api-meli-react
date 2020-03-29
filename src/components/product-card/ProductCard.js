import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './product-card.scss';
import { getCurrencySymbol } from '../../utils';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { product } = this.props;
    return (
      <a href={product.permalink} className="product-card">
        <div className="product-card__image">
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className="product-card__info">
          <span className="product-card__price">
            {getCurrencySymbol(product.currency_id)} {product.price}
          </span>
          <span className={classnames('product-card__shipping', {
            'product-card__shipping--hidden': product.shipping.free_shipping
          })}>
              Envío gratis
            </span>
          <span className="product-card__title">
            {product.title}
          </span>
        </div>
      </a>
    );
  }
}

export default ProductCard;
