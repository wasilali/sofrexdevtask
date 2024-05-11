"use client";
import CardStack from "@/app/components/cardStack/CardStack";
import Image from "next/image";
import React, { useState } from "react";

const Index = () => {
  return (
    <>
      <div className="transition-all bg-invest_report_icons bg-softpurple md:block hidden  h-[740px] px-8 pt-[70px]">
        <div className="bg-white rounded-lg flex lg:flex-row flex-col gap-10 lg:py-0 py-10 px-10 justify-center items-center h-full w-full lg:gap-16">
          <GuardianAngel />
          <p className=" flex flex-col items-start text-ocean text-2xl font-medium ">
            <span className="font-semibold">
              Track your net worth automatically
            </span>
            <span>and spend less time managing your</span>
            <span>personal finances. No need to update</span>
            <span> spreadsheets manually anymore.</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Index;

function GuardianAngel() {
  const [scaleUp, setScaleUp] = useState({
    scale: 1,
    zIndex: 4,
  });
  return (
    <div className=" lg:max-w-[648.78px] w-full h-full mx-auto">
      <div
        className="bg-greylight -my-10 cursor-pointer rounded-xl  w-[70%] h-full px-10"
        onMouseLeave={() =>
          setScaleUp({
            scale: 1,
            zIndex: 4,
          })
        }
        onMouseOver={() =>
          setScaleUp({
            scale: 1,
            zIndex: 4000,
          })
        }
      >
        <h2 className="capitalize text-center py-7 text-black font-bold text-2xl">
          invest Reports
        </h2>
        <div className="relative w-full mt-10">
          <Image
            src="/IR_1_1.png"
            alt="milestone_5"
            width={273}
            height={390}
            className="absolute z-20  xl:right-[15rem] lg:top-0 right-[20%]
        top: -6rem;"
          />
          <Image
            src="/IR_2_1.png"
            alt="trading_behavior_Stock_5"
            width={273}
            height={390}
            style={{
              transition: "all 0.5s",
              zIndex: `${scaleUp.zIndex}`,
              transform: `scale(${scaleUp.scale})`,
            }}
            className="absolute z-[4]  xl:right-10 lg:top-0 right-[-5%] top-[-3rem]"
          />
          <Image
            src="/IR_3_1.png"
            alt="trading_behavior"
            width={273}
            height={390}
            className="absolute xl:left-[12rem] lg:top-0 right-[5%] top-[-3rem z-10"
          />
          <p className="invisible flex flex-col items-start text-ocean text-2xl font-medium">
            <span className="font-semibold">Receive personalized investor</span>
            <span>
              <span className="font-semibold"> reports</span>
              and understand how your
            </span>
            <span>trading activities contribute to</span>
            <span> your overall wealth.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
