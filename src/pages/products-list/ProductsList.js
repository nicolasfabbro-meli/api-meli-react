import React from 'react';
import './products-list.scss';
import Header from '../../components/Header';
import MeliService from '../../services/meli';
import ProductCard from '../../components/ProductCard';
import Tag from '../../components/Tag';
import { saveSearch, removeSavedSearch } from '../../utils';
import { uuid } from 'uuidv4';

const meliService = new MeliService();

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      searchTerms: '',
    };
  }

  handleSearch = async (terms) => {
    saveSearch(terms);
    try {
      const response = await meliService.search(terms);
      this.setState({
        results: response.results,
        searchTerms: terms,
      });
    } catch (e) {
      console.error(e);
    }
  }

  handleCloseTag = (term) => {
    removeSavedSearch(term);
    this.forceUpdate();
  }

  render() {
    const { results, searchTerms } = this.state;
    let lastSearches = localStorage.getItem('lastSearches');
    lastSearches = lastSearches && JSON.parse(lastSearches);
    return (
      <React.Fragment>
        <Header handleSearch={this.handleSearch} />
        <div className="container">
          <div className="page">
            {lastSearches && lastSearches.length ? (
              <React.Fragment>
                <p>Tus últimas búsquedas fueron:</p>
                <div className="last-searches">
                  {lastSearches.map(search => (
                    <Tag
                      key={uuid()}
                      handleClick={this.handleSearch}
                      handleClose={this.handleCloseTag}
                    >
                      {search}
                    </Tag>
                  ))}
                </div>
              </React.Fragment>
            ) : ''}
            {searchTerms &&
              <div className="search-results">
                <h2>Resultados de búsqueda para: "{searchTerms}"</h2>
              </div>
            }
            {results.length
              ? (
                <div className="products-list">
                  {results.map(result => (
                    <ProductCard key={result.id} product={result} />
                  ))}
                </div>
              )
              : (
                <div className="page__empty-search">
                  Realiza una búsqueda para comenzar a comprar!
                </div>
              )
            }
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductsList;
