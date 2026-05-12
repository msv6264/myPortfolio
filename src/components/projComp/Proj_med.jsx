import React from "react";
import home from "../../assets/home.svg";
import { useNavigate } from "react-router-dom";

export default function Proj_med({ webProjects, githubWhite }) {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-[#050619] via-[#0f0f2e] to-[#050619] w-full overflow-y-scroll h-screen text-white relative">
      {/* Background Decoration */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      {/* Home Button */}
      <div
        className="w-12 h-12 rounded-full border border-cyan-400 flex items-center justify-center fixed md:absolute top-8 left-8 z-50 cursor-pointer hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 bg-[#050619]/80 backdrop-blur-sm"
        onClick={() => navigate("/")}
      >
        <img
          src={home}
          className="w-6 h-6 hover:scale-110 transition-transform"
          alt="Home"
        />
      </div>

      {/* Title */}
      <div className="relative z-10 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent text-2xl md:text-3xl font-bold text-center m-10 mb-14 pt-8">
        From Code to Reality: My Practical Web Projects
      </div>

      {/* Cards */}
      <div className="relative space-y-20 mb-[6%] px-4 max-w-3xl mx-auto">
        {webProjects.map((project, idx) => (
          <div
            key={idx}
            className="group relative flex flex-col gap-6 border border-gray-700 rounded-3xl bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 shadow-xl hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-400/20 transition-all duration-300 overflow-hidden p-6"
            style={{
              top: `calc(64px + ${idx * 30}px)`,
              position: "sticky",
              zIndex: idx + 1,
            }}
          >
            {/* Gradient Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Content */}
            <div className="relative z-10">
              {/* Title + Badge */}
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <h2 className="font-bold text-2xl text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h2>

                {project.featured && (
                  <span className="text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full font-semibold">
                    ⭐ Featured
                  </span>
                )}
              </div>

              <div className="h-0.5 w-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-4"></div>

              {/* Description */}
              <div className="text-gray-300 text-sm leading-relaxed space-y-2 mb-6">
                {project.desc.map((point, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1 flex-shrink-0">▸</span>
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
                        className="px-2.5 py-1 rounded-full border border-cyan-400/35 bg-cyan-400/10 text-cyan-100 text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Image */}
            <div className="relative z-10 h-[200px] rounded-2xl overflow-hidden shadow-lg border border-gray-700 group-hover:border-cyan-400/50 transition-all duration-300">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                src={project.image}
                alt={project.title}
              />
            </div>

            {/* Buttons */}
            <div className="relative z-10 flex flex-col sm:flex-row gap-3 items-center justify-center">
              <button
                className="relative px-6 py-2 font-semibold text-sm rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 hover:-translate-y-1 flex-1 sm:flex-none"
                onClick={() =>
                  window.open(project.siteLink, "_blank", "noopener,noreferrer")
                }
              >
                🔗 Live Site
              </button>

              <button
                className="px-6 py-2 font-semibold text-sm rounded-lg border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-400/20 hover:-translate-y-1 flex-1 sm:flex-none"
                onClick={() =>
                  window.open(project.RepoLink, "_blank", "noopener,noreferrer")
                }
              >
                <img src={githubWhite} className="w-4 h-4" alt="GitHub" />
                Code
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Decoration */}
      <div className="relative z-10 pb-12 text-center">
        <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
          <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
          <span>More projects coming soon</span>
          <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
        </div>
      </div>
    </div>
  );
}
