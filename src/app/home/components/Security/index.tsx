"use client";
import Image from "next/image";
import React, { useState } from "react";
import RightContent from "@/app/components/RightContent/RightContent";
import CardStack from "@/app/components/cardStack/CardStack";
import { Button } from "flowbite-react";

const Index = () => {
  const [scaleUp, setScaleUp] = useState(1);
  return (
    <div className="bg-security_icons bg-pacificblue px-8 py-14 ">
      <h2 className="text-4xl font-semibold text-white text-center ">
        SECURITY IS OUR PRIORITY
      </h2>
      <div
        className="grid lg:grid-cols-3 grid-cols-1 place-items-center gap-6 mt-10"
        onMouseLeave={() => setScaleUp(1)}
        onMouseOver={() => setScaleUp(1.000001)}
      >
        <Card
          image="/aws_logo.svg"
          title="Cloud Infrastructure"
          description="Our application is built on the same reliable, scalable infrastructure used to power AMAZON.com’s global web properties. We ensure that the data can only be accessed by authorized roles and services with audited access."
        />
        <Card
          scaleUp={scaleUp}
          image="/plaid_logo.svg"
          title="Secure Broker Connection"
          description="Brokerage Account Linking is done though our partner Plaid which handles credential validation (including multi-factor authentication) for each institution it supports and provides your account transaction history and holdings structure to StockClubs using secure access tokens."
        />
        <Card
          image="/aes_256.svg"
          title="Data Encryption"
          description="The combination of the Advanced Encryption Standard (AES-256) and Transport Layer Security (TLS) keeps your personal infomation safe. We encrypt data in transit between our services and at rest."
        />
      </div>
      <Button
        title="Learn More About Security"
        className="text-white font-medium text-2xl rounded-md bg-sunglow mx-auto mt-10 p-3 max-w-[468px] w-full"
      >
        Learn More About Security
      </Button>
    </div>
  );
};

export default Index;

function Card({
  image,
  title,
  description,
  scaleUp,
}: {
  image: string;
  title: string;
  description: string;
  scaleUp?: number;
}) {
  return (
    <div
      className="h-auto bg-white flex items-center flex-col rounded-2xl"
      style={{ transition: "transform 0.5s", transform: `scale(${scaleUp})` }}
    >
      {/* img */}
      <Image
        src={image}
        width={112}
        height={112}
        alt="aws_logo"
        className="mt-10"
      />
      {/* heading */}
      <h3 className="text-ocean font-bold text-2xl text-center mt-5">
        {title}
      </h3>
      <p className="text-lg px-6 h-[288px] mt-5 text-center text-ocean">
        {description}
      </p>
    </div>
  );
}
