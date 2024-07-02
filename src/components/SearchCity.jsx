import { useState } from "react";

export default function SearchCity() {
  const [searchWord, setSearchWord] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setdata] = useState(null);
  const [details, setDetails] = useState(null);
  console.log(data);
  console.log(details);
  // async function getWeather(args) {
  //   try {
  //     setIsLoading(true);
  //     const res = await fetch(
  //       `https://geocoding-api.open-meteo.com/v1/search?name=${args}`
  //     );
  //     const res2 = await res.json();
  //     setdata(res2?.results[0]);
  //   } catch (error) {
  //     setIsLoading(false);
  //     setError(error.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }
  // async function getWeatherDetails(lon, lat, timezone) {
  //   const params = `latitude=${lat}&longitude=${lon}&timezone=${timezone}&daily=sunrise,sunset,uv_index_max,precipitation_sum,snowfall_sum,weathercode,rain_sum,wind_speed_10m_max,wind_gusts_10m_max,precipitation_probability_max,temperature_2m_max,temperature_2m_min,rain_sum,showers_sum,snowfall_sum&forecast_days=7`;
  //   try {
  //     setIsLoading(true);
  //     const res = await fetch(
  //       `https://api.open-meteo.com/v1/forecast?${params}`
  //     );
  //     const res2 = await res.json();
  //     setDetails(res2);
  //   } catch (error) {
  //     setIsLoading(false);
  //     setError(error.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }

  const handelSubmitWeather = (e) => {
    e.preventDefault();
    getWeather(searchWord);
  };
  if (isLoading) {
    return (
      <>
        <div>
          <h1 className="text-[50px]"> Loading </h1>
        </div>
      </>
    );
  }
  if (error) {
    return (
      <>
        <div>
          <h1 className="text-[50px]"> {error} </h1>
        </div>
      </>
    );
  }
  return (
    <>
      <div>
        <form onSubmit={handelSubmitWeather}>
          <div>
            {/* <label htmlFor=""></label> */}
            <input
              type="search"
              className="border p-2 w-[60%] rounded focus:outline-none focus:ring-1 focus:ring-blue-400 "
              placeholder="Your City Weather"
              value={searchWord}
              onChange={(e) => setSearchWord(e.target.value)}
            />
          </div>
          <button
            className="border p-2 bg-blue-500 text-white rounded"
            type="submit"
          >
            Search
          </button>
        </form>

        <button
          className="border p-2 bg-blue-500 text-white rounded"
          onClick={() =>
            getWeatherDetails(data.longitude, data.latitude, data.timezone)
          }
        >
          Details
        </button>
      </div>
    </>
  );
}
