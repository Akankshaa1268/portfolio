"use client";
import React, { useState } from "react";
import dynamic from 'next/dynamic';

// This tells Next.js: "Only load this when you're actually in the browser"
const Lottie = dynamic(() => import("lottie-react"), { 
  ssr: false 
});
import { online } from "@/public/assets/assets";

const Aboutme = () => {
  const [openToFreelance, setOpenToFreelance] = useState(false);
  return (
    <div>
      <div className="font-medium mb-2">about me.</div>
      <div className="text-sd text-sm">
        Hi, I am an engineer, crafting software that’s efficient, thoughtful, and user-friendly. I enjoy learning new tools, iterating on ideas and keeping cold coffee close by. Open for collaborations and opportunities.
      </div>
      <div
        className={`text-sd text-sm flex items-center justify-start ${
          openToFreelance ? "" : "hidden"
        }`}
      >
        <div>Available for freelance work</div>
        <div className="mt-[4px]">
          <Lottie
            className="w-5"
            animationData={online} // Use the desired Lottie animation from assets
            loop={true}
            autoplay={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
