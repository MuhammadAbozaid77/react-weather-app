import { useContext } from "react";
import { FaSun } from "react-icons/fa6";
import { weatherContext } from "../context/WeatherContext";

export default function DayCard({ item, id }) {
  const { handelDayDetails } = useContext(weatherContext);

  return (
    <>
      <div
        onClick={() => handelDayDetails(id)}
        className="h-[100%] w-[110px] border bg-white rounded-[15px] p-2 flex justify-between items-center flex-col border-stone-300/80 cursor-pointer"
      >
        <h1 className="text-center font-semibold capitalize text-[18px]">
          sun
        </h1>
        <span
          className={`capitalize  ${
            item?.temperature_2m_max < 10
              ? "text-blue-500"
              : item?.temperature_2m_max < 20
              ? "text-yellow-700"
              : item?.temperature_2m_max < 30
              ? "text-yellow-500"
              : item?.temperature_2m_max < 40
              ? "text-red-700"
              : "text-red-500"
          }`}
        >
          <FaSun size={40} />
        </span>
        <div className="font-semibold capitalize flex justify-center items-center flex-col">
          <span className="font-bold"> {item?.temperature_2m_max} °C</span>
          {/* <span className="text-red-700 font-bold text-[20px]"> / </span> */}
          <span className="text-[#7c7c7c] font-bold">
            {item?.temperature_2m_min} °C
          </span>
        </div>
      </div>
    </>
  );
}
