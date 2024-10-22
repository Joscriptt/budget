import React from "react";

import Guest from "./_components/Guest";
import { currentUser } from "@clerk/nextjs/server";
import AddTransaction from "./_components/AddTransaction";
import Balance from "./_components/Balance";
import IncomeExpense from "./_components/IncomeExpense";

import TransactionList from "./_components/TransactionList";
import Link from "next/link";

async function Guestt() {
  const user = await currentUser();
  if (!user) {
    return <Guest />;
  }
  return (
    <div>
      {/* Hey {user.firstName}
      <Balance />
      <IncomeExpense />
      <AddTransaction />
      <TransactionList /> */}

      <div className="flex flex-col min-h-[100dvh]">
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <Link className="flex items-center justify-center" href="#">
            {/* <PieChart className="h-6 w-6" /> */}
            <span className="sr-only">BudgetPro</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              Features
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              Pricing
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              About
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              Contact
            </Link>
          </nav>
        </header>
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Master Your Money
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Effortlessly track, plan, and grow your finances with
                    BudgetPro. Your path to financial freedom starts here.
                  </p>
                </div>
                <div className="space-x-4">
                  <button className="bg-black text-white hover:bg-gray-800">
                    Get Started
                  </button>
                  <button>Learn More</button>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 ">
            <div className="container px-4 md:px-6">
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                  {/* <DollarSign className="h-10 w-10 mb-2" /> */}
                  <h2 className="text-xl font-bold">Smart Budgeting</h2>
                  <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                    Set and manage budgets with ease. Stay on top of your
                    spending effortlessly.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                  {/* <TrendingUp className="h-10 w-10 mb-2" /> */}
                  <h2 className="text-xl font-bold">Insightful Analytics</h2>
                  <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                    Visualize your financial health with powerful charts and
                    reports.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                  {/* <Star className="h-10 w-10 mb-2" /> */}
                  <h2 className="text-xl font-bold">Goal Tracking</h2>
                  <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                    Set financial goals and track your progress towards
                    achieving them.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    What Our Users Say
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Don't just take our word for it. Here's what our users have
                    to say about BudgetPro.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                    "BudgetPro has completely transformed how I manage my
                    finances. It's intuitive, powerful, and has helped me save
                    more than ever before."
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-gray-200 w-12 h-12" />
                    <div>
                      <div className="text-lg font-medium">Sarah Johnson</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Financial Analyst
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                    "I've tried many budgeting apps, but BudgetPro stands out
                    with its clean design and powerful features. It's a
                    game-changer!"
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-gray-200 w-12 h-12" />
                    <div>
                      <div className="text-lg font-medium">Michael Chen</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Entrepreneur
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 ">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Ready to Take Control?
                  </h2>
                  <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Join thousands of users who have transformed their financial
                    lives with BudgetPro.
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <form className="flex space-x-2">
                    <input
                      className="max-w-lg flex-1"
                      placeholder="Enter your email"
                      type="email"
                    />
                    <button
                      className="bg-black text-white hover:bg-gray-800"
                      type="submit"
                    >
                      Get Started
                    </button>
                  </form>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Start your free trial. No credit card required.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 BudgetPro. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Privacy
            </Link>
          </nav>
        </footer>
      </div>
    </div>
  );
}

export default Guestt;
