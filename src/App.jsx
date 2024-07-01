import DayDetails from "./components/DayDetails";
import DayWeatherDetails from "./components/DayWeatherDetails";
import SearchCompo from "./components/SearchCompo";
import WeekDays from "./components/WeekDays";

export default function App() {
  return (
    <>
      <div className="flex justify-center items-center p-[50px] bg-[#989898] h-[100vh]">
        <div className="h-[80vh] w-[100%] flex justify-between items-center rounded-[10px] border-gray-300 shadow-lg overflow-hidden">
          <div className="md:w-[500px] border h-[100%] bg-[#f8f8f8] p-5">
            <DayWeatherDetails />
          </div>
          <div className="w-[100%] flex flex-col justify-between h-[100%] bg-[#ededed]">
            <header className="border h-[100px] w-[100%] flex justify-center items-center">
              <SearchCompo />
            </header>
            <main className="border h-[100%]  w-[100%] p-5">
              <WeekDays />
              <DayDetails />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
