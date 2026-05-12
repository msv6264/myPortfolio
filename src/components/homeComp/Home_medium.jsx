import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home_medium({ icons, gif }) {
  const navigate = useNavigate();

  const leftIcons = icons.slice(0, 3);
  const rightIcons = icons.slice(3, 6);

  return (
    <div className="bg-gradient-to-b from-[#050619] via-[#0f0f2e] to-[#050619] relative h-screen w-full flex flex-col items-center justify-center gap-4 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      {/* Left Icons */}
      <div className="absolute left-0 flex flex-col items-start h-screen justify-center gap-7 p-4 z-20">
        {leftIcons.map((icon, idx) => (
          <div
            key={idx}
            className="group w-12 h-12 rounded-full border-2 border-cyan-400 flex items-center justify-center cursor-pointer hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300"
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
              className="w-6 h-6 group-hover:scale-125 transition-transform duration-300"
              alt={icon.name}
            />
          </div>
        ))}
      </div>

      {/* Center GIF */}
      <div className="w-[65%] flex justify-center items-center z-10 rounded-full shadow-2xl shadow-cyan-400/20">
        <img src={gif} className="w-full rounded-full" alt="Animated Gif" />
      </div>

      {/* Right Icons */}
      <div className="absolute right-0 flex flex-col items-end h-screen justify-center gap-7 p-4 z-20">
        {rightIcons.map((icon, idx) => (
          <div
            key={idx}
            className="group w-12 h-12 rounded-full border-2 border-cyan-400 flex items-center justify-center cursor-pointer hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300"
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
              className="w-6 h-6 group-hover:scale-125 transition-transform duration-300"
              alt={icon.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
