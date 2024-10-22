import { SignInButton } from "@clerk/nextjs";
import React from "react";

function Guest() {
  return (
    <div className="text-center mt-7">
      <h1>Welcome </h1>
      <p>Please Sign in to Manage your transaction</p>
      <SignInButton />
    </div>
  );
}

export default Guest;
