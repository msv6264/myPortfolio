import React from "react";
import musNest from "../assets/projImg_mus.png";
import ProjSmall from "../components/projComp/Proj_small";
import ProjMed from "../components/projComp/Proj_med";
import ProjBig from "../components/projComp/Proj_big";
import githubIcon from "../assets/github-icon.svg";
import mood from "../assets/moodProj.png";
import dForU from "../assets/doc4U.png";

export default function Projects() {
  const webProjects = [
    {
      title: "Mood to Story Generator",
      desc: [
        { title: "Generates stories dynamically based on user-selected mood" },
        { title: "Built using React (frontend) and Flask (backend)" },
        { title: "Integrated Cohere API for AI text generation and narration" },
      ],
      image: mood,
      siteLink: "https://tony-tales.onrender.com/",
      RepoLink: "https://github.com/msv6264/tony_tales",
    },
  
    {
      title: "Music Nest",
      desc: [
        { title: "Interactive music platform with responsive UI and media controls" },
        { title: "Built using React with component-based architecture" },
        { title: "Focused on performance, layout design, and user experience" },
      ],
      image: musNest,
      siteLink: "https://musicnest.netlify.app/",
      RepoLink: "https://github.com/msv6264/Music-nest",
    },
  
   {
      title: "DocForU (Stealth Micro-SaaS)",
      desc: [
        { title: "AI-powered platform for generating structured documents and presentations with fine-grained control over sections, headings, and content distribution" },
        { title: "Designed a multi-service architecture (React + Node.js + FastAPI) to separate AI orchestration, business logic, and document rendering" },
        { title: "Implemented structured JSON pipelines to convert AI output into native formats like PPTX using a dedicated Python rendering service" },
        { title: "Currently transitioning from global state to Supabase for persistent storage and scalable data flow across sessions" },
      ],
      image: dForU,
      siteLink: "#",
      RepoLink: "#",
    }
  ];

  return (
    <div>
      {/* For larger screens */}
      <div className="hidden ms:flex w-full h-full">
        <ProjBig webProjects={webProjects} githubWhite={githubIcon} />
      </div>

      {/* For medium screens */}
      <div className="hidden md:flex ms:hidden w-full h-full">
        <ProjMed webProjects={webProjects} githubWhite={githubIcon} />
      </div>

      {/* For small screens */}
      <div className="md:hidden w-full h-full">
        <ProjSmall webProjects={webProjects} githubWhite={githubIcon} />
      </div>
    </div>
  );
}
