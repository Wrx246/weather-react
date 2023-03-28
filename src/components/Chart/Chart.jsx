import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import moment from "moment";
import "./Chart.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      ticks: {
        color: "#FFF",
      },
    },
    x: {
      ticks: {
        color: "#FFF",
      },
    },
  },
};

const Chart = ({ weekChart }) => {
  const labels = weekChart
  .map((c) => moment(c.dt_txt).format("ddd") + ' ' + c.dt_txt.slice(11, 16));

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Day forecast",
        fontColor: "#FFF",
        data: weekChart.map((c) => Math.round(c.main.temp)),
        borderColor: "rgb(201,209,217)",
        borderWidth: 1,
        backgroundColor: "rgba(201,209,217, 0.2)",
      },
    ],
  };

  return (
    <section className="chart">
      <h3>Week forecast</h3>
      <hr/>
      <Line options={options} data={data} />
    </section>
  );
};

export default Chart;
