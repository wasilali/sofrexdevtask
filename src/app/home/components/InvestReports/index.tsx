"use client";
import React, { useState } from "react";

const Index = () => {
  return (
    <>
      <div className="2xl:max-w-[1452px] mx-auto transition-all bg-invest_report_icons bg-softpurple md:block hidden lg:h-[600px] h-[740px] px-8 pt-[70px] pb-16">
        <div className="bg-white rounded-lg flex lg:flex-row flex-col gap-10 lg:py-0 py-10 px-10 justify-center items-center h-full w-full lg:gap-16">
          <GuardianAngel />
          <p className=" flex flex-col items-start mx-auto text-ocean text-2xl font-medium ">
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
  const [hovered, setHovered] = useState(false);
  const [scaleUp, setScaleUp] = useState(1);

  return (
    <div className=" mx-auto lg:mb-0 lg:h-[550px] lg:mt-16  mb-10">
      <div
        className="bg-greylight -my-10 cursor-pointer lg:h-full h-[480px] rounded-xl mx-auto w-[70%] px-10"
        onMouseLeave={() => setHovered(false)}
        onMouseOver={() => setHovered(true)}
      >
        <h2 className="capitalize text-center py-7 text-black font-bold text-2xl mb-0 lg:mb-8">
          invest Reports
        </h2>
        <div className="relative flex items-center justify-center"
        onMouseLeave={() => setScaleUp(1)}
        onMouseOver={() => setScaleUp(1.2)}
        >
                    <img
            src="/IR_1_1.png"
            alt="Image 1"
            className="max-w-[288px] transform z-20 transition-transform duration-700 ease-in-out"
          />
          <img
            src="/IR_2_1.png"
            alt="Image 2"
            className={`max-w-[288px] absolute ${
              hovered ? "z-10 ml-[220px] scale-110 mt-[-70px]" : "z-10"
            } transform transition-transform duration-700 ease-in-out`}
          />
          <img
            src="/IR_3_1.png"
            alt="Image 3"
            className="max-w-[288px] transform z-4 transition-transform duration-700 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
}
