const CountryDetail = ({ country }) => {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital {country.capital}</p>
      <p>Area {country.area}</p>

      <p><strong>Languages:</strong></p>
      <ul>
        {Object.entries(country.languages)
          .map(language => <li>{language[1]}</li>)}
      </ul>
      <span style={{ fontSize: 100 }}>{country.flag}</span>
    </div>
  );
};

export default CountryDetail;
