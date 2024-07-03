import { useContext, useEffect, useState } from "react";
import SearchCard from "./SearchCard";
import { weatherContext } from "../context/WeatherContext";

//
export default function SearchCompo() {
  const [searchWord, setSearchWord] = useState("");

  const { cityLocationData, getWeather } =
    useContext(weatherContext);

  useEffect(() => {
    if (searchWord) {
      getWeather(searchWord);
    }
  }, [searchWord]);

  return (
    <>
      <div className="relative ">
        <div className=" rounded  shadow-lg">
          <input
            type="search"
            className="w-[900px] p-3 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 text-blue-600 shadow font-semibold"
            onChange={(e) => setSearchWord(e.target.value)}
          />
        </div>
        {searchWord && (
          <>
            <div className="absolute border bg-white border-stone-300 rounded-[10px] shadow-md h-auto w-[100%] ">
              <SearchCard data={cityLocationData} />
            </div>
          </>
        )}
      </div>
    </>
  );
}
