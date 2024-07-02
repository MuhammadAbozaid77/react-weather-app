import { weatherContext } from "../context/WeatherContext";
import { useContext } from "react";
import image1 from "../assets/pics/logo.png";
import clearsky from "../assets/pics/other/weather-app.png";
import weathergif from "../assets/pics/weathergif.gif";
import SpinnerLoading from "./ui/SpinnerLoading";

export default function DayWeatherDetails() {
  const { dayDetails, isLoading, cityLocationData } =
    useContext(weatherContext);

  if (isLoading) {
    return (
      <>
        <div className="flex justify-center items-center my-[50px] flex-col w-[100%]">
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
      <div>
        <div className="flex justify-center items-center  mt-10">
          <span>
            <img className="w-[180px] mx-5" src={weathergif} alt="" />
          </span>
        </div>
        <div className="flex justify-center items-center mt-[20px]">
          <span className="text-[20px] font-semibold">City : </span>
          <span className="text-[25px] text-red-600 mx-5">
            {cityLocationData?.name}
          </span>
        </div>
        <div className="flex justify-center items-center">
          <span className="text-[20px] font-semibold">Country : </span>
          <span className="text-[25px] text-red-600 mx-5">
            {cityLocationData?.country}
          </span>
        </div>
        <div className="flex justify-between items-center px-5 mt-[20px]">
          <span className="text-[20px] font-semibold">
            <img
              className="w-[70px] border border-slate-400 shadow-lg rounded-[10px] bg-red-400/60"
              src={clearsky}
              alt=""
            />
          </span>
          <div>
            <span className="text-[40px] text-red-600">
              {dayDetails?.temperature_2m_max}
            </span>
            <span className="text-[40px] text-stone-600">°C</span>
          </div>
        </div>

        <div className="flex justify-between items-center px-5 mt-[10px]">
          <span className="text-[20px] font-semibold">
            <img
              className="w-[70px] border border-slate-400 shadow-lg rounded-[10px] bg-slate-500/60"
              src={clearsky}
              alt=""
            />
          </span>
          <div>
            <span className="text-[40px] text-gray-600">
              {dayDetails?.temperature_2m_min}
            </span>
            <span className="text-[40px] text-stone-600">°C</span>
          </div>
        </div>
      </div>
    </>
  );
}
