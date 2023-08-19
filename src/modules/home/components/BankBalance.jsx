import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  BarElement
} from 'chart.js';
import { bankBalance } from '../../../constants/data';

ChartJS.register(
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  BarElement
)

export const BankBalance = () => {
  const data = {
    labels: bankBalance.map((data) => data.month),
    datasets: [{
      label: 'Amount (in millions of dollars)',
      data: bankBalance.map((data) => data.amount),
      backgroundColor: '#01d1fe',
      borderColor: 'black',
      borderWidth: 1,
    }]
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
      <h1 className="text-white font-semibold">Cash in bank</h1>
      <div className="text-white py-2">
        <p className="font-semibold">
          ${" "}
          <span className="text-xl font-bold">616.5{" "}</span>
          K{" "}
          <span className="text-[#d5d6ea] text-sm">Current</span>
        </p>
      </div>

      <div>
        <p className="text-[#d5d6ea] text-sm">Past 6 months</p>
      </div>

      <div className="h-[100%] w-[100%]">
        <Bar
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};
