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
      featured: true,
      desc: [
        { title: "AI platform for generating structured documents and PPTs with controlled content layout" },
        { title: "Built a multi-service system for AI orchestration and document rendering" },
        { title: "Converts structured JSON into PPTX; adding Supabase for persistence" },
      ],
      image: dForU,
      siteLink: "https://doc-for-u.vercel.app",
      RepoLink: "https://github.com/msv6264",
    },
  ];

  return (
    <div>
      <div className="hidden ms:flex w-full h-full">
        <ProjBig webProjects={webProjects} githubWhite={githubIcon} />
      </div>

      <div className="hidden md:flex ms:hidden w-full h-full">
        <ProjMed webProjects={webProjects} githubWhite={githubIcon} />
      </div>

      <div className="md:hidden w-full h-full">
        <ProjSmall webProjects={webProjects} githubWhite={githubIcon} />
      </div>
    </div>
  );
}