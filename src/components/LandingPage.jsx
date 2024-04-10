import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-full bg-zinc-900 pt-1"
    >
      <div className="textstructure mt-52 px-28 ">
        {["We Create", "Eye Opening", "Presentions"].map((item, index) => {
          return (
            <div key={index} className="masker font-['Founders_Grotesk]">
              <div key={index} className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[7.5vw] h-[5.5vw] bg-green-500 rounded-md"
                  ></motion.div>
                )}
                <h1
                  key={index}
                  className="uppercase text-[7.5vw] leading-[6.5vw] tracking-tighter font-['Founders_Grotesk] font-medium"
                >
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-28 flex justify-between items-center py-5 px-16 bg-zinc-900">
        {[
          "For public and private companies",
          "From the first picth to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-2">
          <div className="px-5 py-2 border-[2px] font-light text-md uppercase border-zinc-400 rounded-full">
            Start the project
          </div>
          <div className="w-10 h-10 rounded-full border-[2px] border-zinc-400 flex justify-center items-center">
            <span className="-rotate-[45deg]">
              <FaArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
