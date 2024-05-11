import React from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Image from "next/image";
const Hero = () => {
  return (
    <>
      <div
        className="max-w-[1206px] w-full mt-5 lg:mt-14 mx-auto hidden md:flex justify-center lg:items-start items-center lg:gap-40 gap-10 flex-col lg:flex-row 
  
      
      "
      >
        <div className="">
          <h1 className="flex flex-row lg:flex-col text-2xl lg:text-5xl font-medium pt-10 text-center lg:text-start">
            <span>FAANG </span>
            <span>INVESTING </span>
            <span>COMMUNITY </span>
          </h1>
          <p className="flex flex-col md:flex-row lg:flex-col text-center lg:text-start  text-base font-medium text-ocean pt-2">
            <span>We help people working in BigTech</span>
            <span>make better financial decisions</span>
            <span>with the data and insights</span>
            <span>provided by AI</span>
          </p>
        </div>
        <div
          className="md:rounded rounded-md md:mx-0 mx-10 bg-transparent shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:shadow-none lg:bg-form-pattern max-w-lg lg:h-[553px] h-auto
           w-full bg-no-repeat bg-contain"
        >
          <form className="flex items-center justify-center  flex-col  bg-white max-w-[460px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-full  mx-auto rounded-lg lg:h-[80%] h-auto  mt-5 lg:px-16 p-5">
            <p className="font-medium text-center text-base mt-5 mb-8 text-bluishCyan">
              Welcome Back
            </p>
            <div className="w-full">
              <TextInput
                id="email1"
                type="email"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="w-full mt-8">
              <TextInput id="password1" type="password" required />
            </div>
            <p className="font-medium text-base mt-2 mb-8 text-bluishCyan">
              Forgot Password?
            </p>
            <Button type="submit" className="w-full bg-bluishCyan capitalize">
              log in
            </Button>
            <div className="flex justify-center items-center w-full gap-8 mt-10">
              <p className=" text-ocean  text-base">Don’t have an account?</p>
              <p className="font-medium  text-base  text-bluishCyan">Sign Up</p>
            </div>
          </form>
        </div>
      </div>
      <figure className="m-0 flex justify-center items-center w-full -mb-0 2xl:-mb-10 z-[9999]">
        <Image src={"/Faces.png"} alt="facees" width={1593} height={258} />
      </figure>
    </>
  );
};

export default Hero;
