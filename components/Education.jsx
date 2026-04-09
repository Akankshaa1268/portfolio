"use client";
import React from "react";

const EducationList = () => {
  const edu = {
    institution: "Indira Gandhi Delhi Technical University for Women",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    cgpa: "8.63",
    duration: "2024 - 2028",
  };

  return (
    <div className="border-l-2 pl-6 hover:border-orange-300 cursor-default transition-all flex flex-col gap-2">
      <div className="flex sm:flex-row flex-col items-start justify-between gap-2">
        <div className="flex flex-col gap-1">
          {/* Institution Name */}
          <div className="text-md font-medium">
            {edu.institution}
          </div>

          {/* Degree - text-sd color */}
          <div className="text-sm text-sd">
            {edu.degree}
          </div>

          {/* CGPA on its own line below degree - text-sd color */}
          <div className="text-sm text-sd">
            CGPA: {edu.cgpa}
          </div>
        </div>

        {/* Duration stays on the right side */}
        <div className="text-sm text-sd min-w-fit">
          {edu.duration}
        </div>
      </div>
    </div>
  );
};

export default EducationList;