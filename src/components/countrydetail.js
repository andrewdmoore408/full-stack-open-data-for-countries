const CountryDetail = ({ country, weather }) => {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital {country.capital}</p>
      <p>Area {country.area}</p>

      <p><strong>Languages:</strong></p>
      <ul>
        {Object.entries(country.languages)
          .map((language, index) => <li key={index}>{language[1]}</li>)}
      </ul>
      <span style={{ fontSize: 100 }}>{country.flag}</span>

      <h4>Weather in {country.capital}</h4>
      <p>Temperature {weather?.main?.feels_like} Fahrenheit</p>
      <p>Wind {weather?.wind?.speed} mph</p>
    </div>
  );
};

export default CountryDetail;
