import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

import SearchBar from './components/searchbar';
import CountriesDisplay from './components/countriesdisplay';

function App() {
  const [ countries, setCountries ] = useState(null);
  const [ filteredCountries, setFilteredCountries ] = useState(null);

  const filterCountries = (filter) => {
    return countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()));
  };

  const handleFilterChange = (event) => {
    const currentFilterText = event.target.value;

    if (currentFilterText === '') {
      setFilteredCountries(null);
    } else {
      setFilteredCountries(filterCountries(currentFilterText));
    }
  };

  const handleShowCountry = (event) => {
    const selectedCountry = countries.find(country => country.name.common === event.target.getAttribute('countryname'));

    setFilteredCountries([selectedCountry]);
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
      <CountriesDisplay
        countriesData={filteredCountries}
        handleShowCountry={handleShowCountry}
        />
    </div>
  );
}

export default App;
