import { useContext } from "react";
import { weatherContext } from "../context/WeatherContext";
import windImage from "./../assets/pics/wind.gif";
import cloudImage from "./../assets/pics/cloud.gif";
import uvImage from "./../assets/pics/uv.gif";
import precipitationImage from "./../assets/pics/precipitation.gif";
import rainImage from "./../assets/pics/rain.gif";
import snowyImage from "./../assets/pics/snowy.gif";
import sunriseImage from "./../assets/pics/sunrise.gif";
import sunsetImage from "./../assets/pics/sunset.gif";
import timeImage from "./../assets/pics/time.gif";
//
export default function DayDetails() {
  const { dayDetails } = useContext(weatherContext);
  // console.log(dayDetails);

  return (
    <>
      <div className="min-h-[250px]  gap-5 p-5 flex flex-wrap justify-center w-auto border-t-[2px] rounded  shadow-2xl">
        <div className="flex justify-start items-center w-[300px]  border-[1px] border-gray-500/50 bg-blue-500 text-white rounded-[5px] ">
          <span>
            <img className="w-[40px] mx-5" src={windImage} alt="" />
          </span>

          <span className="text-[16px]">
            Wind Speed :
            <span className="ms-5 me-2 font-semibold">
              {dayDetails?.wind_speed_10m_max}
            </span>
            km/h
          </span>
        </div>
        <div className="flex justify-start items-center w-[300px]  border-[1px] border-gray-500/50 bg-blue-500 text-white rounded-[5px] ">
          <span>
            <img className="w-[40px] mx-5" src={cloudImage} alt="" />
          </span>

          <span className="text-[16px]">
            Wind Guest :
            <span className="ms-5 me-2 font-semibold">
              {dayDetails?.wind_gusts_10m_max}
            </span>
            km/h
          </span>
        </div>
        <div className="flex justify-start items-center w-[300px]  border-[1px] border-gray-500/50 bg-blue-500 text-white rounded-[5px]">
          <span>
            <img className="w-[40px] mx-5" src={uvImage} alt="" />
          </span>

          <span className="text-[16px]">
            Max Uv :
            <span className="ms-5 me-2 font-semibold">
              {dayDetails?.uv_index_max}
            </span>
          </span>
        </div>
        <div className="flex justify-start items-center w-[300px]  border-[1px] border-gray-500/50 bg-blue-500 text-white rounded-[5px] ">
          <span>
            <img className="w-[40px] mx-5" src={precipitationImage} alt="" />
          </span>

          <span className="text-[16px]">
            Precipitation :
            <span className="ms-5 me-2 font-semibold">
              {dayDetails?.precipitation_probability_max}
            </span>
            %
          </span>
        </div>
        <div className="flex justify-start items-center w-[300px]  border-[1px] border-gray-500/50 bg-blue-500 text-white rounded-[5px]">
          <span>
            <img className="w-[40px] mx-5" src={rainImage} alt="" />
          </span>

          <span className="text-[16px]">
            Rain Sum :
            <span className="ms-5 me-2 font-semibold">
              {dayDetails?.rain_sum}
            </span>
            MM
          </span>
        </div>
        <div className="flex justify-start items-center w-[300px]  border-[1px] border-gray-500/50 bg-blue-500 text-white rounded-[5px]">
          <span>
            <img className="w-[40px] mx-5" src={snowyImage} alt="" />
          </span>

          <span className="text-[16px]">
            Snowfall Sum:
            <span className="ms-5 me-2 font-semibold">
              {dayDetails?.snowfall_sum}
            </span>
            CM
          </span>
        </div>
        <div className="flex justify-start items-center w-[300px]  border-[1px] border-gray-500/50 bg-orange-500  rounded-[5px] text-white">
          <span>
            <img className="w-[40px] mx-5 rounded" src={sunriseImage} alt="" />
          </span>

          <span className="text-[16px]">
            Sunrise:
            <span className="ms-5 me-2 font-semibold">
              {dayDetails?.sunrise?.substring(11, 16)}
            </span>
            AM
          </span>
        </div>
        <div className="flex justify-start items-center w-[300px]  border-[1px] border-gray-500/50 bg-slate-800 rounded-[5px] text-white">
          <span>
            <img className="w-[40px] mx-5 rounded" src={sunsetImage} alt="" />
          </span>
          <span className="text-[16px]">
            Sunset:
            <span className="ms-5 me-2 font-semibold">
              {dayDetails?.sunset?.substring(11, 16)}
            </span>
            PM
          </span>
        </div>
        <div className="flex justify-start items-center w-[300px]  border-[1px] border-gray-500/50  bg-blue-800 text-white rounded-[5px]">
          <span>
            <img className="w-[40px] mx-5 rounded" src={timeImage} alt="" />
          </span>

          <span className="text-[16px]">
            History:
            <span className="ms-5 me-2 font-semibold">{dayDetails?.time}</span>
          </span>
        </div>
      </div>
    </>
  );
}
