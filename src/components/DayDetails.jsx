import FirstCard from "./detailsCard/FirstCard";
import SecondCard from "./detailsCard/SecondCard";
import ThirdCard from "./detailsCard/ThirdCard";

//
export default function DayDetails() {
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
