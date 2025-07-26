import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Home_big({icons, gif}) {
  const radius = 250;
  const navigate = useNavigate();
  const [rotate, setRotate] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className='bg-[#050619] min-h-screen w-full items-center justify-center flex relative overflow-hidden'>
      <img src={gif} className="w-96 z-10 rounded-full" />

      <div className="w-[500px] h-[500px] absolute rounded-full border-2 border-[aqua] opacity-30"></div>

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
                className="w-12 h-12 absolute flex items-center justify-center"
                style={{
                  transform: `translate(${250 + x - 24}px, ${250 + y - 24}px)`,
                }}
              >
                <div 
                  className={`w-12 h-12 rounded-full border border-[aqua] flex items-center cursor-pointer justify-center animate-iconSpin ${rotate ? "paused" : ""}`}
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
                  <img src={icon.src} className="w-7 h-7 cursor-pointer" />
                </div>
              </div>

              <div
                className="w-500 h-100 m-0 p-0 absolute"
                style={{
                  transform: `translate(${250 + x + labelOffsetX - 48}px, ${250 + y + labelOffsetY - 12}px)`,
                }}
              >
                <div
                  className="w-24 h-12 text-[aqua] flex items-center cursor-pointer justify-center animate-iconSpin"
                  style={{
                    // stops hidden icon name which is rotating
                    animationPlayState: rotate ? "paused" : "running",
                    // makes icon visible (which is hovered)
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
    </div>
  )
}
