import React from "react";

import getIncomeExpense from "../actions/getIncomeExpenses";
import { addCommas } from "@/lib/format";

async function IncomeExpense() {
  const { income, expense } = await getIncomeExpense();

  return (
    <div>
      <div className="flex ">
        <div>
          <h2>Income</h2>
          <p>${addCommas(Number(income?.toFixed(2)))}</p>
        </div>
        <div>
          <h4>Expenses</h4>
          <p>${addCommas(Number(expense?.toFixed(2)))}</p>
        </div>
      </div>
    </div>
  );
}

export default IncomeExpense;
