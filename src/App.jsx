import { useState } from "react";
import SearchCity from "./components/SearchCity";

export default function App() {
  const [count, setCount] = useState(0);
  const dateOfDay = new Date();
  console.log(dateOfDay.getDate());

  return (
    <div className="m-[50px] p-[50px] border">
      <div className="mb-5">
        <SearchCity />
      </div>
      <div className="flex">
        <button
          onClick={() => setCount(count - 1)}
          className="border p-1 mx-2 w-[50px] h-[50px] bg-stone-600 text-[20px] text-white rounded-lg"
        >
          -
        </button>
        <div className="p-1 mx-2 w-[50px] h-[50px] flex justify-center items-center text-[20px]">
          {count}
        </div>
        <button
          onClick={() => setCount(count + 1)}
          className="border p-1 mx-2 w-[50px] h-[50px] bg-blue-600 text-[20px] text-white rounded-lg"
        >
          +
        </button>
      </div>
    </div>
  );
}
