import { BankBalance, BurnValue, Debtors, DebtorsCash, Expenses, Solvency, UsdRate } from "./components";

export const Home = () => {

  return (
    <div className="p-4 lg:h-screen lg:overflow-y-scroll scrollbar">

      <div className='lg:grid lg:grid-cols-3 lg:h-[50%] flex flex-col gap-4'>
            <div className='col-span-1 bg-[#262953] p-2 rounded-md'>
                <BankBalance />
            </div>
            <div className='col-span-1 bg-[#262953] p-2 rounded-md'>
                <BurnValue />
            </div>
            <div className='col-span-1 bg-[#262953] p-2 rounded-md'>
                <Expenses />
            </div>
        </div>

        <div className='lg:grid lg:grid-cols-6 lg:h-[50%] pt-4 flex flex-col gap-4'>
            <div className='col-span-2 bg-[#262953] p-2 rounded-md'>
                <Solvency />
            </div>
            <div className='col-span-1 bg-[#262953] p-2 h-[100%] rounded-md'>
                <DebtorsCash />
            </div>
            <div className='col-span-2 bg-[#262953] p-2 rounded-md'>
                <Debtors />
            </div>
            <div className='col-span-1 bg-[#262953] p-2 rounded-md'>
                <UsdRate />
            </div>
        </div>

    </div>
  );
};
