import { weatherContext } from "../../context/WeatherContext";
import { useContext } from "react";
import precipitationImage from "./../../assets/pics/precipitation.gif";
import rainImage from "./../../assets/pics/rain.gif";
import snowyImage from "./../../assets/pics/snowy.gif";

export default function SecondCard() {
  const { dayDetails } = useContext(weatherContext);
  return (
    <>
      <div className="border bg-white rounded-[10px] border-stone-300/80 p-5 flex justify-between flex-col">
        <div className="flex justify-start items-center  w-[100%]">
          <span>
            <img
              className="w-[50px] mx-5 border rounded-[5px] shadow"
              src={precipitationImage}
              alt=""
            />
          </span>

          <span className="text-[20px]">
            Precipitation Probability :
            <span className="ms-5 me-2">
              {dayDetails?.precipitation_probability_max}
            </span>
            %
          </span>
        </div>

        <div className="flex justify-start items-center w-[100%]">
          <span>
            <img
              className="w-[50px] mx-5 border rounded-[5px] shadow"
              src={rainImage}
              alt=""
            />
          </span>

          <span className="text-[20px]">
            Rain Sum :<span className="ms-5 me-2">{dayDetails?.rain_sum}</span>
            MM
          </span>
        </div>
        <div className="flex justify-start items-center w-[100%]">
          <span>
            <img
              className="w-[50px] mx-5 border rounded-[5px] shadow"
              src={snowyImage}
              alt=""
            />
          </span>

          <span className="text-[20px]">
            Snowfall Sum:
            <span className="ms-5 me-2">{dayDetails?.snowfall_sum}</span>
            CM
          </span>
        </div>
      </div>
    </>
  );
}
