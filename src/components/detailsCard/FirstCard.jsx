import { weatherContext } from "../../context/WeatherContext";
import { useContext } from "react";
import windImage from "./../../assets/pics/wind.gif";
import cloudImage from "./../../assets/pics/cloud.gif";
import uvImage from "./../../assets/pics/uv.gif";

export default function FirstCard() {
  const { dayDetails } = useContext(weatherContext);

  return (
    <>
      <div className="border bg-white rounded-[10px] border-stone-300/80 py-5 px-2 flex justify-between flex-col">
        <div className="flex justify-start items-center  w-[100%]">
          <span>
            <img
              className="w-[40px] mx-5 border rounded-[5px] shadow"
              src={windImage}
              alt=""
            />
          </span>

          <span className="text-[16px]">
            Wind Speed :
            <span className="ms-5 me-2">{dayDetails?.wind_speed_10m_max}</span>
            km/h
          </span>
        </div>
        <div className="flex justify-start items-center w-[100%]">
          <span>
            <img
              className="w-[40px] mx-5 border rounded-[5px] shadow"
              src={cloudImage}
              alt=""
            />
          </span>

          <span className="text-[16px]">
            Wind Guest :
            <span className="ms-5 me-2">{dayDetails?.wind_gusts_10m_max}</span>
            km/h
          </span>
        </div>
        <div className="flex justify-start items-center w-[100%]">
          <span>
            <img
              className="w-[40px] mx-5 border rounded-[5px] shadow"
              src={uvImage}
              alt=""
            />
          </span>

          <span className="text-[16px]">
            Max Uv :<span className="ms-5">{dayDetails?.uv_index_max}</span>
          </span>
        </div>
      </div>
    </>
  );
}
