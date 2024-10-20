import React from "react";
import Circle from "../../components/hero/Circle";
import "./Page.css";
import RippleDemo from "@/components/hero/pop/Ripple";

import TextGenerateEffectDemo from "@/components/hero/pop/Text";
import ShinyButtonDemo from "@/components/hero/pop/button";
const page = () => {
  return (
    <>
      <h1 className="text-[5vh] text-yellow-300 underline ">About me </h1>
      {/* <div className="absolute z-10 flex top-[15%] ">
        <MeteorsDemo />
      </div> */}
      <TextGenerateEffectDemo />
      <div className="flex justify-center mt-2">
        <ShinyButtonDemo />
      </div>
      <div className="flex flex-col"></div>
      <div className="flex">
        <div className="">
          <Circle />
        </div>
        <RippleDemo />
      </div>
    </>
  );
};
export default page;
