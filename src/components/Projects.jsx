import React from 'react';
import netClone from "../assets/projImg_netflix.png";
import musNest from "../assets/projImg_mus.png";
import story from "../assets/storyGen.png";
import ProjSmall from "../components/Proj_small";
import ProjMed from "../components/Proj_med";
import ProjBig from "../components/Proj_big";
import githubIcon from "../assets/github-icon.svg";

export default function Projects() {

  const webProjects = [
    {
      title: "Mood -> story generator with TTS",
      desc: [
        {title: "Generates story according to user's mood"},
        {title: "It is made using COHERE AI API"},
        {title: "Tech: react, flask for backend"}
      ],
      image: story,
      siteLink: "",
      RepoLink: "https://github.com/msv6264/tony_tales"
    },

    {
      title: "Music Nest",
      desc: [
        {title: "Personalized Music Experience"},
        {title: "Creative UI Design"},
        {title: "Modular Components and Clean Structure"}
      ],
      image: musNest,
      siteLink: "https://musicnest.netlify.app/",
      RepoLink: "https://github.com/msv6264/Music-nest"
    },

    {
      title: "Netflix Clone",
      desc: [
        {title: "Responsive UI Design"},
        {title: "Interactive Homepage"},
        {title: "Real-World Project Practice"}
      ],
      image: netClone,
      siteLink: "https://myflix123.netlify.app/",
      RepoLink: "https://github.com/msv6264/Clone-Netflix"
    }
  ]

  return (
    <div>

      {/* For larger screens */}
      <div className="hidden ms:flex w-full h-full">
        <ProjBig webProjects={webProjects} githubWhite = {githubIcon} />
      </div>

      {/* For medium screens */}
      <div className="hidden md:flex ms:hidden w-full h-full">
        <ProjMed webProjects={webProjects} githubWhite = {githubIcon} />
      </div>

      {/* For small screens */}
      <div className="md:hidden w-full h-full">
        <ProjSmall webProjects={webProjects} githubWhite = {githubIcon} />
      </div>
    </div>
  )
}