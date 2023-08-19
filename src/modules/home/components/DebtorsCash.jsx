

export const DebtorsCash = () => {
  return (
    <div className="h-[85%]">
      <h1 className="text-white font-semibold pb-4">Debtors</h1>
      <div className="h-56 lg:h-[100%] flex flex-col gap-4">
        <div className="h-[50%] w-full flex flex-col justify-center px-2">
          <p className="font-semibold text-white">
              ${" "}
              <span className="text-xl font-bold">345{" "}</span>
              K
          </p>
          <p className="text-[#d5d6ea] text-sm">Current</p>
        </div>
        <div 
        className="border-2 border-red-500 h-[50%] w-full flex flex-col justify-center px-2 bg-[#3b2a51] rounded-md"
        >
          <p className="font-semibold text-white">
              ${" "}
              <span className="text-xl font-bold">124{" "}</span>
              K
          </p>
          <p className="text-[#d5d6ea] text-sm">Current</p>
        </div>
      </div>
    </div>
  )
}
