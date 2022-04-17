import CountryDetail from './countrydetail';
import CountryList from './countrylist';

const CountriesDisplay = ({ countriesData, handleShowCountry }) => {
  if (countriesData === null) {
    return (<></>);
  } else if (countriesData.length > 10) {
    return (
      <p>Too many matches—select another filter</p>
    );
  } else if (countriesData.length > 1) {
    return (
      <CountryList
        countries={countriesData}
        handleShowCountry={handleShowCountry}
      />
    );
  } else if (countriesData.length === 1) {
    const country = countriesData[0];

    return (
      <CountryDetail
        country={country}
      />
    );
  } else {
    return (
      <p>No results for current filter</p>
    )
  }
};

export default CountriesDisplay;
