import React from 'react';
import PropTypes from 'prop-types';
import './header.scss';
import Logo from '../../assets/images/logo__large.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerms: '',
    };
  }

  setSearchTerms = (e) => {
    e.persist();
    if (this.searchInput.value) {
      const { handleSearch } = this.props;
      this.setState({
        searchTerms: this.searchInput.value,
      }, () => {
        const { searchTerms } = this.state;
        if (
          e.type === 'click' ||
          (e.type === 'keydown' && e.keyCode === 13)
        ) {
          handleSearch(searchTerms)
        }
      });
    }
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
            <span className="header__search-input-container">
              <input
                ref={(el) => { this.searchInput = el; }}
                type="text"
                placeholder="Buscar productos, marcas y mas..."
                className="header__input"
                onKeyDown={this.setSearchTerms}
              />
              <div className="v-divider"></div>
              <span className="header__icon-search" role="button" onClick={this.setSearchTerms}>
                <ion-icon name="search-outline" />
              </span>
            </span>
          </div>
          <div className="header__right"></div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  handleSearch: PropTypes.func.isRequired,
}

export default Header;
