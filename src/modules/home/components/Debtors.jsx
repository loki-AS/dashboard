import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  BarElement
} from 'chart.js';
import { debtorsChartData } from '../../../constants/data';

ChartJS.register(
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  BarElement
)

export const Debtors = () => {
  const data = {
    labels: debtorsChartData.map((data) => data.month),
    datasets: [
      {
      label: 'Amount (in thousands of dollars)',
      data: debtorsChartData.map((data) => data.amount),
      backgroundColor: '#01d1fe',
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
      <h1 className="text-white font-semibold">Debtors (past 6 months)</h1>
      
      <div className='lg:my-6'>
        <div className="h-[100%] w-[100%]">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  )
}
