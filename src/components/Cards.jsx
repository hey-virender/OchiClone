import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen px-32 bg-zinc-900 flex gap-5 items-center">
      <div className="cardcontainer h-[70vh] w-1/2">
        <div className="card relative rounded-xl w-full h-full bg-[#004d43] flex justify-center items-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt="ochi"
          />
          <button className="absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 text-[#cdea68] border-[#cdea68]">
            &copy;2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer h-[70vh] w-1/2 flex gap-5 ">
        <div className=" relative card rounded-xl w-1/2 h-full bg-[#192826]  flex justify-center items-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute px-3 py-1 rounded-full border-2 left-5 bottom-10 text-zinc-200 border-zinc-200 tracking-tighter hover:bg-zinc-200 hover:text-zinc-900">
            RATING 5.0 ON CLUTCH
          </button>
        </div>
        <div className="card relative rounded-xl w-1/2 h-full bg-[#212121]  flex justify-center items-center">
          <img
            className="w-28"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute px-3 py-1 rounded-full border-2  bottom-10 text-zinc-200 border-zinc-200 tracking-tighter hover:bg-zinc-200 hover:text-zinc-900">
            BUSINESS BOOTCAMP ALUMNI
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
