import React from "react";
import Navbar from "@/app/components/Navbar/Index";
import Hero from "./components/Hero";
import SignUp from "./components/SignUp";
import Brokage from "./components/Brokerage";
import TrackYour from "./components/Trackyour";
import Automate from "./components/Automate";
import InvestReports from "./components/InvestReports";
import Heromobile from "./components/Hero/mobile";
import BrokageMobile from "./components/Brokerage/mobile";
import TrackyourMobile from "./components/Trackyour/mobile";
import AutomateMobile from "./components/Automate/mobile";
import InvestReportsMobile from "./components/InvestReports/mobile";

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="md:block hidden">
        <Hero />
        <SignUp />
        <Brokage />
        <TrackYour />
        <Automate />
        <InvestReports />
      </div>
      <div className="md:hidden block">
        <Heromobile />
        <BrokageMobile />
        <TrackyourMobile />
        <AutomateMobile />
        <InvestReportsMobile />
      </div>
    </>
  );
};

export default Page;
