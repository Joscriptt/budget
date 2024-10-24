import React from "react";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import ThemeToggle from "@/components/themeToggle";
import Link from "next/link";

// import { checkUser } from "@/lib/checkUser";

async function Header() {
  // const user = await checkUser();
  return (
    <nav className=" ">
      <div className="fixed flex justify-between items-center border dark:border-neutral-800 p-3.5 bg-gradient-to-b dark:from-black/65 to-transparent rounded-xl backdrop-blur-sm dark:backdrop-blur-[6px] right-4 left-2 max-w-xl mx-auto z-10">
        <div>
          <Link href={"/"} className="font-semibold text-sm">
            Zen Tracker
          </Link>
        </div>

        <div className=" flex items-center gap-x-2">
          <SignedOut>
            <SignInButton />
          </SignedOut>

          <div className="flex items-center gap-x-3">
            <SignedIn>
              <UserButton />
            </SignedIn>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
