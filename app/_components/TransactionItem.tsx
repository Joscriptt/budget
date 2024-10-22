"use client";

import { Transaction } from "@/types/Transaction";
import { addCommas } from "@/lib/format";

import deleteMe from "../actions/deleteMe";

import { toast } from "sonner";

import React from "react";

function TransactionItem({ transaction }: { transaction: Transaction }) {
  async function handleDelete(id: string) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this transation"
    );

    if (!confirmed) return;

    const { message, error } = await deleteMe(id);

    if (error) {
      toast(error);
    }

    toast(message);
  }
  return (
    <div
      className={
        Number(transaction.amount) < 0 ? "text-red-600" : "text-emerald-500"
      }
    >
      {transaction.text}
      <span>
        {Number(transaction.amount) > 0 ? "+" : "-"}$
        {addCommas(Math.abs(Number(transaction.amount)))}
      </span>
      <button onClick={() => handleDelete(transaction.id)} className="">
        X
      </button>
    </div>
  );
}

export default TransactionItem;
