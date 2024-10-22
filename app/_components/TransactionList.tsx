import { Transaction } from "@/types/Transaction";
import React from "react";
import getTransaction from "../actions/getTransaction";
import TransactionItem from "./TransactionItem";

async function TransactionList() {
  const { transactions, error } = await getTransaction();

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div>
      <h3>History</h3>
      <ul>
        <li>
          {transactions &&
            transactions.map((transact: Transaction) => (
              <TransactionItem transaction={transact} key={transact.id} />
            ))}
        </li>
      </ul>
    </div>
  );
}

export default TransactionList;
