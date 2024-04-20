import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { data as methods } from "../chemicals/0.jsx";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

export const RadarChart = ({ data }) => {
  const options = {};

  return <Radar options={options} data={methods} />;
};
