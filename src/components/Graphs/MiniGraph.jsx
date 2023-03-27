/* eslint-disable no-unused-vars */
import { useEffect } from "react";

import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

import { salesChartData } from "../../shared/constants";

const MiniGraph = ({ salesData }) => {
  return (
    <>
      <div className="w-[200px]">
        <Line
          data={{
            labels: salesData?.map((data) => data.date),

            datasets: [
              {
                data: salesData?.map((data) => data.price),
                backgroundColor: "#e91e63",
                pointRadius: 0,
                borderColor: "#e91e63",
                borderWidth: 2,
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
                display: false,
                beginAtZero: true,
                ticks: {
                  color: "#000",
                  font: {
                    size: 12,
                  },
                },
              },
              x: {
                display: false,
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
    </>
  );
};

export default MiniGraph;
