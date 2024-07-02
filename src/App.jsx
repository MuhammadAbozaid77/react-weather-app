import DayDetails from "./components/DayDetails";
import DayWeatherDetails from "./components/DayWeatherDetails";
import SearchCompo from "./components/SearchCompo";
import WeekDays from "./components/WeekDays";

export default function App() {
  return (
    <>
      <div className="flex justify-center items-center p-[50px]  h-[100vh]">
        <div className="h-[80vh] w-[100%] flex justify-between items-center rounded-[10px]  shadow-2xl border-[5px] overflow-hidden border-black">
          <div className="lg:w-[500px]  w-[400px] h-[100%] bg-white p-5">
            <DayWeatherDetails />
          </div>
          <div className="w-[100%] flex flex-col justify-between h-[100%] bg-blue-500/30">
            <header className="border-b h-[100px] w-[100%] flex justify-center items-center">
              <SearchCompo />
            </header>
            <main className=" h-[100%]  w-[100%] p-5">
              <WeekDays />
              <DayDetails />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
