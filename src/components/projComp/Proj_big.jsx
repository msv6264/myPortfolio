import React from "react";
import home from "../../assets/home.svg";
import { useNavigate } from "react-router-dom";

export default function Proj_big({ webProjects, githubWhite }) {
  const navigate = useNavigate();

  return (
    <div className="bg-[#050619] w-full overflow-y-scroll h-screen text-white">

      {/* Home Button */}
      <div
        className="w-12 h-12 rounded-full border border-aqua flex items-center justify-center absolute m-16 cursor-pointer hover:scale-110 transition"
        onClick={() => navigate("/")}
      >
        <img src={home} className="w-8 h-8" />
      </div>

      {/* Title */}
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-3xl md:text-4xl font-markoOne text-center m-10 mb-14">
        From Code to Reality: My Practical Web Projects
      </div>

      {/* Cards */}
      <div className="relative space-y-24 mb-[6%]">
        {webProjects.map((project, idx) => (
          <div
            key={idx}
            className="flex flex-row m-auto gap-6 border border-white/10 rounded-[25px] bg-[#1c1b29] backdrop-blur-md shadow-xl w-[65%] hover:scale-[1.02] transition-all duration-300 sticky"
            style={{
              top: `calc(64px + ${idx * 37}px)`,
            }}
          >
            {/* Left */}
            <div className="w-[55%] p-[4%] mb-10">
              <div className="m-2">

                {/* Title + Featured */}
                <div className="flex items-center gap-3 mt-[5%] ml-[10%] mb-6">
                  <div className="font-markoOne text-white text-3xl">
                    {project.title}
                  </div>

                  {project.featured && (
                    <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                <hr className="m-[5%] border-t border-white/10" />

                {/* Buttons */}
                <div className="flex gap-6 mt-8 justify-center">
                  <div
                    className="rounded-[12px] text-sm bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 flex items-center justify-center font-semibold gap-2 cursor-pointer hover:scale-105 transition-all"
                    onClick={() =>
                      window.open(project.siteLink, "_blank", "noopener,noreferrer")
                    }
                  >
                    Live site ↗
                  </div>

                  <div
                    className="rounded-[12px] text-sm bg-white/10 px-4 py-2 flex items-center justify-center font-semibold gap-3 cursor-pointer hover:bg-white/20 transition-all"
                    onClick={() =>
                      window.open(project.RepoLink, "_blank", "noopener,noreferrer")
                    }
                  >
                    Source
                    <img src={githubWhite} className="w-5 h-5" />
                    ↗
                  </div>
                </div>

                {/* Description */}
                <div className="text-[#a1a1b5] font-inria mt-8 ml-4 text-sm leading-relaxed">
                  {project.desc.map((point, i) => (
                    <div key={i} className="mb-1 ml-4">
                      • {point.title}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-[40%] h-[250px] m-auto rounded-xl overflow-hidden shadow-lg">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                src={project.image}
                alt={project.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}