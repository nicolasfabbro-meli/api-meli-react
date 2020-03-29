import React from 'react';
// import PropTypes from 'prop-types';
import './header.scss';
import Logo from '../../assets/images/logo__large.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerms: '',
    };
  }

  handleClick = () => {
    const { handleSearch } = this.props;
    const { searchTerms } = this.state;
    handleSearch(searchTerms);
  }

  setSearchTerms = (e) => {
    e.persist();
    const { handleSearch } = this.props;    
    this.setState({
      searchTerms: e.target.value,
    }, () => {
      const { searchTerms } = this.state;
      if(e.keyCode === 13){
        handleSearch(searchTerms)
      }
    });
  }

  render() {
    return (
      <header>
        <div className="header">
          <div className="header__left">
            <a
              href="https://mercadolibre.com.ar"
              className="header__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Logo} alt="Mercadolibre" className="header__logo" />
            </a>
          </div>
          <div className="header__center">
            <input
              type="text"
              placeholder="Buscar productos, marcas y mas..."
              className="header__input"
              onKeyDown={this.setSearchTerms}
            />
            <div className="v-divider"></div>
            <span className="header__icon-search" role="button" onClick={this.handleClick}>
              <ion-icon name="search-outline" />
            </span>
          </div>
          <div className="header__right"></div>
        </div>
      </header>
    );
  }
}

// Header.PropTypes = {}

export default Header;
