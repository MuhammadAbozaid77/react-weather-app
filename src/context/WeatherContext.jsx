import { createContext, useEffect, useState } from "react";

export const weatherContext = createContext(0);

export default function WeatherContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingWeather, setIsLoadingWeather] = useState(false);
  const [error, setError] = useState(null);
  const [cityLocationData, setCityLocationData] = useState({});
  const [cityWeatherDetails, setCityWeatherDetails] = useState({});
  const [daysWeather, setDaysWeather] = useState([]);
  const [dayDetails, setDayDetails] = useState({});
  // console.log(dayDetails);
  async function getWeather(args) {
    if (args) {
      try {
        setIsLoadingWeather(true);
        const res = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${args}`
        );
        const res2 = await res.json();
        setCityLocationData(res2?.results[0]);
      } catch (error) {
        setIsLoadingWeather(false);
        setError(error.message);
      } finally {
        setIsLoadingWeather(false);
      }
    }
  }

  async function getWeatherDetails(lon, lat, timezone) {
    const params = `latitude=${lat}&longitude=${lon}&timezone=${timezone}&daily=sunrise,sunset,uv_index_max,precipitation_sum,snowfall_sum,weathercode,rain_sum,wind_speed_10m_max,wind_gusts_10m_max,precipitation_probability_max,temperature_2m_max,temperature_2m_min,rain_sum,showers_sum,snowfall_sum&forecast_days=7`;
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?${params}`
      );
      const res2 = await res.json();
      setCityWeatherDetails(res2);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  const transformData = (details) => {
    const result = [];

    for (let i = 0; i < details?.daily?.time?.length; i++) {
      const obj = {
        time: details?.daily.time[i],
        precipitation_probability_max:
          details?.daily.precipitation_probability_max[i],
        precipitation_sum: details?.daily.precipitation_sum[i],
        rain_sum: details?.daily.rain_sum[i],
        showers_sum: details?.daily.showers_sum[i],
        snowfall_sum: details?.daily.snowfall_sum[i],
        temperature_2m_max: details?.daily.temperature_2m_max[i],
        temperature_2m_min: details?.daily.temperature_2m_min[i],
        uv_index_max: details?.daily.uv_index_max[i],
        wind_gusts_10m_max: details?.daily.wind_gusts_10m_max[i],
        wind_speed_10m_max: details?.daily.wind_speed_10m_max[i],
        sunrise: details?.daily.sunrise[i],
        sunset: details?.daily.sunset[i],
      };

      result.push(obj);
    }

    return result;
  };

  const handelDayDetails = (id) => {
    setDayDetails(daysWeather[id]);
  };

  useEffect(() => {
    // transformData(cityWeatherDetails);
    const everyObjectForData = transformData(cityWeatherDetails);
    setDaysWeather(everyObjectForData);
  }, [cityWeatherDetails]);

  return (
    <weatherContext.Provider
      value={{
        error,
        isLoading,
        isLoadingWeather,
        cityLocationData,
        cityWeatherDetails,
        daysWeather,
        dayDetails,
        getWeather,
        getWeatherDetails,
        handelDayDetails,
      }}
    >
      {children}
    </weatherContext.Provider>
  );
}
