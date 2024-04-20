import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

export const RadarChart = ({ data }) => {
  return (
    <div className="App">
      <Radar data={data} />
    </div>
  );
};
