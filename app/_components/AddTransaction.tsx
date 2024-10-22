"use client";

import React from "react";
import { toast } from "sonner";
import addTransation from "../actions/addTransactions";
import { useRef } from "react";

function AddTransaction() {
  const formRef = useRef<HTMLFormElement>(null);

  const clientAction = async (formData: FormData) => {
    // console.log(formData.get("text"), formData.get("amount"));
    const { data, error } = await addTransation(formData);

    if (error) {
      // alert(error);
      // toast(error);
      toast.error(error);
    } else {
      toast("Transaction Added");
      formRef.current?.reset();

      console.log(data);
    }
  };
  return (
    <div>
      <h3>Add Transaction</h3>

      <form ref={formRef} action={clientAction}>
        <div>
          <label htmlFor="text">Text</label>
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Enter your text"
          />
        </div>
        <div>
          <label htmlFor="text">
            Amount <br /> (negative - Expense, Positive - income
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter amount"
            step={0.01}
          />
        </div>
        <button className="bg-neutral-500">Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
