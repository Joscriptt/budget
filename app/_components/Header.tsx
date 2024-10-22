import React from "react";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import ThemeToggle from "@/components/themeToggle";

import { checkUser } from "@/lib/checkUser";

async function Header() {
  const user = await checkUser();
  return (
    <nav className="flex justify-between items-center border border-neutral-800 p-2 rounded-xl">
      <div>
        <h2 className="font-semibold text-sm">Zen Tracker</h2>
      </div>

      <div className=" flex items-center gap-x-2">
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <div>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Header;
