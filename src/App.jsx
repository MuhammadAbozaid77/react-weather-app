import { useContext, useEffect } from "react";
import DayDetails from "./components/DayDetails";
import DayWeatherDetails from "./components/DayWeatherDetails";
import SearchCompo from "./components/SearchCompo";
import WeekDays from "./components/WeekDays";
import { weatherContext } from "./context/WeatherContext";

export default function App() {
  const { cityLocationData, getWeather, getWeatherDetails } =
    useContext(weatherContext);

  useEffect(() => {
    getWeather("cairo");
  }, []);

  useEffect(() => {
    getWeatherDetails(
      cityLocationData?.longitude,
      cityLocationData?.latitude,
      cityLocationData?.timezone
    );
  }, [cityLocationData]);

  return (
    <>
      <div className="flex justify-center items-center p-[50px]  h-[100vh]">
        <div className="h-[80vh] w-[100%] flex justify-between items-center rounded-[10px]  shadow-2xl border-[3px] border-blue-300 overflow-hidden ">
          <div className="lg:w-[500px]  w-[400px] h-[100%] bg-white p-5 border-r-[3px] border-blue-300">
            <DayWeatherDetails />
          </div>
          <div className="w-[100%] flex flex-col justify-between h-[100%] bg-blue-500/30">
            <header className=" h-[100px] w-[100%] flex justify-center items-center">
              <SearchCompo />
            </header>
            <main className=" h-[100%]  w-[100%] p-5 flex justify-around items-center flex-col">
              <WeekDays />
              <DayDetails />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
