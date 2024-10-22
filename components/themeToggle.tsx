"use client";

import { useTheme } from "next-themes";

import React from "react";

function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  return (
    <div>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? "dark" : "light"}
      </button>
    </div>
  );
}

export default ThemeToggle;
