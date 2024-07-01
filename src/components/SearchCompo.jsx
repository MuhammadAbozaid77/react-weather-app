import { useState } from "react";
import SearchCard from "./SearchCard";

//
export default function SearchCompo() {
  const [showSearchCards, setshowSearchCards] = useState(true);
  const handelSubmitWeather = (e) => {
    e.preventDefault();
    // getWeather(searchWord);
  };
  return (
    <>
      <div className="relative">
        <form onSubmit={handelSubmitWeather}>
          <div className="p-2">
            <input
              type="search"
              name=""
              id=""
              className="w-[600px] p-2 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-stone-500 text-stone-600 shadow"
            />
          </div>
        </form>
        {showSearchCards && (
          <>
            <div className="absolute border bg-white border-stone-300 rounded-[15px] shadow-md h-auto w-[100%] py-[20px] px-5">
              <SearchCard />
            </div>
          </>
        )}
      </div>
    </>
  );
}
