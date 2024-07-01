import { useState } from "react";

export default function SearchCity() {
  const [searchWord, setSearchWord] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setdata] = useState(null);

  async function getWeather(args) {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${args}`
      );
      const res2 = await res.json();
      setdata(res2);
      console.log(res2);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }
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
      </div>
    </>
  );
}
