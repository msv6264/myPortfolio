import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Home_big({ icons, gif }) {
  const radius = 250;
  const navigate = useNavigate();
  const [rotate, setRotate] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="bg-gradient-to-b from-[#050619] via-[#0f0f2e] to-[#050619] min-h-screen w-full items-center justify-center flex relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      {/* GIF Container */}
      <img
        src={gif}
        className="w-96 z-20 rounded-full shadow-2xl shadow-cyan-400/20"
        alt="Profile"
      />

      {/* Outer Ring */}
      <div className="w-[500px] h-[500px] absolute rounded-full border-2 border-cyan-400/30 opacity-50 shadow-lg shadow-cyan-400/10"></div>

      {/* Middle Ring */}
      <div className="w-[400px] h-[400px] absolute rounded-full border-2 border-blue-500/20 opacity-30"></div>

      {/* Rotating Orbit */}
      <div
        className={`absolute w-[500px] h-[500px] rounded-full animate-orbitSpin ${rotate ? "paused" : ""}`}
      >
        {icons.map((icon, idx) => {
          const angle = (idx / icons.length) * 2 * Math.PI;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          const labelOffsetX = Math.cos(angle) * 69;
          const labelOffsetY = Math.sin(angle) * 69;

          return (
            <div key={idx}>
              <div
                className="w-12 h-12 absolute flex items-center justify-center z-30"
                style={{
                  transform: `translate(${250 + x - 24}px, ${250 + y - 24}px)`,
                }}
              >
                <div
                  className={`w-12 h-12 rounded-full border-2 border-cyan-400 flex items-center cursor-pointer justify-center animate-iconSpin ${rotate ? "paused" : ""} group hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300`}
                  onMouseEnter={() => {
                    setRotate(true);
                    setHoveredIndex(idx);
                  }}
                  onMouseLeave={() => {
                    setRotate(false);
                    setHoveredIndex(null);
                  }}
                  onClick={() => {
                    if (icon.isPdf) {
                      window.open(icon.path, "_blank");
                    } else {
                      navigate(icon.path);
                    }
                  }}
                >
                  <img
                    src={icon.src}
                    className="w-6 h-6 cursor-pointer group-hover:scale-125 transition-transform duration-300"
                    alt={icon.name}
                  />
                </div>
              </div>

              {/* Label */}
              <div
                className="absolute"
                style={{
                  transform: `translate(${250 + x + labelOffsetX - 48}px, ${250 + y + labelOffsetY - 12}px)`,
                }}
              >
                <div
                  className="w-24 h-12 text-cyan-300 flex items-center cursor-pointer justify-center animate-iconSpin font-semibold text-sm bg-gradient-to-r from-gray-900/90 to-gray-800/90 border border-cyan-400/30 rounded-lg px-3 py-2 shadow-lg"
                  style={{
                    animationPlayState: rotate ? "paused" : "running",
                    visibility: hoveredIndex === idx ? "visible" : "hidden",
                  }}
                >
                  {icon.name}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Glow Effect */}
      <div className="absolute w-96 h-96 rounded-full border border-cyan-400/10 animate-pulse"></div>
    </div>
  );
}
