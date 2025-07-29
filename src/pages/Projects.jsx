import React from "react";
import musNest from "../assets/projImg_mus.png";
import ProjSmall from "../components/projComp/Proj_small";
import ProjMed from "../components/projComp/Proj_med";
import ProjBig from "../components/projComp/Proj_big";
import githubIcon from "../assets/github-icon.svg";
import mood from "../assets/moodProj.png";
import rGenie from "../assets/resGenie.png";

export default function Projects() {
  const webProjects = [
    {
      title: "Resume Genie",
      desc: [
        { title: "Resume Genie generates ATS friendly resume" },
        {
          title: "Takes users linkedin data or chats with user to get details",
        },
        { title: "Highly reliable and efficient" },
      ],
      image: rGenie,
      siteLink: "/resume-genie",
      RepoLink: "https://github.com/msv6264/Clone-Netflix",
    },

    {
      title: "Mood to story generator",
      desc: [
        { title: "Generates story according to mood selected." },
        { title: "React in frontend and flask as backend." },
        { title: "Uses cohere API to generate story." },
      ],
      image: mood,
      siteLink: "https://tony-tales.onrender.com/",
      RepoLink: "https://github.com/msv6264/tony_tales",
    },

    {
      title: "Music Nest",
      desc: [
        { title: "Personalized Music Experience" },
        { title: "Creative UI Design" },
        { title: "Modular Components and Clean Structure" },
      ],
      image: musNest,
      siteLink: "https://musicnest.netlify.app/",
      RepoLink: "https://github.com/msv6264/Music-nest",
    },
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
