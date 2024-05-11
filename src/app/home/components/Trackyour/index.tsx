import Image from "next/image";
import React from "react";
import RightContent from "@/app/components/RightContent/RightContent";
import CardStack from "@/app/components/cardStack/CardStack";

const Index = () => {
  return (
    <>
      <div
        className="lg:block hidden bg-track_icons bg-parisgreen lg:h-[740px] h-auto
           px-8 pt-[70px]"
      >
        <div className="bg-white rounded-lg flex lg:flex-row flex-col lg:py-0 py-10 justify-center items-center h-full w-full gap-16">
          <CardStack
            image1="/tract_your_card_1.png"
            image2="/tract_your_card_2.png"
            image3="/tract_your_card_3.png"
            top1="0.1rem"
            top2="4rem"
            top3="10rem"
          />
          <p className=" flex flex-col items-start text-ocean text-2xl font-medium">
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
