const CountryList = ({ countries, handleShowCountry }) => {
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
    <ul>
      {countries
        .map(country => country.name.common)
        .sort(alphaSort)
        .map((countryName, index) => {
          return (
            <>
              <li key={index}>
                {countryName}
                <button
                  type="button"
                  countryname={countryName}
                  onClick={handleShowCountry}
                >
                  Show
                </button>
              </li>
            </>
          );
        })
      }
    </ul>
  );
}

export default CountryList;
