import React from "react";

function About() {
  return (
    <div className="w-full p-20  bg-[#cdea68] rounded-t-3xl text-black">
      <h1 className="font-['Neue Montreal'] text-[4vw] leading-[4.5vw] tracking-tight">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to{" "}
        <span className="underline underline-offset-[1vw] decoration-[0.3vw]">
          raise funds
        </span>
        ,
        <span className="underline underline-offset-[1vw] decoration-[0.3vw]">
          sell products
        </span>
        ,{" "}
        <span className="underline underline-offset-[1vw] decoration-[0.3vw]">
          explain complex ideas
        </span>
        ,{" "}
        <span className="underline underline-offset-[1vw] decoration-[0.3vw]">
          and hire great people
        </span>
        .
      </h1>
      <div className="w-full border-t-[0.2vw] pt-10 border-[#a1b562] mt-[7vw] flex gap-5">
        <div className="w-1/2 ">
          <h1 className="text-7xl">Our approach:</h1>
          <button className="px-10 py-6 bg-zinc-900 rounded-full text-white mt-10 uppercase flex gap-10 items-center">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 ">
          <img
            className="object-cover rounded-3xl"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
