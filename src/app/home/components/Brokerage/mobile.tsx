import Image from "next/image";
import React from "react";

const BrokageMobile = () => {
  return (
    <div className="py-8 px-5 bg-darkskyblue bg-brokage_icons_mobile">
      <div className="bg-white p-8 flex items-center flex-col gap-8 rounded-lg">
        <Image
          src="/brokage_mobile_card.png"
          alt=""
          width={233}
          height={174.05}
        />
        <p className="text-center  text-ocean">
          <span className="font-semibold">
            {" "}
            Connect your brokerage accounts
          </span>
          and get access to trading ideas, aggregated stats and discussions in
          your tech investing community right away.
        </p>
      </div>
    </div>
  );
};

export default BrokageMobile;
