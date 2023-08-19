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
import { expenseChartData } from "../../../constants/data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip
)

export const Expenses = () => {

  const data = {
    labels: expenseChartData.map((data) => data.month),
    datasets: [
      {
      label: 'salary',
      data: expenseChartData.map((data) => data.salary),
      backgroundColor: '#01d1fe',
      borderColor: '#03d0fe',
      pointBorderColor: '#03d0fe',
      fill: true,
      tension: 0,
    },
    {
      label: 'Expenses',
      data: expenseChartData.map((data) => data.expenses),
      backgroundColor: '#b15ed0',
      borderColor: '#b15ed0',
      pointBorderColor: '#8140a9',
      fill: true,
      tension: 0,
    },
    {
      label: 'Fixed Costs',
      data: expenseChartData.map((data) => data.fixedCost),
      backgroundColor: '#e1c757',
      borderColor: '#e1c757',
      pointBorderColor: '#e1c757',
      fill: true,
      tension: 0,
    }
  ]
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
      <h1 className="text-white font-semibold">
        Expenses{" "}
        <span className="text-[#d5d6ea] text-sm">(in thousands of dollars)</span>
      </h1>
      <div className="lg:my-6">
        <Line data={data} options={options} />
      </div>
    </div>
  )
}
