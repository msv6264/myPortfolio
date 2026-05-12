import React from "react";
import bg from "../assets/linktreeBG.jpg";
import home from "../assets/home.svg";
import lnkdIn from "../assets/lnkedIn.png"
import gthb from "../assets/gthb.png"
import gfg from "../assets/gfg.png"
import ltcde from "../assets/ltcde.png"
import twtter from "../assets/twtter.png"
import instgrm from "../assets/instgrm.png"
import { useNavigate } from "react-router-dom";

function Socials() {
  const navigate = useNavigate();
  const mylinks = [
    {
      name: "LinkedIn",
      source: lnkdIn,
      altName: "LinkedIn Logo",
      link: "https://www.linkedin.com/in/sri-vaishnavi-95023630a",
      color: "from-blue-600 to-blue-400",
      icon: "💼",
    },
    {
      name: "GitHub",
      source: gthb,
      altName: "GitHub Logo",
      link: "https://github.com/msv6264",
      color: "from-gray-700 to-gray-500",
      icon: "🐙",
    },
    {
      name: "GeeksforGeeks",
      source: gfg,
      altName: "GeeksforGeeks Logo",
      link: "https://www.geeksforgeeks.org/user/srivaishng3dz",
      color: "from-green-600 to-green-400",
      icon: "📚",
    },
    {
      name: "LeetCode",
      source: ltcde,
      link: "https://leetcode.com/u/wRKsrodbvG",
      color: "from-yellow-600 to-yellow-400",
      icon: "💻",
    },
    {
      name: "Twitter",
      source: twtter,
      altName: "Twitter Logo",
      link: "https://x.com/sri_vaish19912",
      color: "from-slate-700 to-slate-500",
      icon: "𝕏",
    },
    {
      name: "Instagram",
      source: instgrm,
      altName: "Instagram Logo",
      link: "https://www.instagram.com/msv89_99",
      color: "from-pink-600 to-purple-600",
      icon: "📷",
    },
  ];

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat text-white p-4 md:p-8 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(5, 6, 25, 0.85), rgba(15, 15, 46, 0.85)), url(${bg})`,
      }}
    >
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

      {/* Content */}
      <div className="max-w-2xl mx-auto pt-12 md:pt-20">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
            Let's Connect! 🌐
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            Find me on all these platforms and let's collaborate, chat, or just
            say hello! 👋
          </p>
        </div>

        {/* Social Links */}
        <div className="space-y-4 md:space-y-6 mb-12">
          {mylinks.map((obj, idx) => {
            return (
              <a
                key={idx}
                href={obj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div
                  className={`relative bg-gradient-to-r ${obj.color} p-[2px] rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300`}
                >
                  <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-6 md:p-8 flex items-center gap-6 group-hover:-translate-y-1 transition-transform duration-300">
                    {/* Icon/Image Container */}
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-gray-700 group-hover:border-cyan-400/50">
                      <img
                        src={obj.source}
                        alt={obj.altName}
                        className="w-10 h-10 md:w-12 md:h-12 object-contain filter drop-shadow-lg"
                      />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {obj.name}
                      </h3>
                      <p className="text-gray-400 text-sm md:text-base mt-1">
                        Click to visit my profile →
                      </p>
                    </div>

                    {/* Arrow Icon */}
                    <div className="flex-shrink-0 text-2xl md:text-3xl group-hover:translate-x-2 transition-transform duration-300">
                      {obj.icon}
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Footer Message */}
        <div className="text-center space-y-4">
          <p className="text-gray-400 text-sm md:text-base">
            You can also reach me via email or just explore my work on any of
            these platforms
          </p>
          <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
            <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
            <span>Available for opportunities & collaborations</span>
            <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Socials;
