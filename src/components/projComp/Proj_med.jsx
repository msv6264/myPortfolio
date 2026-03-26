import React from "react";
import home from "../../assets/home.svg";
import { useNavigate } from "react-router-dom";

export default function Proj_med({ webProjects, githubWhite }) {
  const navigate = useNavigate();

  return (
    <div className="bg-[#050619] w-full overflow-y-scroll h-screen text-white">

      {/* Home Button */}
      <div
        className="w-12 h-12 rounded-full border border-cyan-400 flex items-center justify-center absolute m-16 cursor-pointer hover:scale-110 transition"
        onClick={() => navigate("/")}
      >
        <img src={home} className="w-8 h-8" />
      </div>

      {/* Title */}
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-3xl font-markoOne text-center m-10 mb-14">
        From Code to Reality: My Practical Web Projects
      </div>

      {/* Cards */}
      <div className="relative space-y-20 mb-[6%]">
        {webProjects.map((project, idx) => (
          <div
            key={idx}
            className="flex flex-row m-auto gap-6 border border-white/10 rounded-2xl bg-[#1c1b29] shadow-xl w-[80%] hover:scale-[1.02] transition-all duration-300 sticky"
            style={{
              top: `calc(64px + ${idx * 30}px)`,
            }}
          >
            {/* Left Content */}
            <div className="w-[55%] p-6">

              {/* Title + badge */}
              <div className="flex items-center gap-3 mb-4">
                <div className="font-markoOne text-white text-2xl">
                  {project.title}
                </div>

                {project.featured && (
                  <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>

              <hr className="border-white/10 mb-4" />

              {/* Description */}
              <div className="text-[#a1a1b5] text-sm leading-relaxed space-y-1">
                {project.desc.map((point, i) => (
                  <div key={i}>• {point.title}</div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="w-[45%] flex flex-col items-center justify-center p-4">

              {/* Image */}
              <div className="h-[180px] w-full rounded-xl overflow-hidden shadow-lg mb-6">
                <img
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  src={project.image}
                  alt={project.title}
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-3 w-full items-center">
                <div
                  className="rounded-lg text-sm bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 w-[70%] text-center font-semibold cursor-pointer hover:scale-105 transition"
                  onClick={() =>
                    window.open(project.siteLink, "_blank", "noopener,noreferrer")
                  }
                >
                  Live ↗
                </div>

                <div
                  className="rounded-lg text-sm bg-white/10 px-4 py-2 w-[70%] text-center font-semibold cursor-pointer hover:bg-white/20 transition flex items-center justify-center gap-2"
                  onClick={() =>
                    window.open(project.RepoLink, "_blank", "noopener,noreferrer")
                  }
                >
                  Code
                  <img src={githubWhite} className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}