//  https://geocoding-api.open-meteo.com/v1/search?name=${location}

// `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=
// ${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
// -----------------------------------------------------------------------------------------------------
//   https://geocoding-api.open-meteo.com/v1/search?name=

//         `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=
// ${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`

// -----------------------------------------------------------------------------------------------------
//  https://geocoding-api.open-meteo.com/v1/search?name=london ==== Details City
// https://api.open-meteo.com/v1/forecast?latitude=51.50853&longitude=-0.12574&timezone=Europe/London&daily=weathercode,temperature_2m_max,temperature_2m_min      === Params

// const data = {
//   precipitation_probability_max: [8, 35, 39, 13, 29, 35, 35],
//   precipitation_sum: [0, 0.2, 1.4, 0, 1.9, 4.1, 0.5],
//   rain_sum: [0, 0.2, 1.4, 0, 1.5, 2.4, 0.5],
//   showers_sum: [0, 0, 0, 0, 0.4, 1.7, 0],
//   snowfall_sum: [0, 0, 0, 0, 0, 0, 0],
//   temperature_2m_max: [20.1, 21.4, 17, 20.1, 18.9, 20.2, 18.7],
//   temperature_2m_min: [13.5, 13.4, 12.6, 13.4, 12.9, 13.2, 12.5],
//   uv_index_max: [6.3, 3.9, 5.2, 7, 4, 2.95, 6],
//   wind_gusts_10m_max: [34.6, 33.1, 45.4, 40.7, 52.9, 49, 39.6],
//   wind_speed_10m_max: [14.7, 13.9, 19.4, 16.8, 20.6, 21.3, 15.9],

//   time: [
//     "2024-07-01",
//     "2024-07-02",
//     "2024-07-03",
//     "2024-07-04",
//     "2024-07-05",
//     "2024-07-06",
//     "2024-07-07",
//   ],
// };

// const transformData = (data) => {
//   const result = [];

//   for (let i = 0; i < data?.time?.length; i++) {
//     const obj = {
//       time: data?.time[i],
//       precipitation_probability_max: data?.precipitation_probability_max[i],
//       precipitation_sum: data?.precipitation_sum[i],
//       rain_sum: data?.rain_sum[i],
//       showers_sum: data?.showers_sum[i],
//       snowfall_sum: data?.snowfall_sum[i],
//       temperature_2m_max: data?.temperature_2m_max[i],
//       temperature_2m_min: data?.temperature_2m_min[i],
//       uv_index_max: data?.uv_index_max[i],
//       wind_gusts_10m_max: data?.wind_gusts_10m_max[i],
//       wind_speed_10m_max: data?.wind_speed_10m_max[i],
//       sunrise: data?.sunrise[i],
//       sunset: data?.sunset[i],
//     };

//     result.push(obj);
//   }

//   return result;
// };

// const everyObjectForData = transformData(data);
// console.log(everyObjectForData);
