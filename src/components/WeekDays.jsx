import { useContext } from "react";
import { weatherContext } from "../context/WeatherContext";
import DayCard from "./DayCard";

export default function WeekDays() {
  const { daysWeather } = useContext(weatherContext);
  console.log(daysWeather);

  return (
    <>
      <div className="h-[220px] p-5  flex justify-center items-center gap-3">
        {daysWeather.map((el, index) => (
          <DayCard key={index} item={el} id={index} />
        ))}
      </div>
    </>
  );
}
