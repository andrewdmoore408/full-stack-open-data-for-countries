import logo from './logo.svg';
import { useState, useEffect } from 'react';
import axios from 'axios';

import SearchBar from './components/searchbar';

function App() {
  const [ countries, setCountries ] = useState(null);
  const [ filterBy, setFilterBy ] = useState('');

  const handleFilterChange = (event) => {
    setFilterBy(event.target.value);
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
      {/* <Countries /> */}
    </div>
  );
}

export default App;
