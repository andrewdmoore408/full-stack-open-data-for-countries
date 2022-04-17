const Countries = ({ countriesData }) => {
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
      <div>
        <h2>{country.name.common}</h2>
        <p>Capital {country.capital}</p>
        <p>Area {country.area}</p>

        <p><strong>Languages:</strong></p>
        <ul>
          {Object.entries(country.languages).map(language => <li>{language[1]}</li>)}
        </ul>
        <span style={{fontSize: 100}}>{country.flag}</span>
      </div>
    );
  } else {
    return (
      <p>No results for current filter</p>
    )
  }
};

export default Countries;
