import React from "react";

const Achievements = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="font-medium">achievements & recognitions.</div>
      <div className="border-l-2 pl-6 hover:border-orange-300 cursor-default transition-all">
        <div>
          <ul className="list-disc flex flex-col gap-3 list-outside ml-3">
             <li className="text-sd text-sm">
              <span className="font-semibold">Pupil @ Codeforces</span>: 
             1218(max).
            </li>
            <li className="text-sd text-sm">
              <span className="font-semibold">HACKAVENSIS 1st Place Winner 2026</span>: 
              Outperformed <span className="font-semibold">1200+ participants</span> in a 24-hour sprint at <span className="font-semibold">MSIT, Delhi</span>.
            </li>
            <li className="text-sd text-sm">
              <span className="font-semibold">IGDTUW Student Excellence Award 2025</span>: 
              Recognized for outstanding academic and co-curricular contributions.
            </li>
            <li className="text-sd text-sm">
              <span className="font-semibold">McKinsey & Company</span>: 
              Selected for the <span className="font-semibold">Forward Program</span>, focusing on future-ready leadership and digital skills.
            </li>
            <li className="text-sd text-sm">
              <span className="font-semibold">DSA Mentor @ LeanIn, IGDTUW</span>: 
              Led and mentored <span className="font-semibold">80+ mentees</span> for<span className="font-semibold"> DSA foundation</span> in C++.
            </li>
            <li className="text-sd text-sm">
              <span className="font-semibold">HPAIR Asia Conference 2025</span>: 
              Selected as a <span className="font-semibold">Global Delegate</span> for <span className="font-semibold">Harvard University’s</span> summit in Tokyo (<span className="font-semibold">6%</span> acceptance rate).
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Achievements;