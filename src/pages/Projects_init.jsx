import React from 'react';
import calc from "../assets/calc.png";
import mus from "../assets/mus.png";
import note from "../assets/noteImg.png";
import tic from "../assets/ticTacToe.png";
import netf from "../assets/net_grp.png";
import { useState } from "react";

export default function Projects() {
  const radius = 550; 
  const centerX = 50;
  const centerY = 50;
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const allProjects = [
    {
      title: "Netflix Clone",
      techStack: [
        {pt: "HTML"},
        {pt: "CSS"},
      ],
      desc: [
        {pt: "This project is a clone of netflix"},
        {pt: "It is responsive and smooth"},
      ],
      liveLink: "",
      githubLink: "",
      bg: netf,
    },
    {
      title: "Tic tac toe game",
      techStack: [
        {pt: "Pure C"},
      ],
      desc: [
        {pt: "This is a terminal Tic tac toe game"},
        {pt: "Asks for symbols, don't accept other symbols"},
        {pt: "Works nicely and declares winners"},
      ],
      liveLink: "",
      githubLink: "https://github.com/msv6264/Tic-tac-toe-game-using-C",
      bg: tic,
    },
    {
      title: "Music nest website",
      techStack: [
        {pt: "HTML"},
        {pt: "CSS"},
        {pt: "JS"},
      ],
      desc: [
        {pt: "Music nest is a cozy music website which has songs which give relaxation."},
        {pt: "Plays music, working buttons, plays next song when current one finishes"},
        {pt: "Has different playlists"},
      ],
      liveLink: "https://musicnest.netlify.app/",
      githubLink: "https://github.com/msv6264/Music-nest",
      bg: mus,
    },
    {
      title: "Note taking app",
      techStack: [
        {pt: "HTML"},
        {pt: "CSS"},
        {pt: "JS"},
      ],
      desc: [
        {pt: "This is a cute note taking app project, it has a great UI"},
        {pt: "Uses local storage"},
        {pt: "Has delete and save options"},
      ],
      liveLink: "https://stellular-axolotl-d196d0.netlify.app/",
      githubLink: "https://github.com/msv6264/NoteTakingApp",
      bg: note,
    },
    {
      title: "Calculator",
      techStack: [
        {pt: "HTML"},
        {pt: "CSS"},
        {pt: "JS"},
      ],
      desc: [
        {pt: "This calculator is an aestic responsive calculator which is cute and works smoothly"},
        {pt: "Easy to use"},
        {pt: "Great for small projects"},
      ],
      liveLink: "https://math-made-simple.netlify.app/",
      githubLink: "https://github.com/msv6264/calculator",
      bg: calc,
    },
  ]

  return (
    <div className="bg-[#050619] min-h-screen w-full relative overflow-hidden flex items-center justify-center">
      <div className="relative w-full h-full">
        <div className="bg-[#1d1f34] w-[60%] aspect-[2/1] mx-auto rounded-t-full mt-[15%]">

        </div>

        {allProjects.map((proj, idx) => {
          const angle = Math.PI - (idx / (allProjects.length - 1)) * Math.PI;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius * -1; // Flip upward

          return (
            <div
              key={idx}
              className="w-[150px] h-[150px] absolute left-1/2"
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-112% + ${y}px))`,
              }}
            >
              <img 
                src={proj.bg} 
                alt={proj.title} 
                className="w-96 h-52 object-cover rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer" 
                onMouseEnter={() => {
                  setHoveredIndex(idx);
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                }}
              />
              <div
                className='text-[aqua]'
              >
                
              </div>
            </div>

          );
        })}
      </div>
    </div>
  )
}