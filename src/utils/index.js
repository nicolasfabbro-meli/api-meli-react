const getCurrencySymbol = (currency) => {
  const symbols = {
    ARS: '$',
    USD: 'U$D',
  };
  return symbols[currency] || currency;
};

const saveSearch = (terms) => {
  const lastSearches = localStorage.getItem('lastSearches');
  if (lastSearches) {
    const parsedSearches = JSON.parse(lastSearches);
    if (parsedSearches.indexOf(terms) < 0) {
      if (parsedSearches.length >= 3) {
        parsedSearches.pop();
      }
      parsedSearches.unshift(terms);
      localStorage.setItem('lastSearches', JSON.stringify(parsedSearches));
    }
  } else {
    const searches = [terms];
    localStorage.setItem('lastSearches', JSON.stringify(searches));
  }
};

const removeSavedSearch = (term) => {
  const parsedSearches = JSON.parse(localStorage.getItem('lastSearches'));
  const elementIndex = parsedSearches.indexOf(term);
  if (elementIndex > -1) {
    parsedSearches.splice(elementIndex, 1);
    localStorage.setItem('lastSearches', JSON.stringify(parsedSearches));
  }
}

export {
  getCurrencySymbol,
  saveSearch,
  removeSavedSearch,
};
