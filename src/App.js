import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

import SearchBar from './components/searchbar';
import CountriesDisplay from './components/countriesdisplay';

function App() {
  const [ countries, setCountries ] = useState(null);
  const [ filteredCountries, setFilteredCountries ] = useState(null);
  const [ weather, setWeather ] = useState(null);

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

  useEffect(() => {
    if (filteredCountries === null || filteredCountries.length !== 1) {
      setWeather(null);
      return;
    }

    const country = filteredCountries[0];

    axios
      .get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          lat: country.capitalInfo.latlng[0],
          lon: country.capitalInfo.latlng[1],
          lang: 'en',
          appid: process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY,
          units: 'imperial',
        },
      })
      .then(response => setWeather(response.data));
  }, [filteredCountries]);

  return (
    <div>
      <SearchBar
        placeholder="Type to filter..."
        onChange={handleFilterChange}
      />
      <CountriesDisplay
        countriesData={filteredCountries}
        handleShowCountry={handleShowCountry}
        weather={weather}
        />
    </div>
  );
}

export default App;
