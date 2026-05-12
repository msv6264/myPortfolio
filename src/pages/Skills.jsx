import python from "../assets/python_icon.webp";
import c from "../assets/clang_icon.png";
import html from "../assets/icon-html.svg";
import css from "../assets/icon-css.svg";
import js from "../assets/js.svg";
import bootstrap from "../assets/bootstrap.png";
import react from "../assets/react.png";
import git from "../assets/git.png";
import gitHub from "../assets/github-icon.svg";
import tailwind from "../assets/tailwind-icon.svg";
import { useNavigate } from "react-router-dom";
import home from "../assets/home.svg";
import fstApi from "../assets/fstApi.png";
import flsk from "../assets/flsk.png";
import nodeIcon from "../assets/nodeIcon.png";
import xprss from "../assets/xprss.png";
import mngo from "../assets/mngo.png";

function Skills() {
  const navigate = useNavigate();

  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { skillName: "HTML", iconWidth: "120px", iconSrc: html },
        { skillName: "CSS", iconWidth: "120px", iconSrc: css },
        { skillName: "JavaScript", iconWidth: "80px", iconSrc: js },
        { skillName: "React", iconWidth: "100px", iconSrc: react },
        { skillName: "Tailwind CSS", iconWidth: "100px", iconSrc: tailwind },
        { skillName: "Bootstrap", iconWidth: "90px", iconSrc: bootstrap },
      ],
    },
    {
      category: "Backend",
      skills: [
        { skillName: "Node.js", iconWidth: "100px", iconSrc: nodeIcon },
        { skillName: "Express.js", iconWidth: "100px", iconSrc: xprss },
        { skillName: "Flask", iconWidth: "100px", iconSrc: flsk },
        { skillName: "FastAPI", iconWidth: "90px", iconSrc: fstApi },
      ],
    },
    {
      category: "Databases & Tools",
      skills: [
        { skillName: "MongoDB", iconWidth: "100px", iconSrc: mngo },
        { skillName: "Git", iconWidth: "100px", iconSrc: git },
        { skillName: "GitHub", iconWidth: "100px", iconSrc: gitHub },
      ],
    },
    {
      category: "Languages",
      skills: [
        { skillName: "Python", iconWidth: "90px", iconSrc: python },
        { skillName: "C", iconWidth: "90px", iconSrc: c },
        { skillName: "JavaScript", iconWidth: "80px", iconSrc: js },
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#050619] via-[#0f0f2e] to-[#050619] min-h-screen w-full relative overflow-hidden">
      {/* Home Icon */}
      <div
        className="w-12 h-12 rounded-full border border-cyan-400 flex items-center cursor-pointer justify-center fixed md:absolute top-4 md:top-8 left-4 md:left-8 z-50 bg-[#050619]/80 backdrop-blur-sm hover:bg-cyan-400/10 transition-all duration-300"
        onClick={() => navigate("/")}
      >
        <img
          src={home}
          className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
          alt="Home"
        />
      </div>

      {/* Header Section */}
      <div className="pt-20 md:pt-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-6">
            Tech Stack
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl">
            A comprehensive collection of technologies and tools I've mastered
            throughout my development journey
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="px-4 md:px-8 py-12 md:py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {skillCategories.map((category, catIdx) => (
            <div key={catIdx}>
              {/* Category Title */}
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-8 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-blue-500"></div>
                {category.category}
              </h2>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="group relative">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl p-4 md:p-6 border border-gray-700 flex flex-col justify-center items-center gap-3 h-full hover:border-cyan-400/50 transition-all duration-300 cursor-pointer overflow-hidden">
                      {/* Gradient Background Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Content */}
                      <div className="relative z-10 flex flex-col items-center gap-2">
                        <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <img
                            style={{ width: skill.iconWidth, height: "auto" }}
                            src={skill.iconSrc}
                            alt={skill.skillName}
                            className="object-contain filter drop-shadow-lg"
                          />
                        </div>
                        <p className="text-sm md:text-base font-semibold text-gray-200 text-center group-hover:text-cyan-400 transition-colors">
                          {skill.skillName}
                        </p>
                      </div>

                      {/* Border Gradient */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/0 to-blue-500/0 group-hover:from-cyan-400/10 group-hover:via-blue-500/10 group-hover:to-transparent pointer-events-none transition-all duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Decoration */}
      <div className="pb-8 text-center">
        <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
          <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
          <span>Continuously learning new technologies</span>
          <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
