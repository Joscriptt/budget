import React from "react";

// import Guest from "./_components/Guest";
import { currentUser } from "@clerk/nextjs/server";
import Guest from "./_components/Guest";
import Balance from "./_components/Balance";
import AddTransaction from "./_components/AddTransaction";
import IncomeExpense from "./_components/IncomeExpense";
import TransactionList from "./_components/TransactionList";

async function Home() {
  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }
  return (
    <div>
      <p className="mt-20">Hey {user.firstName}</p>
      <div className="border border-neutral-600 p-1 rounded-full px-1 flex items-center gap-x-2 max-w-sm w-fit mx-auto">
        <div className="bg-neutral-800 dark:bg-white dark:text-black text-neutral-200 rounded-xl w-fit px-2">
          <span className="text-xs">New</span>
        </div>
        <span className="text-xs font-normal group flex items-center">
          <span>Announcing ZenX is sill in Beta</span>
          <div className="ml-1 transition group-hover:translate-x-1">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </span>
      </div>

      {/* <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200">
        <span>Hover me</span>
        <div className="ml-1 transition group-hover:translate-x-1">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </button> */}

      <Balance />
      <IncomeExpense />
      <AddTransaction />
      <TransactionList />
    </div>
  );
}

export default Home;
