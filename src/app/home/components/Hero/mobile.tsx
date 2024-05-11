import Image from "next/image";
import React from "react";

const Heromobile = () => {
  return (
    <div className="md:hidden block px-5 pb-20">
      <h3 className="flex flex-col items-center text-center text-2xl font-semibold mt-10">
        <span>FAANG INVESTING </span>
        <span>COMMUNITY</span>
      </h3>
      <p className="text-lg font-medium text-ocean text-center">
        {" "}
        We help people working in BigTech make better financial decisions with
        the data and insights provided by AI
      </p>
      <div className="flex flex-col gap-5 my-10 items-center">
        <Image
          src={"/AppleStoreButton.svg"}
          alt="appleicon"
          width={210}
          height={60}
          className="text-center"
        />
        <Image
          src={"/GooglePlayButton.svg"}
          alt="appleicon"
          width={210}
          height={60}
          className="text-center"
        />
      </div>
      <p className="text-center px-10 text-ocean">
        <span className="font-semibold"> Sign up today</span> and manage your
        portfolio like a pro with personalized assistant and access to a trusted
        tech community of 1,200 members who connected $150M+ of total assets.
      </p>
    </div>
  );
};

export default Heromobile;
