import { useState, useEffect } from 'react';
import axios from 'axios';

import SearchBar from './components/searchbar';
import CountriesDisplay from './components/countries';

function App() {
  const [ countries, setCountries ] = useState(null);
  const [ filteredCountries, setFilteredCountries ] = useState(null);

  const filterCountries = (filter) => {
    return countries.filter(country => country.name.common.includes(filter));
  };

  const handleFilterChange = (event) => {
    const currentFilterText = event.target.value;

    if (currentFilterText === '') {
      setFilteredCountries(null);
    } else {
      setFilteredCountries(filterCountries(currentFilterText));
    }
  };

  useEffect(() => {
    axios
    .get('http://restcountries.com/v3.1/all')
    .then(response => {
      setCountries(response.data);
    });
  }, []);

  return (
    <div>
      <SearchBar
        placeholder="Type to filter..."
        onChange={handleFilterChange}
      />
      <CountriesDisplay countriesData={filteredCountries} />
    </div>
  );
}

export default App;
