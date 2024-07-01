//
import { TbSunWind } from "react-icons/tb";

export default function SecondCard() {
  return (
    <>
      <div className="border bg-[#f8f8f8] rounded-[10px] border-stone-300/80 p-5">
        <div className="flex justify-between items-center">
          <span>
            <TbSunWind size={50} />
          </span>
          <span className="text-[20px] font-semibold">Wind Speed : 52/10</span>
        </div>
        <div className="flex justify-between items-center">
          <span>
            <TbSunWind size={50} />
          </span>
          <span className="text-[20px] font-semibold">Wind Guest : 52/10</span>
        </div>
        <div className="flex justify-between items-center">
          <span>
            <TbSunWind size={50} />
          </span>
          <span className="text-[20px] font-semibold"> Max Uv : 52/10 </span>
        </div>
      </div>
    </>
  );
}
