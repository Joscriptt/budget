import React from "react";

import getIncomeExpense from "../actions/getIncomeExpenses";
import { addCommas } from "@/lib/format";

async function IncomeExpense() {
  const { income, expense } = await getIncomeExpense();

  return (
    <div>
      <div className="flex space-x-16 justify-between max-w-xl  border p-3 rounded-lg my-7">
        <div>
          <h2 className=" text-emerald-500 text-xl">Income</h2>
          <p className="text-center">
            ${addCommas(Number(income?.toFixed(2)))}
          </p>
        </div>
        <div>
          <h2 className="text-red-600 text-xl">Expenses</h2>
          <p className="text-center">
            ${addCommas(Number(expense?.toFixed(2)))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default IncomeExpense;
