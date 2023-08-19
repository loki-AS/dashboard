import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip
} from 'chart.js';
import { burnChartData } from "../../../constants/data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip
)

export const BurnValue = () => {

  const data = {
    labels: burnChartData.map((item) => item.month),
    datasets: [{
      label: 'Amount (in thousands of dollars)',
      data: burnChartData.map((item) => item.amount),
      backgroundColor: '#01d1fe',
      borderColor: '#03d0fe',
      pointBorderColor: 'aqua',
      fill: true,
      tension: 0,
    }]
  }

  const options = {
    plugins: {
      Legend: {
        position: 'bottom'
      }
    }
  }

  return (
    <div>
      <h1 className="text-white font-semibold">Burn</h1>
      <div className="text-white py-2">
        <p className="font-semibold">
          ${" "}
          <span className="text-xl font-bold">63.9{" "}</span>
          K{" "}
          <span className="text-[#d5d6ea] text-sm">6 months avg</span>
        </p>
      </div>

      <div>
        <p className="text-[#d5d6ea] text-sm">Past 6 months</p>
      </div>
      <div className="h-[100%] w-[100%]">
      <Line data={data} options={options} />
      </div>
    </div>
  )
}
