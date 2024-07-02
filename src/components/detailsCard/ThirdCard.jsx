import { weatherContext } from "../../context/WeatherContext";
import { useContext } from "react";
import sunriseImage from "./../../assets/pics/sunrise.gif";
import sunsetImage from "./../../assets/pics/sunset.gif";
import timeImage from "./../../assets/pics/time.gif";

export default function ThirdCard() {
  const { dayDetails } = useContext(weatherContext);

  return (
    <>
      <div className="border bg-white rounded-[10px] border-stone-300/80 p-5 flex justify-between flex-col">
        <div className="flex justify-start items-center  w-[100%]">
          <span>
            <img
              className="w-[50px] mx-5 border rounded-[5px] shadow"
              src={sunriseImage}
              alt=""
            />
          </span>

          <span className="text-[20px]">
            Sunrise:
            <span className="ms-5 me-2">
              {dayDetails?.sunrise?.substring(11, 16)}
            </span>
            AM
          </span>
        </div>
        <div className="flex justify-start items-center w-[100%]">
          <span>
            <img
              className="w-[50px] mx-5 border rounded-[5px] shadow"
              src={sunsetImage}
              alt=""
            />
          </span>
          <span className="text-[20px]">
            Sunset:
            <span className="ms-5 me-2">
              {dayDetails?.sunset?.substring(11, 16)}
            </span>
            PM
          </span>
        </div>
        <div className="flex justify-start items-center w-[100%]">
          <span>
            <img
              className="w-[50px] mx-5 border rounded-[5px] shadow"
              src={timeImage}
              alt=""
            />
          </span>

          <span className="text-[20px]">
            History:
            <span className="ms-5 me-2">{dayDetails?.time}</span>
          </span>
        </div>
      </div>
    </>
  );
}
