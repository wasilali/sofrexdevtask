import Image from "next/image";
import React from "react";

const TrackyourMobile = () => {
  return (
    <div className="py-8 px-5 bg-track_your_icons_mobile bg-parisgreen">
      <div className="bg-white p-8 flex items-center flex-col gap-8 rounded-lg">
        <Image
          src="/tract_your_mobile.png"
          alt=""
          width={233}
          height={174.05}
        />
        <p className="text-center  text-ocean">
          <span className="font-semibold">
            {" "}
            Track your net worth automatically
          </span>
          and spend less time managing your personal finances. No need to update
          spreadsheets manually anymore.
        </p>
      </div>
    </div>
  );
};

export default TrackyourMobile;
