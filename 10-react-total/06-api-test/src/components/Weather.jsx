import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

const Weather = () => {
  const {
    selectCountry,
    setSelectCountry,
    weatherData,
    setWeatherData,
    countries,
  } = useContext(WeatherContext);

  return (
    <div className="weather-wrap">
      <h2>국가별 날씨</h2>
      <select value={selectCountry}>
        {Object.keys(countries).map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Weather;
