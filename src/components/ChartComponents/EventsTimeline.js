import React from "react";
import { Box } from "@mui/system";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LineElement,
  PointElement,
  LinearScale,
  Title,
} from "chart.js";
// import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(CategoryScale, LineElement, PointElement, LinearScale, Title);

const options = {
  plugins: {
    tooltip: {
      enabled: false,
      position: "nearest",
    },
    datalabels: {
      color: "black",
      padding: { top: 10, left: 10, right: 10, bottom: 10 },
      font: {
        size: 15,
        weight: "bold",
      },
      align: "top",
      offset: 20,
      // formatter: function (value, context) {
      //   return context.chart.data.datasets[context.dataIndex].label;
      // },
    },
    title: {
      // color: "#bc5829",
      color: "#646464",
      display: true,
      align: "left",
      text: "Timeline of Important Events",
      font: {
        size: 40,
        weight: "bold",
      },
      padding: { top: 0, left: 0, right: 0, bottom: 60 },
    },

    legend: {
      display: false,
      labelsArr: {
        pointStyle: "star",
        usePointStyle: true,
      },
    },
  },
  layout: {
    padding: { top: 20, left: 100, right: 100, bottom: 0 },
  },

  scales: {
    y: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,

        font: {
          size: 15,
          weight: "bold",
        },
      },
      suggestedMax: 2.5,
      beginAtZero: true,
    },
    x: {
      grid: {
        display: true,
        lineWidth: 2,
        color: "rgb(166 166 166 / 25%)",
      },
      ticks: {
        font: {
          size: 25,
          weight: "bold",
        },
        color: "#646464",

        padding: 10,
      },
      beginAtZero: true,
      title: {
        display: false,
        text: "Timeline in Years",
        font: {
          size: 30,
          weight: "bold",
        },
        padding: { top: 20, left: 0, right: 0, bottom: 0 },
      },
    },
  },
  maintainAspectRatio: false,
  elements: {
    point: {
      radius: 10,
      // pointStyle: imgReturn,
      borderWidth: 5,
    },
    line: {
      tension: 0.5,
      borderWidth: 5,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

export const EventsTimeline = () => {
  return (
    <Box sx={{ width: { md: "100%" } }}>
      <Line height={400} width={400} data={data} options={options} />
    </Box>
  );
};
