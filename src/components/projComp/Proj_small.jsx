import React from "react";
import home from "../../assets/home.svg";
import { useNavigate } from "react-router-dom";

export default function Proj_small({ webProjects, githubWhite }) {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-[#050619] via-[#0f0f2e] to-[#050619] w-full h-full text-white px-4 py-8 relative overflow-y-auto">
      {/* Background Decoration */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      {/* Home Button */}
      <div
        className="w-10 h-10 rounded-full border-2 border-cyan-400 flex items-center justify-center mb-6 cursor-pointer hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300"
        onClick={() => navigate("/")}
      >
        <img
          src={home}
          className="w-6 h-6 hover:scale-110 transition-transform"
          alt="Home"
        />
      </div>

      {/* Title */}
      <div className="relative z-10 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent text-2xl font-bold text-center mb-10">
        My Web Projects
      </div>

      {/* Cards */}
      <div className="relative z-10 space-y-6 pb-10 max-w-2xl mx-auto">
        {webProjects.map((project, idx) => (
          <div
            key={idx}
            className="group w-full rounded-2xl bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 border border-gray-700 shadow-lg overflow-hidden hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-400/20 transition-all duration-300"
          >
            {/* Image */}
            <div className="w-full h-[180px] overflow-hidden border-b border-gray-700 group-hover:border-cyan-400/50 transition-colors">
              <img
                src={project.image}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                alt={project.title}
              />
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Title + Badge */}
              <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
                <h2 className="text-lg md:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h2>

                {project.featured && (
                  <span className="text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full font-semibold">
                    ⭐ Featured
                  </span>
                )}
              </div>

              {/* Divider */}
              <div className="h-0.5 w-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-4"></div>

              {/* Description */}
              <div className="text-sm text-gray-300 space-y-2 mb-6">
                {project.desc.map((point, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-cyan-400 flex-shrink-0">▸</span>
                    <span>{point.title}</span>
                  </div>
                ))}
              </div>

              {/* Skills */}
              {project.skills?.length > 0 && (
                <div className="mb-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-300/90 mb-2">
                    Skills Used
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-full border border-cyan-400/35 bg-cyan-400/10 text-cyan-100 text-[11px] font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() =>
                    window.open(
                      project.siteLink,
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
                  className="flex-1 py-2 px-3 text-sm font-semibold rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 hover:-translate-y-1"
                >
                  🔗 Live
                </button>

                <button
                  onClick={() =>
                    window.open(
                      project.RepoLink,
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
                  className="flex-1 py-2 px-3 text-sm font-semibold rounded-lg border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-400/20 hover:-translate-y-1"
                >
                  <img src={githubWhite} className="w-4 h-4" alt="GitHub" />
                  Code
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
