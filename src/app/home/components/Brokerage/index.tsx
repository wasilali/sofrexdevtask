import LeftContent from "@/app/components/LeftContent/LeftContent";
import CardStack from "@/app/components/cardStack/CardStack";
import Image from "next/image";
import React from "react";

const Index = () => {
  return (
    <>
      <div className=" transition-all bg-track_icons bg-parisgreen  lg:h-[600px] h-auto lg:px-8 px-5 py-10">
        <div className="2xl:max-w-[1452px] mx-auto  bg-white rounded-lg flex justify-center items-center flex-col-reverse lg:flex-row h-full w-full py-10  lg:gap-16">
          <p className=" flex flex-col items-start text-ocean text-2xl font-medium p-4">
            <span className="font-semibold">
              Connect your brokerage accounts
            </span>
            <span>and get access to trading ideas,</span>
            <span>aggregated stats and discussions in</span>
            <span> your tech investing community right</span>
            <span>away.</span>
          </p>
          <CardStack />
        </div>
      </div>
    </>
  );
};

export default Index;
