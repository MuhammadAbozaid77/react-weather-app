import { useContext } from "react";
import { FaSun } from "react-icons/fa6";
import { weatherContext } from "../context/WeatherContext";
import snowyImage from "./../assets/pics/snowy.gif";
import cloudImage from "./../assets/pics/cloud.gif";
import partlySunny from "./../assets/pics/partlySunny.gif";
import veryHot from "./../assets/pics/veryHot.gif";
import goodWeather from "../assets/pics/weathergif.gif";
export default function DayCard({ item, id }) {
  const { handelDayDetails } = useContext(weatherContext);
  // console.log(item);
  return (
    <>
      <div
        onClick={() => handelDayDetails(id)}
        className="h-[100%] w-[120px] border bg-white rounded-[15px] p-2 flex justify-between items-center flex-col border-stone-300/80 cursor-pointer"
      >
        <h1 className="text-center capitalize text-[14px] text-slate-600 ">
          {item?.dayName}
        </h1>
        <h1 className="text-center capitalize text-[14px] text-slate-600 ">
          {item?.time}
        </h1>
        <span className={`capitalize`}>
          <img
            className="w-[60px]"
            src={`${
              item?.temperature_2m_max >= 36
                ? veryHot
                : item?.temperature_2m_max >= 25
                ? goodWeather
                : item?.temperature_2m_max >= 16
                ? partlySunny
                : item?.temperature_2m_max >= 1
                ? cloudImage
                : snowyImage
            }`}
            alt=""
          />
        </span>

        <div className="font-semibold capitalize flex justify-center items-center flex-col">
          <span className="font-bold"> {item?.temperature_2m_max} °C</span>
          <span className="text-[#7c7c7c] font-bold">
            {item?.temperature_2m_min} °C
          </span>
        </div>
      </div>
    </>
  );
}
