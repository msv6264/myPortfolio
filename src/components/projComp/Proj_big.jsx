import React from "react";
import home from "../../assets/home.svg";
import { useNavigate } from "react-router-dom";

export default function Proj_big({ webProjects, githubWhite }) {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-[#050619] via-[#0f0f2e] to-[#050619] w-full overflow-y-scroll h-screen text-white relative">
      {/* Background Decoration */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
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
      <div className="relative z-10 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent text-3xl md:text-4xl font-bold text-center m-10 mb-14 pt-8">
        From Code to Reality: My Practical Web Projects
      </div>

      {/* Cards */}
      <div className="relative space-y-24 mb-[6%] px-8 max-w-7xl mx-auto">
        {webProjects.map((project, idx) => (
          <div
            key={idx}
            className="group relative flex flex-col lg:flex-row gap-8 border border-gray-700 rounded-3xl bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 backdrop-blur-md shadow-xl hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-400/20 transition-all duration-300 overflow-hidden p-8 lg:sticky"
            style={{
              top: `calc(64px + ${idx * 37}px)`,
              zIndex: idx + 1,
            }}
          >
            {/* Gradient Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Left Content */}
            <div className="relative z-10 lg:w-[55%] flex flex-col justify-center">
              {/* Title + Featured */}
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <h2 className="font-bold text-3xl text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h2>

                {project.featured && (
                  <span className="text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full font-semibold">
                    ⭐ Featured
                  </span>
                )}
              </div>

              <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-6"></div>

              {/* Description */}
              <div className="text-gray-300 font-medium space-y-3 mb-8">
                {project.desc.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1 flex-shrink-0">▸</span>
                    <p className="text-sm md:text-base leading-relaxed">
                      {point.title}
                    </p>
                  </div>
                ))}
              </div>

              {/* Skills */}
              {project.skills?.length > 0 && (
                <div className="mb-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/90 mb-3">
                    Skills Used
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full border border-cyan-400/35 bg-cyan-400/10 text-cyan-100 text-xs md:text-sm font-medium hover:border-cyan-300 hover:bg-cyan-400/15 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Buttons */}
              <div className="flex gap-4 flex-wrap">
                <button
                  className="relative px-6 py-3 font-semibold text-sm rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 hover:-translate-y-1"
                  onClick={() =>
                    window.open(
                      project.siteLink,
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
                >
                  🔗 Live Site
                </button>

                <button
                  className="px-6 py-3 font-semibold text-sm rounded-lg border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-400/20 hover:-translate-y-1"
                  onClick={() =>
                    window.open(
                      project.RepoLink,
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
                >
                  <img src={githubWhite} className="w-4 h-4" alt="GitHub" />
                  Source Code
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative z-10 lg:w-[45%] h-[250px] lg:h-auto rounded-2xl overflow-hidden shadow-lg border border-gray-700 group-hover:border-cyan-400/50 transition-all duration-300">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src={project.image}
                alt={project.title}
              />
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
