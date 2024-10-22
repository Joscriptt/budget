import React from "react";
import getUserBalance from "../actions/getUserBalnce";

import { addCommas } from "@/lib/format";

async function Balance() {
  const userBalance = await getUserBalance();

  return (
    <div>
      <h2>Your Balance</h2>
      <h1>${addCommas(Number(userBalance.balance?.toFixed(2)) ?? 0)}</h1>
    </div>
  );
}

export default Balance;
