import React from "react";
import ProjSmall from "../components/projComp/Proj_small";
import ProjMed from "../components/projComp/Proj_med";
import ProjBig from "../components/projComp/Proj_big";
import githubIcon from "../assets/github-icon.svg";
import mood from "../assets/mood.png";
import dForU from "../assets/doc4U.png";
import spndx from "../assets/spndx.png";

export default function Projects() {
  const webProjects = [
    {
      title: "Mood to Story Generator",
      skills: [
        "React",
        "Flask",
        "Cohere API",
        "REST API",
        "Prompt Engineering",
      ],
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
      title: "Spendyx",
      skills: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
      desc: [
        {
          title:
            "Built a full-stack expense tracking web application using React, Node.js, Express, and MongoDB with JWT-based authentication and protected routes, improving secure session handling by 40%",
        },
        {
          title:
            "Developed CRUD functionality for expense management and integrated REST APIs with frontend state management, reducing manual tracking effort by 50%",
        },
      ],
      image: spndx,
      siteLink: "https://spendyx-two.vercel.app",
      RepoLink: "https://github.com/msv6264/Spendyx",
    },

    {
      title: "DocForU",
      featured: true,
      skills: [
        "React",
        "FastAPI",
        "AI Orchestration",
        "Python rendering libraries",
      ],
      desc: [
        {
          title:
            "AI platform for generating structured documents and PPTs with controlled content layout",
        },
        {
          title:
            "Built a multi-service system for AI orchestration and document rendering",
        },
        {
          title:
            "Converts structured JSON into PPTX; adding Supabase for persistence",
        },
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
