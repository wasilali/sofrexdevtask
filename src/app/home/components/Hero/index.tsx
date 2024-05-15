import React from "react";
import { Button, TextInput } from "flowbite-react";
import Image from "next/image";
const Hero = () => {
  return (
    <>
      <div
        className="max-w-[1206px] w-full mt-5 lg:mt-14 mx-auto hidden md:flex justify-center lg:items-start items-center flex-row px-[4rem]
      "
      >
        <div className="">
          <h1 className="flex flex-col lg:text-[54px] lg:leading-[65px] text-5xl font-bold pt-10 lg:text-start">
            <span>FAANG </span>
            <span>INVESTING </span>
            <span>COMMUNITY </span>
          </h1>
          <p className="flex flex-col text-start  lg:text-[30px] text-base font-medium text-ocean pt-2 w-[76%] leading-10">
            We help people working in BigTech make better financial decisions
            with the data and insights provided by AI
          </p>
        </div>
        <div
          className="flex items-center rounded-tr-[40px] rounded-br-[40px] md:mx-0 mx-10  shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:shadow-none bg-form-pattern max-w-lg h-[460px] 
           w-full bg-no-repeat bg-cover px-6"
        >
          <form className="flex items-center justify-center  flex-col  bg-white max-w-[460px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-full  mx-auto rounded-3xl lg:h-[90%] h-auto lg:px-16 p-5">
            <p className="font-bold text-center text-base mt-5 mb-8 text-bluishCyan">
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
            <p className="font-light text-sm mt-6 mb-2 text-bluishCyan flex w-full justify-end">
              Forgot Password?
            </p>
            <Button type="submit" className="w-full bg-bluishCyan capitalize">
              log in
            </Button>
            <div className="flex justify-center items-center w-full gap-8 mt-5">
              <p className=" text-ocean text-sm">Don’t have an account?</p>
              <p className="font-medium text-sm  text-bluishCyan">Sign Up</p>
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
