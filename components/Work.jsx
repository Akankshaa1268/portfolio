"use client";
import { useState } from "react";

const companies = [
  {
    position: "Cyber Security & Digital Forensics Intern",
    companyName: "IGDTUW",
    companyWebsite: "hybrid",
    workedOn: [
      "Undergoing training in secure coding, web security, cyber investigations, and digital forensics.",
      "Working on hands-on labs involving vulnerability assessment, forensic analysis, and secure application development.",
    ],
    startingMonth: "June, 2026",
    endingMonth: "Present",
  },
   {
    position: "AI Powered Full Stack Intern",
    companyName: "IGDTUW",
    companyWebsite: "hybrid",
    workedOn: [
      "Summer internship under the Department of AI & DS, covering MERN stack, TypeScript, MVC architecture, AI API integration (Hugging Face, OpenAI), cloud deployment, and GitHub workflows.",
      "Built an AI-powered legal assistant enabling users to upload legal documents (PDFs/images), extract key clauses, and understand Indian law in simple language using LLMs. ",
    ],
    startingMonth: "June, 2025",
    endingMonth: "July, 2025",
  },
];

const Work = () => {
  return (
    <div className="flex flex-col gap-8">
      {companies.map((company, index) => (
        <div
          className="border-l-2 pl-6 hover:border-orange-300 cursor-default transition-all flex flex-col gap-5"
          key={index}
        >
          <div className="flex sm:flex-row flex-col items-start justify-between gap-2">
            <div>
              <div className="capitalize text-md">
                {company.position}, {company.companyName}
              </div>
              <div className="flex items-center gap-[2px] text-sd">
                <div className="text-sm">
                  {company.companyWebsite}
                </div>
              </div>
            </div>
            <div className="text-sd text-sm">
              {company.startingMonth}{" "}
              <span className={`${company.endingMonth === "" ? "hidden" : ""}`}>
                -
              </span>{" "}
              {company.endingMonth}
            </div>
          </div>
          <div>
            <ul className="list-disc flex flex-col gap-3 list-outside">
              {company.workedOn.map((thingWorkedOn, idx) => (
                <li className="text-sd text-sm ml-3" key={idx}>
                  {thingWorkedOn}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;