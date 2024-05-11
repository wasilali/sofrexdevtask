import { Button, Textarea } from "flowbite-react";
import Image from "next/image";

const index = () => {
  return (
    <div className="bg-ocean bg-contact_icons lg:h-[928px] h-auto py-14">
      <h4 className="text-2xl font-semibold text-white text-center">
        CONTACT US
      </h4>
      <p className="text-white font-medium text-lg text-center flex flex-col mt-5">
        <span>We are here to answer any question you might have.</span>
        <span>We look forward to hearing from you!</span>
      </p>
      <div className="flex justify-center items-center lg:flex-row flex-col">
        <Image
          src="/contactus_image.png"
          alt="contactus_image"
          width={561.81}
          height={620.7}
          className="lg:block hidden"
        />

        <div className="bg-bluishCyan h-full max-w-[591px] w-full mx-10 rounded-lg lg:mt-0 mt-5">
          <div className=" py-14 flex flex-col gap-8 justify-center items-center  w-[80%] mx-auto">
            <div className="flex gap-5">
              <input
                type="text"
                className="p-5 bg-white text-bluishCyan text-lg font-medium rounded-lg border-0 outline-none w-full"
              />
              <input
                type="text"
                className=" w-full p-5 bg-white text-bluishCyan text-lg font-medium rounded-lg border-0 outline-none"
              />
            </div>

            <input
              type="text"
              className=" w-full p-5 bg-white text-bluishCyan text-lg font-medium rounded-lg border-0 outline-none"
            />
            <Textarea className=" w-full p-5 bg-white text-bluishCyan text-lg font-medium rounded-lg border-0 outline-none" />
            <Button
              title="Learn More About Security"
              className="text-white font-medium text-2xl rounded-md bg-sunglow mx-auto  p-3  w-full"
            >
              Submit
            </Button>
            <p className="text-lg font-semibold text-center text-white ">
              Thanks for submitting!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
