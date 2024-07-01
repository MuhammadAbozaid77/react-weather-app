import { FaSun } from "react-icons/fa6";

export default function DayCard() {
  return (
    <>
      <div className="h-[100%] w-[140px] border bg-[#f8f8f8] rounded-[15px] p-2 flex justify-between items-center flex-col border-stone-300/80 ">
        <h1 className="text-center font-semibold capitalize text-[18px]">
          sun
        </h1>
        <span className=" capitalize text-yellow-500 ">
          <FaSun size={40} />
        </span>
        <h1 className="text-center font-semibold capitalize">
          <span className="text-[20px]"> 15 /</span>
          <span className="text-[#989898] text-[20px]"> 3 </span>
        </h1>
      </div>
    </>
  );
}
