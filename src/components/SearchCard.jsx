//
import { useContext } from "react";
import pic from "../assets/pics/weather.png";
import { weatherContext } from "../context/WeatherContext";
import SpinnerLoading from "./ui/SpinnerLoading";

export default function SearchCard({ data }) {
  const { getWeatherDetails, isLoadingWeather } = useContext(weatherContext);

  const handelCityWeatherDetails = () => {
    getWeatherDetails(data?.longitude, data?.latitude, data?.timezone);
  };

  if (isLoadingWeather) {
    return (
      <>
        <div className="flex justify-center items-center my-[50px] flex-col">
          <div>
            <SpinnerLoading />
          </div>
          <h1 className="font-semibold my-[10px]"> Loading... </h1>
        </div>
      </>
    );
  }
  return (
    <>
      <div
        className="border border-stone-300 h-[100px] flex justify-between items-center px-5 cursor-pointer rounded-[10px] bg-blue-500 shadow m-[10px]"
        onClick={handelCityWeatherDetails}
      >
        <span className="text-yellow-500">
          <img src={pic} className="w-[70px]" alt="" />
        </span>
        <span className="text-white">
          <h1 className="text-[30px] font-bold">{data.name}</h1>
          <h1 className="text-[18px] font-bold">{data.country}</h1>
        </span>
        <span className="font-semibold text-yellow-300">
          TimeZone
          <h1 className="text-[20px] font-bold text-white">{data.timezone}</h1>
        </span>
      </div>
    </>
  );
}
