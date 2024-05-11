import Image from "next/image";
import React from "react";

const AutomateMobile = () => {
  return (
    <div className="md:hidden block py-8 px-5  bg-guardian_icons bg-Orangeyyellow">
      <div className="bg-white p-8 flex items-center flex-col gap-8 rounded-lg">
        <Image
          src="/guardian_angel_mobile.png"
          alt=""
          width={233}
          height={174.05}
        />
        <p className="text-center  text-ocean">
          <span className="font-semibold"> Automate monitoring</span>
          of your trading accounts 24/7. Control your risks and manage your
          portfolio like a PRO.
        </p>
      </div>
    </div>
  );
};

export default AutomateMobile;
