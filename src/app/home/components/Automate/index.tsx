"use client";
import Image from "next/image";
import React, { useState } from "react";

const Index = () => {
  return (
    <>
      <div className=" transition-all bg-guardian_icons bg-Orangeyyellow  lg:h-[740px] px-8 py-[70px] ">
        <div className="2xl:max-w-[1452px] mx-auto bg-white rounded-lg flex lg:flex-row flex-col lg:py-0 py-10 justify-center items-center h-full w-full gap-16 p-4">
          <p className=" flex flex-col items-start text-ocean text-2xl font-medium">
            <span className="font-semibold">
              Automate monitoring of your trading
            </span>
            <span>accounts 24/7. Control your risks and</span>
            <span> manage your portfolio like a PRO.</span>
          </p>

          <GuardianAngel />
        </div>
      </div>
    </>
  );
};

export default Index;

function GuardianAngel() {
  const [scaleUp, setScaleUp] = useState(1);
  return (
    <div
      className="bg-greylight rounded-lg cursor-pointer"
      onMouseLeave={() => setScaleUp(1)}
      onMouseOver={() => setScaleUp(1.2)}
    >
      <h2 className="capitalize text-center py-7 text-black font-bold text-lg">
        introduction of Guardian Angel
      </h2>
      <Image
        src={"/milestone_5.png"}
        alt="milestone_5"
        width={450}
        height={124}
        style={{ transition: "transform 0.5s", transform: `scale(${scaleUp})` }}
      />
      <Image
        src={"/trading_behavior_5.png"}
        alt="trading_behavior_Stock_5"
        className="my-14"
        width={450}
        height={124}
      />
      <Image
        src={"/trading_behavior_Stock_5.png"}
        alt="trading_behavior"
        width={450}
        height={124}
      />
      <Image
        src={"/Input_file_2.png"}
        alt="Input_file_2"
        className="my-5"
        width={450}
        height={124}
      />
    </div>
  );
}
