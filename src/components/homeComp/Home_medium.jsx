import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home_medium({ icons, gif }) {
  const navigate = useNavigate();

  const leftIcons = icons.slice(0, 3);
  const rightIcons = icons.slice(3, 6);

  return (
    <div className="bg-[#050619] absolute h-screen w-full flex flex-col items-center justify-center gap-4 overflow-hidden">

      {/* Left Icons */}
      <div className="absolute left-0 flex flex-col items-start h-screen justify-center gap-7 p-4 z-20">
        {leftIcons.map((icon, idx) => (
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
      <div className="w-[65%] flex justify-center items-center z-10">
        <img src={gif} className='w-full' alt="Animated Gif" />
      </div>

      {/* Right Icons */}
      <div className="absolute right-0 flex flex-col items-end h-screen justify-center gap-7 p-4 z-20">
        {rightIcons.map((icon, idx) => (
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
