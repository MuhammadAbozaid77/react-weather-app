import { useContext, useEffect } from "react";
import { weatherContext } from "../context/WeatherContext";
import FirstCard from "./detailsCard/FirstCard";
import SecondCard from "./detailsCard/SecondCard";
import ThirdCard from "./detailsCard/ThirdCard";
import { getTodayDate } from "../utils/getDateToday";

//
export default function DayDetails() {
  // const { handelDayDetails, daysWeather } = useContext(weatherContext);

  // const todayDate = getTodayDate();

  // useEffect(() => {
  //   const id = daysWeather.filter((el) => el.time === todayDate);
  //   console.log(id);
  //   // handelDayDetails(id[0]);
  // }, [daysWeather]);

  return (
    <>
      <div className="grid grid-cols-3 h-[250px]  gap-5 p-5">
        <FirstCard />
        <SecondCard />
        <ThirdCard />
      </div>
    </>
  );
}
