/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

import { salesChartData } from "../../shared/constants";

const MainGraph = () => {
  const [salesData, setSalesData] = useState(salesChartData);

  useEffect(() => {
    setSalesData(salesChartData);
  }, []);

  return (
    <div className="lg:w-[1000px] w-full">
      <Line
        data={{
          labels: salesData?.map((data) => data.date),

          datasets: [
            {
              data: salesData?.map((data) => data.price),
              backgroundColor: "#e91e63",

              borderColor: "#e91e63",
              borderWidth: 2,
              pointRadius: 0,
              fill: false,
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                color: "#000",
                font: {
                  size: 12,
                },
              },
            },
            x: {
              ticks: {
                color: "#000",
                font: {
                  size: 12,
                },
              },
            },
          },
        }}
      />
    </div>
  );
};

export default MainGraph;
