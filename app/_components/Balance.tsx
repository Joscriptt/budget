import React, { useState } from "react";
import getUserBalance from "../actions/getUserBalnce";

import { addCommas } from "@/lib/format";

import BlurIn from "./Blur";

async function Balance() {
  const userBalance = await getUserBalance();

  return (
    <div className="my-10">
      <div>
        <h2 className="text-base ">Your Balance</h2>

        <div className="mt-4">
          <BlurIn
            word={`  $ ${addCommas(
              Number(userBalance.balance?.toFixed(2)) ?? 0
            )}`}
          />
        </div>
      </div>
    </div>
  );
}

export default Balance;

// "use client";

// import React, { useState } from "react";
// import {
//   AnimatePresence,
//   motion,
//   useAnimate,
//   type Variants,
// } from "framer-motion";
// import { cn } from "@/lib/utils";
// import { Minus, Plus } from "lucide-react";

// export default function Day49() {
//   const [num, setNum] = useState(0);
//   const [direction, setDirection] = useState(1);

//   const [scope, animate] = useAnimate();

//   const onClickHandler = (action: "decrease" | "increase") => {
//     if (action === "decrease") {
//       if (num === 0) {
//         animate(scope.current, { x: [0, 5, -5, 0] }, { duration: 0.2 });
//         return;
//       }

//       setNum(num - 1);
//       setDirection(-1);
//     } else if (action === "increase") {
//       if (num === 20) {
//         animate(scope.current, { x: [0, 5, -5, 0] }, { duration: 0.2 });
//         return;
//       }
//       setNum(num + 1);
//       setDirection(1);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center gap-8">
//       <div
//         ref={scope}
//         className="flex items-center justify-center gap-8 text-4xl"
//       >
//         <button
//           onClick={() => onClickHandler("decrease")}
//           className={cn(
//             "bg-box flex h-14 w-14 items-center justify-center rounded-full text-xl active:scale-90",
//             num === 0 && "opacity-50"
//           )}
//         >
//           <Minus />
//         </button>
//         <h3 className="w-12 text-center">
//           <AnimatePresence mode="popLayout" custom={direction}>
//             {num
//               .toString()
//               .split("")
//               .map((value, index) => (
//                 <motion.span
//                   key={`${value} ${index}`}
//                   variants={animation}
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                   custom={direction}
//                   className="inline-block tabular-nums"
//                 >
//                   {value}
//                 </motion.span>
//               ))}
//           </AnimatePresence>
//         </h3>
//         <button
//           onClick={() => onClickHandler("increase")}
//           className={cn(
//             "bg-box flex h-14 w-14 items-center justify-center rounded-full text-xl active:scale-90",
//             num === 20 && "opacity-50"
//           )}
//         >
//           <Plus />
//         </button>
//       </div>
//       <p className="text-muted-2">20 is the max number.</p>
//     </div>
//   );
// }

// const animation: Variants = {
//   hidden: (direction: -1 | 1) => ({
//     y: direction === 1 ? 30 : -30,
//     opacity: 0,
//     filter: "blur(4px)",
//   }),
//   visible: {
//     y: 0,
//     opacity: 1,
//     filter: "blur(0px)",
//   },
//   exit: (direction: -1 | 1) => ({
//     y: direction === 1 ? -30 : 30,
//     opacity: 0,
//     filter: "blur(4px)",
//   }),
// };

// 'use client';
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import {
//   Nav,
//   NavItem,
//   NavItemContent,
//   NavItemTrigger,
//   NavLink,
//   WindowScrollProvider,
//   springs,
// } from '@/frostin-ui';
// import { StatsSection } from './stats-section';

// const variants = {
//   contentItem: {
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: springs.normal(),
//     },
//     hidden: { y: 10, opacity: 0 },
//   },
// };

// export default function Demo() {
//   const [navItem, setNavItem] = useState<string | undefined>();

//   return (
//     <WindowScrollProvider>
//       <Nav onValueChange={setNavItem}>
//         <NavLink href="#">
//           <img
//             src="/logo.png"
//             className="h-7 w-7  object-contain ml-3 translate-y-0.5 "
//           />
//         </NavLink>
//         <NavItem value="core">
//           <NavItemTrigger>Core</NavItemTrigger>
//           <NavItemContent>
//             <motion.div className="grid grid-rows-[repeat(5,2.5rem)] grid-cols-3 grid-flow-col">
//               <motion.div variants={variants.contentItem}>
//                 <NavLink href="#">Clocks</NavLink>
//               </motion.div>
//               <motion.div variants={variants.contentItem}>
//                 <NavLink href="#">Gradients</NavLink>
//               </motion.div>
//               <motion.div variants={variants.contentItem}>
//                 <NavLink href="#">Masks</NavLink>
//               </motion.div>
//               <motion.div variants={variants.contentItem}>
//                 <NavLink href="#">Shadows</NavLink>
//               </motion.div>
//               <motion.div variants={variants.contentItem}>
//                 <NavLink href="#">Scroll Utils</NavLink>
//               </motion.div>
//               <motion.div variants={variants.contentItem}>
//                 <NavLink href="#">Mouse Utils</NavLink>
//               </motion.div>
//               <motion.div variants={variants.contentItem}>
//                 <NavLink href="#">Mount Utils</NavLink>
//               </motion.div>
//             </motion.div>
//           </NavItemContent>
//         </NavItem>
//         <NavItem value="components">
//           <NavItemTrigger>Components</NavItemTrigger>
//           <NavItemContent>
//             <motion.div className="grid grid-rows-[repeat(5,2.5rem)] grid-cols-3 grid-flow-col">
//               <motion.div variants={variants.contentItem}>
//                 <NavLink href="#">Animated Number</NavLink>
//               </motion.div>
//               <motion.div variants={variants.contentItem}>
//                 <NavLink href="#">Godray</NavLink>
//               </motion.div>
//               <motion.div variants={variants.contentItem}>
//                 <NavLink href="#">Navbar</NavLink>
//               </motion.div>
//               <motion.div variants={variants.contentItem}>
//                 <NavLink href="#">Progressive Blur</NavLink>
//               </motion.div>
//               <motion.div variants={variants.contentItem}>
//                 <NavLink href="#">Reflection</NavLink>
//               </motion.div>
//               <motion.div variants={variants.contentItem}>
//                 <NavLink href="#">Line Mask</NavLink>
//               </motion.div>
//               <motion.div variants={variants.contentItem}>
//                 <NavLink href="#">Ticker</NavLink>
//               </motion.div>
//             </motion.div>
//           </NavItemContent>
//         </NavItem>
//         <NavItem value="sections">
//           <NavItemTrigger>Sections</NavItemTrigger>
//           <NavItemContent>
//             <motion.div className="grid grid-rows-[repeat(5,2.5rem)] grid-cols-3 grid-flow-col">
//               <motion.div variants={variants.contentItem}>
//                 <NavLink href="#">Progressive Blur</NavLink>
//               </motion.div>
//               <motion.div variants={variants.contentItem}>
//                 <NavLink href="#">Line Mask</NavLink>
//               </motion.div>
//               <motion.div variants={variants.contentItem}>
//                 <NavLink href="#">Navbar</NavLink>
//               </motion.div>
//             </motion.div>
//           </NavItemContent>
//         </NavItem>
//         <button className="rounded-full px-4 border border-frostin-foreground/50 text-frostin-foreground/60 h-8">
//           Sign in
//         </button>
//       </Nav>
//       <motion.div
//         animate={{
//           scale: navItem ? 0.98 : 1,
//           transition: springs.slow(),
//         }}
//         className="bg-black"
//       >
//         <div className="h-screen center">
//           <video
//             src="/orb.mp4"
//             className="w-full h-full max-w-2xl object-contain blur-[5px] hue-rotate-[155deg] translate-x-[8px]"
//             autoPlay
//             muted
//             loop
//           />
//         </div>
//         <div className="py-32">
//           <StatsSection />
//         </div>
//         <div className="h-screen" />
//         <div className="h-screen" />
//       </motion.div>
//     </WindowScrollProvider>
//   );
// }
