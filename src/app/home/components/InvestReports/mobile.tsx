import Image from "next/image";
import React from "react";

const InvestReportsMobile = () => {
  return (
    <div className="md:hidden block py-8 px-5 bg-invest_report_icons bg-softpurple ">
      <div className="bg-white p-8 flex items-center flex-col gap-8 rounded-lg">
        <Image
          src="/invest_report_mobile.png"
          alt=""
          width={233}
          height={174.05}
        />
        <p className="text-center  text-ocean">
          <span className="font-semibold">
            {" "}
            Receive personalized investor reports
          </span>
          and understand how your trading activities contribute to your overall
          wealth.
        </p>
      </div>
    </div>
  );
};

export default InvestReportsMobile;
