const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
const day = String(today.getDate()).padStart(2, "0");

const formattedDate = `${year}-${month}-${day}`;
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const dayName = daysOfWeek[today.getDay()];
// console.log(dayName);
export function getTodayDate() {
  return { formattedDate, dayName };
}
