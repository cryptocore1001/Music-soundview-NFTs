// import React from "react";
// import { Line } from "react-chartjs-2";

// export const LineChart = () => {
//   const labels = ["January", "February", "March", "April", "May", "June"];

//   const data = {
//     labels: labels,
//     datasets: [
//       {
//         label: "My First dataset",
//         backgroundColor: "hsl(252, 82.9%, 67.8%)",
//         borderColor: "hsl(252, 82.9%, 67.8%)",
//         data: [0, 10, 5, 2, 20, 30, 45],
//       },
//     ],
//   };

//   //   const configLineChart = {
//   //     type: "line",
//   //     data,
//   //     options: {},
//   //   };

//   //   let chartLine = new Chart(
//   //     document.getElementById("chartLine"),
//   //     configLineChart
//   //   );

//   return (
//     <div className="chart-container">
//       <h2 style={{ textAlign: "center" }}>Line Chart</h2>
//       <Line
//         data={data}
//         options={{
//           plugins: {
//             title: {
//               display: true,
//               text: "Users Gained between 2016-2020",
//             },
//             legend: {
//               display: false,
//             },
//           },
//         }}
//       />
//     </div>
//   );
// };
