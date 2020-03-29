import React from 'react';
import PropTypes from 'prop-types';
import './header.scss';
import Logo from '../../assets/images/logo__large.png';

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <header className="header">
        <div className="header__left">
          <a href="https://mercadolibre.com.ar">
            <img src={Logo} alt="Mercadolibre"/>
          </a>
        </div>
        <div className="header__center"></div>
        <div className="header__right"></div>
      </header>
    );
  }
}

Header.PropTypes = {}

export default Header;
