import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home_small({ icons, gif }) {
  const navigate = useNavigate();

  const topIcons = icons.slice(0, 3);
  const bottomIcons = icons.slice(3, 6);

  return (
    <div className="bg-gradient-to-b from-[#050619] via-[#0f0f2e] to-[#050619] relative h-screen w-full flex flex-col items-center justify-center gap-4 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      {/* Top Icons */}
      <div className="absolute top-0 flex items-start justify-center gap-4 p-4 z-20 w-full pt-8">
        {topIcons.map((icon, idx) => (
          <div
            key={idx}
            className="group w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-cyan-400 flex items-center justify-center cursor-pointer hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300"
            onClick={() => {
              if (icon.isPdf) {
                window.open(icon.path, "_blank");
              } else {
                navigate(icon.path);
              }
            }}
            title={icon.name}
          >
            <img
              src={icon.src}
              className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-125 transition-transform duration-300"
              alt={icon.name}
            />
          </div>
        ))}
      </div>

      {/* Center GIF */}
      <div className="w-[90%] max-w-xs flex justify-center items-center z-10 rounded-full shadow-2xl shadow-cyan-400/20 mt-8">
        <img src={gif} className="w-full rounded-full" alt="Animated Gif" />
      </div>

      {/* Bottom Icons */}
      <div className="absolute bottom-0 flex items-end justify-center gap-4 p-4 z-20 w-full pb-8">
        {bottomIcons.map((icon, idx) => (
          <div
            key={idx}
            className="group w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-cyan-400 flex items-center justify-center cursor-pointer hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300"
            onClick={() => {
              if (icon.isPdf) {
                window.open(icon.path, "_blank");
              } else {
                navigate(icon.path);
              }
            }}
            title={icon.name}
          >
            <img
              src={icon.src}
              className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-125 transition-transform duration-300"
              alt={icon.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
