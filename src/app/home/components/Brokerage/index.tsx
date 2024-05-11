import LeftContent from "@/app/components/LeftContent/LeftContent";
import CardStack from "@/app/components/cardStack/CardStack";
import Image from "next/image";
import React from "react";

const Index = () => {
  return (
    <>
      <div className="md:block hidden transition-all bg-track_icons bg-parisgreen  lg:h-[740px] h-auto lg:px-8 px-5 pt-10  lg:pt-[70px]">
        <div className="bg-white rounded-lg flex justify-center items-center flex-col lg:pt-0 pt-10 lg:flex-row h-full w-full gap-16">
          <p className=" flex flex-col items-start text-ocean text-3xl font-medium">
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
