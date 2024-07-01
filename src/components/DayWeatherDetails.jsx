import { FaCloudSun } from "react-icons/fa6";

export default function DayWeatherDetails() {
  return (
    <>
      <div>
        <div className="flex justify-center items-center text-yellow-500">
          <FaCloudSun size={100} />
        </div>
        <h1 className="my-5 text-[50px]"> 12 °C</h1>
        <h1 className="my-5 text-[20px] font-bold"> Sunday : time</h1>
      </div>
    </>
  );
}
