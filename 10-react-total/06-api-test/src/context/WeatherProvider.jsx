import { useEffect, useState } from "react";
import axios from "axios";
import WeatherContext from "./WeatherContext";

// 선택할 국가
const countries = {
  Korea: "Seoul",
  USA: "New York",
  Japan: "Tokyo",
  France: "Paris",
  Germany: "Berlin",
};

// 날씨 API
const API_KEY = "b52f83d9dc7d96098ca8de149cb841d6";

const WeatherProvider = ({ children }) => {
  // 나라 선택
  const [selectCountry, setSelectCountry] = useState("Korea");

  // 날씨
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const axiosWeather = async () => {
      const city = countries[selectCountry];
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather",
          { params: { q: city, appid: API_KEY, units: "metric", lang: "kr" } }
        );

        setWeatherData(response.data);
      } catch (error) {}
    };

    axiosWeather();
  }, [selectCountry]);

  return (
    <WeatherContext.Provider
      value={{
        selectCountry,
        setSelectCountry,
        weatherData,
        setWeatherData,
        countries,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
