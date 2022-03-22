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
import civilizationDevelopments from "../../data/civilizationDevelopments.json";

ChartJS.register(CategoryScale, LineElement, PointElement, LinearScale, Title);

const options = (theme) => {
  return {
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
      },
      title: {
        color: theme.palette.primary.main,
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
        borderWidth: 5,
      },
      line: {
        tension: 0.5,
        borderWidth: 5,
      },
    },
  };
};

const labels = () => {
  return civilizationDevelopments.map((item) => item.name);
};

const datesData = () => {
  return civilizationDevelopments.map((item) => item.dateBP);
};

const data = {
  labels: labels(),
  datasets: datesData(),
};

export const EventsTimeline = (props) => {
  const { theme } = props;
  return (
    <Box sx={{ width: { md: "100%" } }}>
      <Line height={400} width={400} data={data} options={options(theme)} />
    </Box>
  );
};
