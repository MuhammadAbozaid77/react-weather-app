//
import { FaCloudSun } from "react-icons/fa6";

export default function SearchCard() {
  return (
    <>
      <div className="border h-[100px] flex justify-between items-center px-5">
        <span className="text-yellow-500">
          <FaCloudSun size={50} />
        </span>
        <span className="">
          <h1 className="text-[20px] font-bold">London</h1>
          <h1 className="text-[20px] font-bold">England</h1>
        </span>
        <span className="">
          <h1 className="text-[20px] font-bold">Europe/London</h1>
        </span>
      </div>
    </>
  );
}
