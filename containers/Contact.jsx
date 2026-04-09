"use client";

import React, { useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const Contact = () => {
  const [ishovered, setHoveredPos] = useState(false);
  const socials = [
    {
      platform: "Linkedin",
      link: "@akankshapal1268",
      actualLink: "www.linkedin.com/in/akankshapal1268",
    },
    {
      platform: "Github",
      link: "@Akankshaa1268",
      actualLink: "https://github.com/Akankshaa1268",
    },
    {
      platform: "Gmail",
      link: "akankshapal1207@gmail.com",
      actualLink: "mailto:akankshapal1207@gmail.com",
    },
    {
      platform: "Twitter",
      link: "@akankshaa1268",
      actualLink: "https://x.com/akankshaa1268",
    },
    {
      platform: "Leetcode",
      link: "@akankshaexl",
      actualLink: "https://leetcode.com/u/akankshaexl/",
    },
    {
      platform: "Codeforces",
      link: "@akankshapal",
      actualLink: "https://codeforces.com/profile/akankshapal",
    },
    {
      platform: "Resume",
      link: "/resume",
      actualLink:
        "https://drive.google.com/file/d/146EUmNJeIX_S0hNDSzylVLVAkA9DE1fB/view?usp=sharing",
    },
  ];
  return (
    <div id=" flex flex-col gap-5">
      <div className="font-medium socials">contact, socials.</div>
      <div className="flex gap-5 mt-5">
        <div className="flex flex-col justify-center items-start gap-5">
          {socials.map((social) => (
            <div className="flex text-sm gap-5" key={social}>
              <div>{social.platform}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center items-start gap-5">
          {socials.map((social) => (
            <div key={social} className="flex text-sm gap-5">
              <div
                className={` ${
                  ishovered === social.platform ? "" : "text-sd"
                } flex items-center gap-1`}
                onMouseEnter={() => setHoveredPos(social.platform)}
                onMouseLeave={() => setHoveredPos("")}
              >
                <div>
                  <a href={social.actualLink} target="_blank">
                    {social.link}
                  </a>
                </div>
                <div
                  className={`${
                    ishovered === social.platform
                      ? "translate-x-1 transition-all ease-in-out"
                      : ""
                  }`}
                >
                  <MdOutlineArrowOutward />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
