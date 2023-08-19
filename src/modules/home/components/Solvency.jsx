import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  BarElement
} from 'chart.js';
import { solvencyChartData } from '../../../constants/data';

ChartJS.register(
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  BarElement
)

export const Solvency = () => {

  const data = {
    labels: solvencyChartData.map((data) => data.month),
    datasets: [
      {
      label: 'Incomings',
      data: solvencyChartData.map((data) => data.incomings),
      backgroundColor: '#01d1fe',
      borderColor: 'black',
      borderWidth: 1,
    },
    {
      label: 'Outgoings',
      data: solvencyChartData.map((data) => data.outgoings),
      backgroundColor: '#e1c757',
      borderColor: 'black',
      borderWidth: 1,
    },
  ]
  };

  const options = {
    plugins: {
      Legend: {
        position: 'bottom'
      }
    }
  }
  
  return (
    <div>
      <h1 className="text-white font-semibold">Solvency</h1>
      <div>
      <p 
      className="text-xl font-bold text-white border-[1.5px] p-2 my-1 bg-[#2a3b55] rounded-md border-green-500">
          10.8{" "}
          <span className="font-semibold text-md">mnth{" "}</span>
          <span className="text-[#d5d6ea] text-sm">Runway</span>
        </p>
      </div>

      <div>
      <h1 className="text-white font-semibold">
        Income / Outgoings <span className="text-[#d5d6ea] text-sm">(in thousands of dollars)</span>
        </h1>
      </div>

      <div className="h-[100%] w-[100%]">
        <Bar data={data} options={options} />
      </div>

    </div>
  )
}
