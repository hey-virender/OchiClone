import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full py-20 rounded-t-3xl bg-[#004D43]"
    >
      <div className="text border-y-2 border-zinc-300 flex whitespace-nowrap overflow-hidden py-2 items-center">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[22vw] leading-none font-['Founders_Grotesk] font-bold uppercase pr-20"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[22vw] leading-none font-['Founders_Grotesk] font-bold uppercase pr-20"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[15vw] leading-none font-['Founders_Grotesk] font-bold uppercase "
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
