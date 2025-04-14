import gif from "../assets/frame2.gif";
import home from "../assets/home.svg";
import about from "../assets/about.svg";
import skills from "../assets/skills.svg";
import projects from "../assets/projects.svg";
import experience from "../assets/experience.svg";
import contact from "../assets/contact.svg";
import { use, useState } from "react";

function Home() {
  const radius = 250;
  const icons = [home, about, skills, projects, experience, contact];
  const [rotate, setRotate] = useState(false);

  return (
    <div className="bg-[#050619] min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Center GIF */}
      <img src={gif} className="w-96 z-10 rounded-full" />

      {/* Circular Orbit Border */}
      <div className="w-[500px] h-[500px] absolute rounded-full border-2 border-[aqua] opacity-30"></div>

      {/* Rotating Orbit */}
      <div className={`absolute w-[500px] h-[500px] rounded-full ${rotate ? "" : "animate-orbitSpin"}`}>
        {icons.map((icon, idx) => {
          const angle = (idx / icons.length) * 2 * Math.PI;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <div
              key={idx}
              className="w-12 h-12 absolute flex items-center justify-center"
              style={{
                transform: `translate(${250 + x - 24}px, ${250 + y - 24}px)`,
              }}
            >
              <div className= {`w-12 h-12 rounded-full border border-[aqua] flex items-center cursor-pointer justify-center ${rotate ? "" : "animate-iconSpin"} `}
              onMouseEnter={() => {setRotate(true)}}
              onMouseLeave={() => {setRotate(false)}}
              >
                <img src={icon} className="w-7 cursor-pointer h-7" />
              </div>
            </div>
          );          
        })}
      </div>
    </div>
  );
}

export default Home;
