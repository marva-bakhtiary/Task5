import React from "react";
interface BalanceProps {
  value: any;
}
function DisplayBalance({ value }: BalanceProps) {
  return (
    <>
      <h2 className="ml-[20%] mt-1">Total</h2>
      <div className="text-center cyan text-4xl font-semibold">{value}</div>
    </>
  );
}

export default DisplayBalance;
