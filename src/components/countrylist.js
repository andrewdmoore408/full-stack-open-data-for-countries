const CountryList = ({ countries }) => {
  const alphaSort = (a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  };

  return (
    <>
      {countries
        .map(country => country.name.common)
        .sort(alphaSort)
        .map(countryName => <p>{countryName}</p>)
      }
    </>
  );
}

export default CountryList;
