import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home_small({ icons, gif }) {
  const navigate = useNavigate();

  const topIcons = icons.slice(0, 3);
  const bottomIcons = icons.slice(3, 6);

  return (
    <div className="bg-[#050619] absolute h-screen w-full flex flex-row items-center justify-center gap-4 overflow-hidden">

      {/* top Icons */}
      <div className="absolute flex items-start h-screen justify-center gap-7 p-4 z-20">
        {topIcons.map((icon, idx) => (
          <div
            key={idx}
            className="w-12 h-12 rounded-full border border-aqua flex items-center justify-center cursor-pointer"
            onClick={() => {
              if (icon.isPdf) {
                window.open(icon.path, "_blank");
              } else {
                navigate(icon.path);
              }
            }}
          >
            <img src={icon.src} className="w-7 h-7" alt={`icon-${idx}`} />
          </div>
        ))}
      </div>

      {/* Center GIF */}
      <div className="w-[95%] flex justify-center items-center z-10">
        <img src={gif} className='w-full' alt="Animated Gif" />
      </div>

      {/* bottom Icons */}
      <div className="absolute flex items-end h-screen justify-center gap-7 p-4 z-20">
        {bottomIcons.map((icon, idx) => (
          <div
            key={idx}
            className="w-12 h-12 rounded-full border border-aqua flex items-center justify-center cursor-pointer"
            onClick={() => {
              if (icon.isPdf) {
                window.open(icon.path, "_blank");
              } else {
                navigate(icon.path);
              }
            }}
          >
            <img src={icon.src} className="w-7 h-7" alt={`icon-${idx}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
