import React, { useState } from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line, Bar, Doughnut } from "react-chartjs-2";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const Graphs = () => {
  const [graphType, setGraphType] = useState(0);

  return (
    <div className="w-[100vw] min-h-[100vh] h-[auto] p-10 bg-gray-300 flex flex-col items-center gap-5">
      <div className="ph-2 bg-white flex flex-row items-center justify-center cursor-pointer">
        <h3 onClick={() => setGraphType(1)}>Line</h3>
        <hr className=" w-[15px] h-[1.2px] bg-black rotate-90" />
        <h3 onClick={() => setGraphType(2)}>Bar</h3>
        <hr className=" w-[15px] h-[1.2px] bg-black rotate-90" />
        <h3 onClick={() => setGraphType(3)}>Doughnut</h3>
      </div>
      <div className="w-[90%] h-80 bg-white rounded-md p-5">
        chart
        {graphType == 2 ? (
          <Bar
            data={{
              labels: ["A", "B", "C"],
              datasets: [
                {
                  label: "Revenue",
                  data: [200, 300, 500],
                },
              ],
            }}
          />
        ) : graphType == 1 ? (
          <Line
            data={{
              labels: ["A", "B", "C"],
              datasets: [
                {
                  label: "Revenue",
                  data: [200, 300, 500],
                },
              ],
            }}
          />
        ) : graphType == 3 ? (
          <Doughnut
            data={{
              labels: ["A", "B", "C"],
              datasets: [
                {
                  label: "Revenue",
                  data: [200, 300, 500],
                },
              ],
            }}
          />
        ) : (
          <h3> No Graph selected</h3>
        )}
      </div>
        <div className=""></div>
      {/* <div className="w-[50%] h-1/2 bg-white rounded-md"></div> */}
    </div>
  );
};

export default Graphs;
