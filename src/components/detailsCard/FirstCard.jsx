import { weatherContext } from "../../context/WeatherContext";
import { useContext } from "react";
import windImage from "./../../assets/pics/wind.png";
import cloudImage from "./../../assets/pics/cloud.png";
import uvImage from "./../../assets/pics/uv.png";

export default function FirstCard() {
  const { dayDetails } = useContext(weatherContext);

  return (
    <>
      <div className="border bg-white rounded-[10px] border-stone-300/80 p-5 flex justify-between flex-col">
        <div className="flex justify-start items-center  w-[100%]">
          <span>
            <img className="w-[50px] mx-5" src={windImage} alt="" />
          </span>

          <span className="text-[20px]">
            Wind Speed :
            <span className="ms-5 me-2">{dayDetails?.wind_speed_10m_max}</span>
            km/h
          </span>
        </div>
        <div className="flex justify-start items-center w-[100%]">
          <span>
            <img className="w-[50px] mx-5" src={cloudImage} alt="" />
          </span>
          <span className="text-[20px]">
            Wind Guest :
            <span className="ms-5 me-2">{dayDetails?.wind_gusts_10m_max}</span>
            km/h
          </span>
        </div>
        <div className="flex justify-start items-center w-[100%]">
          <span>
            <img className="w-[50px] mx-5" src={uvImage} alt="" />
          </span>

          <span className="text-[20px]">
            Max Uv :<span className="ms-5">{dayDetails?.uv_index_max}</span>
          </span>
        </div>
      </div>
    </>
  );
}
