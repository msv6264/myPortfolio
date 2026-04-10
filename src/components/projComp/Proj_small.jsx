import React from "react";
import home from "../../assets/home.svg";
import { useNavigate } from "react-router-dom";

export default function Proj_small({ webProjects, githubWhite }) {
  const navigate = useNavigate();

  return (
    <div className="bg-[#050619] w-full h-full text-white px-4">

      {/* Home Button */}
      <div
        className="w-10 h-10 rounded-full border border-cyan-400 flex items-center justify-center mb-6 cursor-pointer hover:scale-110 transition"
        onClick={() => navigate("/")}
      >
        <img src={home} className="w-6 h-6" />
      </div>

      {/* Title */}
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-2xl font-markoOne text-center mb-10">
        My Web Projects
      </div>

      {/* Cards */}
      <div className="space-y-8 pb-10">
        {webProjects.map((project, idx) => (
          <div
            key={idx}
            className="w-full rounded-2xl bg-[#1c1b29] border border-white/10 shadow-lg overflow-hidden"
          >
            {/* Image */}
            <div className="w-full h-[160px] overflow-hidden">
              <img
                src={project.image}
                className="w-full h-full object-cover"
                alt={project.title}
              />
            </div>

            {/* Content */}
            <div className="p-4">

              {/* Title + badge */}
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold">
                  {project.title}
                </h2>

                {project.featured && (
                  <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>

              {/* Description */}
              <div className="text-sm text-gray-400 space-y-1 mb-4">
                {project.desc.map((point, i) => (
                  <div key={i}>• {point.title}</div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() =>
                    window.open(project.siteLink, "_blank", "noopener,noreferrer")
                  }
                  className="flex-1 py-2 text-sm rounded-md bg-blue-600 hover:bg-blue-700 transition"
                >
                  Live
                </button>

                <button
                  onClick={() =>
                    window.open(project.RepoLink, "_blank", "noopener,noreferrer")
                  }
                  className="flex-1 py-2 text-sm rounded-md border border-white/20 hover:bg-white/10 transition flex items-center justify-center gap-2"
                >
                  Code
                  <img src={githubWhite} className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}