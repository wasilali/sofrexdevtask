import Image from "next/image";
import React from "react";

const Index = () => {
  return (
    <div
      className=" xl:py-20 bg-bluishCyan bg-signup-pattern px-8 
      md:py-16
      py-0
      "
    >
      <section className="2xl:max-w-[1452px] w-full mx-auto md:flex hidden lg:flex-row items-center flex-col-reverse lg:h-[680px] h-auto gap-5">
        <div
          className="bg-blue-mini bg-contain  bg-no-repeat max-w-[468px] h-[540px] rounded-lg z-20  w-full hidden md:block
          relative"
        >
          <div className="flex justify-center flex-col items-center h-full w-full ">
            <figure>
              <Image
                src={"/QR_white.png"}
                alt={"image"}
                width={219}
                height={219}
              />
            </figure>
            <p className="text-3xl pt-4 font-normal text-white text-center">
              Sign Up
            </p>
          </div>
        </div>
        {/* </div> */}
        <div className="bg-white rounded-lg lg:h-[540px] h-auto lg:py-0 py-5 w-full flex lg:flex-row flex-col items-center ">
          <Image
            src={"/two_girls.png"}
            alt="two girls"
            width={343}
            height={480}
            className="-ml-28 z-50 lg:h-[480px] h-[300px] lg:w-[343px] w-[240px]"
          />
          <p className="xl:ms-40 ms-5 lg:mr-16 flex flex-col items-start text-ocean text-xl font-medium md:text-start text-center">
            <span>
              <span className="font-semibold">Sign up today</span> and manage
              your
            </span>
            <span>portfolio like a pro with personalized</span>
            <span>assistant and access to a trusted tech</span>
            <span>community of 1,200 members who</span>
            <span>connected $150M+ of total assets.</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
