import CountryDetail from './countrydetail';

const CountriesDisplay = ({ countriesData }) => {
  const alphaSort = (a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  };

  if (countriesData === null) {
    return (<></>);
  } else if (countriesData.length > 10) {
    return (
      <p>Too many matches—select another filter</p>
    )
  } else if (countriesData.length > 1) {
    return (
      <>
        {countriesData
          .map(country => country.name.common)
          .sort(alphaSort)
          .map(countryName => <p>{countryName}</p>)
        }
      </>
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
