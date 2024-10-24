"use client";

import React from "react";
import { toast } from "sonner";
import addTransation from "../actions/addTransactions";
import { useRef } from "react";
import { Input } from "./Input";
import { Button } from "./Button";

function AddTransaction() {
  const formRef = useRef<HTMLFormElement>(null);

  const clientAction = async (formData: FormData) => {
    // console.log(formData.get("text"), formData.get("amount"));
    const { data, error } = await addTransation(formData);

    console.log(data);
    if (error) {
      toast(error);
    } else {
      toast("Transaction Added");
      formRef.current?.reset();
    }
  };
  return (
    <div>
      <h3>Add Transaction</h3>

      <form ref={formRef} action={clientAction}>
        <div className="my-5">
          <label className="text-xl" htmlFor="text">
            Expense Name
          </label>

          <Input
            type="text"
            name="name"
            id="text"
            placeholder="Enter Item Name"
            className="mt-3"
          />
        </div>
        <div>
          <label className="text-xl" htmlFor="text">
            Amount
          </label>
          <span className="text-[11px] text-neutral-600">
            {" "}
            negative means <span className="text-red-600">Expenses</span> ,
            Positive means <span className="text-emerald-500">Income</span>
          </span>

          <Input
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter amount"
            step={0.01}
            className="mt-3"
          />
        </div>
        <Button className="mt-5 w-full" variant={"default"} size={"lg"}>
          Add Transaction
        </Button>
      </form>
    </div>
  );
}

export default AddTransaction;
