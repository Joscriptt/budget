import { SignInButton } from "@clerk/nextjs";
import React from "react";

import Link from "next/link";
import InputSpotlightBorder from "./SpotLight";
import { MessageCircle, Star, Watch } from "lucide-react";

function Guest() {
  return (
    <div className="text-center text-neutral-300 text-s mt-7">
      <div className="relative">
        <img
          className="md:size-36 size-24  top-4 cursor-not-allowed absolute"
          src="/vid/im.png"
          alt=""
        />
        <img
          className="size-32 absolute right-0 top-40 md:top-20"
          src="/vid/im.png"
          alt=""
        />
      </div>
      <div className="flex flex-col ">
        <main className="flex-1">
          <section className="w-full mt-20 md:mt-8 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <span className="inline-flex animate-text-gradient bg-gradient-to-r from-[#dedede] via-[#1f1f1f] to-[#cfcfcf] bg-[200%_auto] text-3xl text-center text-transparent  bg-clip-text font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mt-10">
                    Master Your Money
                  </span>

                  <p className="mx-auto max-w-[700px]  md:text-base dark:text-neutral-200 text-neutral-900">
                    Effortlessly track, plan, and grow your finances with
                    BudgetPro. Your path to financial freedom starts here.
                  </p>
                </div>
                <div className="pt-5">
                  <button className="group h-9 select-none rounded-lg bg-white px-5 text-sm leading-8 text-zinc-950 shadow-[0_-1px_0_0px_#d4d4d8_inset,0_0_0_1px_#f4f4f5_inset,0_0.5px_0_1.5px_#fff_inset] hover:bg-zinc-50 hover:via-zinc-900 hover:to-zinc-800 active:shadow-[-1px_0px_1px_0px_#e4e4e7_inset,1px_0px_1px_0px_#e4e4e7_inset,0px_0.125rem_1px_0px_#d4d4d8_inset]">
                    <span className="block group-active:[transform:translate3d(0,1px,0)]">
                      Get Unlimited Access
                    </span>
                  </button>
                  <p className="mt-5 text-sm font-light dark:text-neutral-200 text-neutral-900">
                    Please Sign in to Manage your transaction
                  </p>

                  {/* <button>Learn More</button> */}
                </div>
              </div>
            </div>
          </section>

          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mt-11 dark:text-neutral-200 text-neutral-900">
              Ready to start Monitoring?
            </h1>
            <p className="mt-8 dark:text-neutral-200 text-neutral-900">
              Unlocking potential through innovative strategies and intelligent
              solutions.
            </p>

            <div className="grid grid-cols-3 mt-20 p-4 dark:text-neutral-200 text-neutral-900 divide-x-[1px]  border dark:border-neutral-900 border-neutral-200 rounded-2xl">
              <div className="flex justify-center items-center gap-x-1 ">
                <Watch className="text-yellow-300" />
                <div className="flex flex-col ">
                  <span className="font-bold text-sm text-left">99.2%</span>
                  <span className="text-sm">Satisfaction</span>
                </div>
              </div>
              <div className="flex justify-center  items-center gap-x-1">
                <Star className="text-emerald-500" />

                <div className="flex flex-col ">
                  <span className="font-bold text-sm text-left">
                    Trustscore
                  </span>
                  <span className="text-sm">140+ Reviews</span>
                </div>
              </div>

              <div className="flex justify-center  items-center gap-x-1">
                <MessageCircle className="text-orange-600" />

                <div className="flex flex-col ">
                  <span className="font-bold text-sm text-left">4.9/5</span>
                  <span className="text-sm">100+ Reviews</span>
                </div>
              </div>
            </div>
          </div>

          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6 dark:text-neutral-200 text-neutral-900">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    What Our Users Say
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Don&apos;t just take our word for it. Here&apos;s what our
                    users have to say about BudgetPro.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                    "BudgetPro has completely transformed how I manage my
                    finances. It&apos;s intuitive, powerful, and has helped me
                    save more than ever before."
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full bg-gray-200 w-12 h-12" />
                    {/* <img src="" alt="" /> */}
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
                    "I&apos;ve tried many budgeting apps, but BudgetPro stands
                    out with its clean design and powerful features. It&apos;s a
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
          <section className="w-full py-12 md:py-24 lg:py-32 dark:text-neutral-200 text-neutral-900 ">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center ">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Ready to Take Control?
                  </h2>
                  <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed  dark:text-gray-400">
                    Join thousands of users who have transformed their financial
                    lives with BudgetPro.
                  </p>
                </div>
                <div className="w-full max-w-xl space-y-2">
                  <form className="flex flex-col md:flex-row space-x-0 md:space-x-2">
                    <InputSpotlightBorder />
                    <button
                      className="bg-black dark:bg-white dark:text-black mt-2 md:mt-0  md:w-fit h-10 w-full text-white hover:bg-gray-800 rounded-xl px-2"
                      type="submit"
                    >
                      Subscribe
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

export default Guest;
