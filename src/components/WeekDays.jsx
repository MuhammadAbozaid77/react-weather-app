import DayCard from "./DayCard";

export default function WeekDays() {
  return (
    <>
      <div className="h-[200px] p-5  flex justify-center items-center gap-3">
        <DayCard />
        <DayCard />
        <DayCard />
        <DayCard />
        <DayCard />
        <DayCard />
        <DayCard />
      </div>
    </>
  );
}
