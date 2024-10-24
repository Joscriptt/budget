"use client";

import { motion } from "framer-motion";
import getUserBalance from "../actions/getUserBalnce";

import { cn } from "@/lib/utils";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

interface BlurIntProps {
  word: string;
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
}
const BlurIn = ({ word, className, variant, duration = 1 }: BlurIntProps) => {
  const [open, setOpen] = useState(false);
  const defaultVariants = {
    hidden: { filter: "blur(13px)", opacity: 1 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <div className="flex justify-between w-full items-center">
      <motion.h1
        initial="hidden"
        animate={open ? "visible" : "hidden"}
        transition={{ duration: 0.5 }}
        variants={combinedVariants}
        className={cn(
          "font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]",
          className
        )}
        onClick={() => console.log("Hey")}
      >
        {word}
      </motion.h1>

      <div className="cursor-pointer" onClick={() => setOpen(!open)}>
        {open ? <Eye /> : <EyeClosed />}
      </div>
    </div>
  );
};

export default BlurIn;
