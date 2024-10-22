import React from "react";

import Guest from "./_components/Guest";
import { currentUser } from "@clerk/nextjs/server";
import AddTransaction from "./_components/AddTransaction";
import Balance from "./_components/Balance";
import IncomeExpense from "./_components/IncomeExpense";

import TransactionList from "./_components/TransactionList";

async function Guestt() {
  const user = await currentUser();
  if (!user) {
    return <Guest />;
  }
  return (
    <div>
      Hey {user.firstName}
      <Balance />
      <IncomeExpense />
      <AddTransaction />
      <TransactionList />
    </div>
  );
}

export default Guestt;
