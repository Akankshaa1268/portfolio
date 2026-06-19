"use client";
import Image from "next/image";
import { useState } from "react";
import CraftComponent from "@/components/CraftComponent.jsx";
import {
  abitco,
  stash,
  threed,
  parking,
  tarzan,
  campus,
  cardigan,
  neuro,
  mrbingo,
  mirror,
  petora,
  virtual,
  appointly,
  bar,
  Bng,
  chatbot,
  clouds,
  dashboard,
  dropdown,
  gpt3page,
  lotus,
  modernbank,
  plane,
  planeout,
  portfolio,
  punjab,
  qutub,
  redbrick,
  sft,
  sunset,
  timeline,
  usabilityhub,
  vase,
  deck,
} from "@/public/assets/assets";

export default function Page() {
  const [imagesHovered, setImagesHovered] = useState(false);
  const craftArray = [
    {
      img: mrbingo,
      heading: "Mr. Bingo",
      subheading:
        "An AI-powered behavioral intelligence web platform that analyzes cognitive game data to predict emotional triggers and generate actionable insights for parents of neurodivergent children.",
      deployedLink: "https://bingo5706.vercel.app/",
      labels: ["React", "JavaScript", "Node.js", "Firebase", "Vite"],
    },
    {
      img: parking,
      heading: "Traffic Management Model",
      subheading:
        "AI-driven parking intelligence that detects illegal-parking hotspots, quantifies their impact on traffic flow with a road-network-grounded score (PICS), forecasts where they'll be next, optimizes patrol routes, studies enforcement impact, and hands officers a mobile playbook turning patrol-based, reactive enforcement into targeted, proactive deployment.",
      deployedLink: "https://parking.codexarena.app/",
      labels: ["Python", "Dockerfile", "HTML"],
    },

    {
      img: stash,
      heading: "Stash",
      subheading:
        "A web-based academic resource portal offering curated branch-wise and semester-wise notes, PYQs, and books for enhanced student learning. Registered 348% increase in platform visit last month along with 16,700+ weekly.",
      deployedLink: "https://stash-igdtuw.vercel.app/",
      labels: ["React", "TypeScript", "Tailwind"],
    },
     {
      img: threed,
      heading: "3d Portfolio",
      subheading:
        "The portfolio features smooth animations, dynamic sections, and interactive 3D elements to create an immersive experience for visitors.",
      deployedLink: "https://akankshapal.vercel.app/",
      labels: ["Three.js", "React","Framer Motion", "Tailwind CSS", "React Router DOM", "Vite", "React-three/fiber"],
    },
     {
      img: neuro,
      heading: "NeuroLens",
       subheading:
        "Cloud-native surgical decision platform that transforms 2D MRI slices into high-fidelity 3D digital twins using a 3D U-Net segmentation pipeline.",
      deployedLink: "https://github.com/Akankshaa1268/neuro",
      labels: ["Three.js", "React.js", "Tailwind", "FastAPI", "NumPy", "Pydicom", "TensorFlow"],
    },
    {
      img: tarzan,
      heading: "Tarzan",
      subheading:
        "Manage Orders with Ease. Enabled with Google Authentication and Redux state management",
      deployedLink: "https://github.com/Akankshaa1268/tarzan",
      labels: ["Node.js", "JavaScript", "FastAPI", "Firebase", "TypeScript"],
    },
    {
      img: petora,
      heading: "Petora",
      subheading:
        "A web tool for both animals and humans that detects animal emotions/diseases using databases, and for humans provides 3D assessments with nearby doctor recommendations.",
      deployedLink: "https://github.com/Akankshaa1268/petora-frontend",
      labels: ["React", "JavaScript", "Three.js", "CSS"],
    },
    {
      img: mirror,
      heading: "Mirror",
      subheading:
        "Web app to scan files (PDF, CSV, DOCX, etc.) for threats, anomalies, and risks; delivers explainable results and interactive visual reports for non-technical users.",
      deployedLink: "https://github.com/Akankshaa1268/Mirror-web-app",
      labels: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Chart.js", "React Dropzone"],
    },
  
    {
      img: virtual,
      heading: "Virtual Vakil",
      subheading:
        "AI-powered legal assistant that helps users understand legal documents and ask questions about Indian law in simple terms.",
      deployedLink: "https://github.com/Akankshaa1268/virtual-vakil-full",
      labels: ["React", "FastAPI", "Python", "Gemini API", "OCR", "Vite", "PyMuPDF"],
    },
    {
      img: campus,
      heading: "Campus Connect",
      subheading:
        "Prototype of a centralized platform designed to streamline information across and enhance engagement",
      deployedLink: "https://www.figma.com/proto/aZsXUIN228GNluWa7nRVFp/Campus-Connect?node-id=2-4&p=f&t=hScD3pJmwPLwwf00-1&scaling=contain&content-scaling=fixed&page-id=0%3A1",
      labels: ["Figma"],
    },
    {
      img: cardigan,
      heading: "Cardigan",
      subheading:
        "Prototype of a platform that connects individuals with NGOs while offering unique benefits",
      deployedLink: "https://www.figma.com/design/iIFplEa9YyGkXNtMYkVWrk/Cardigan?node-id=0-1&m=dev&t=onCVzJGpwrab5o0s-1",
      labels: ["Figma"],
    },
   
  ];

  const imagesArray = [
    plane,
    sunset,
    Bng,
    clouds,
    lotus,
    bar,
    planeout,
    qutub,
    redbrick,
    sft,
    vase,
  ];

  const [selected, setSelected] = useState("web");

  return (
    <div className="flex flex-col text-sd">
      <div className="flex items-center justify-around w-full rounded-md hover:cursor-pointer">
        <div
          onClick={() => setSelected("web")}
          className={`py-1 ${
            selected === "web" ? "bg-gray-400" : ""
          } w-1/2 border-2 flex items-center justify-center rounded-l-md`}
        >
          <span className={selected === "web" ? "text-white bg-gray-400" : ""}>
            web
          </span>
        </div>
        <div
          onClick={() => setSelected("📸")}
          className={`py-1 ${
            selected === "📸" ? "bg-gray-400" : ""
          } w-1/2 border-2 flex items-center justify-center rounded-r-md border-l-0`}
        >
          📸
        </div>
      </div>

      <div
        className={`${
          selected === "web" ? "flex flex-col" : "hidden"
        } mt-10 gap-5 items-start`}
      >
        <div className="text-xs opacity-50 hidden sm:flex">
          *hover on images*
        </div>
        <div className="flex flex-wrap gap-10 mb-10">
          {craftArray.map((craft, index) => (
            <div key={index} className="w-full sm:w-auto">
              <CraftComponent
                img={craft.img}
                heading={craft.heading}
                subheading={craft.subheading}
                deployedLink={craft.deployedLink || ""}
                labels={craft.labels}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        onMouseEnter={() => setImagesHovered(true)}
        onMouseLeave={() => setImagesHovered(false)}
        className={`${
          selected === "📸" ? "flex" : "hidden"
        } mt-10 py-5 relative h-full min-h-[300px] w-full  flex-wrap gap-5 justify-center items-center`}
      >
        {imagesArray.map((src, index) => {
          return (
            <div
              key={index}
              onMouseEnter={() => setImagesHovered(true)}
              className=" overflow-hidden rounded-3xl border-2 border-black transform transition-transform duration-300"
              style={
                !imagesHovered
                  ? index < imagesArray.length / 2
                    ? {
                        position: "absolute",
                        top: `${index * 7}%`, // Move images downward
                        left: `${index * 7}%`, // Move images to the right,
                        zIndex:
                          index < imagesArray.length / 2
                            ? `${index * 7}` // Move images downward
                            : `${(imagesArray.length - index - 1) * 7}`,
                      }
                    : {
                        position: "absolute",
                        position: "absolute",
                        top: `${(imagesArray.length - index - 1) * 7}%`, // Move images downward
                        right: `${(imagesArray.length - index - 1) * 7}%`, // Move images to the right,
                        zIndex:
                          index < imagesArray.length / 2
                            ? `${index * 7}` // Move images downward
                            : `${(imagesArray.length - index - 1) * 7}`,
                      }
                  : {
                      zIndex: 20,
                      transform: "scale(1.05)",
                    }
              }
            >
              <Image
                src={src}
                className="w-32 h-32 sm:w-48 hover:scale-105  transform transition-transform duration-300 sm:h-48 md:w-64 md:h-64 object-cover object-center"
                alt={`image-${index}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
