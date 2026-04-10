import React from 'react';
import gssoc from "../assets/GSSOC_img.png";
import swoc from "../assets/SWOC_img.png";
import acwoc from "../assets/ACWOC_img.png";
import home from "../assets/home.svg";
import { useNavigate } from "react-router-dom";
import { duration } from '@mui/material';

export default function Experience() {
  const navigate = useNavigate();

  const exp = [
    {
      expName: "Open Source contributor",
      expIcon: gssoc,
      duration: "Oct 2024 - Nov 2024",
      desc:[
        {pt: "Collaborated with project managers and like fellow contributors, made some meaningful contributions."},
        {pt: "Learned and applied real-world collaboration through Git and GitHub."},
        {pt: "Solved many issues including Ul enhancements, bug fixes, and feature development."},
        {pt: "Improved dark mode contrast to enhance accessibility and UX."}
      ],
      skills: "HTML, CSS, JS, React, Git, GitHub",
    },
    {
      expName: "Open Source contributor",
      expIcon: swoc,
      duration: "Jan 2025 - Mar 2025",
      desc:[
        {pt: "Contributed to 6 amazing projects, created animations, preloaders, Fixed bugs, enhanced UI"},
        {pt: "I am familiar with version control systems like git which makes the work flow easier"},
        {pt: "Achieved 23rd rank amoung 22k people."},
        {pt: "Received 810 points which are awarded according to the level of contributions starting from 10 points."},
      ],
      skills: "HTML, CSS, JS, React, Git, GitHub, Tailwind css, Bootstrap",
    },
    {
      expName: "Open Source contributor",
      expIcon: acwoc,
      duration: "Feb 2025 - Mar 2025",
      desc:[
        {pt: "Contributed to some amazing projects, designed logo's, created animations, preloaders, Fixed bugs, enhanced UI"},
        {pt: "I collaborate with project managers and mentors to successfully implement anything."},
        {pt: "Ranked 14th and received digital badge."},
        {pt: "Also rewarded top contributor certificate."},
      ],
      skills: "HTML, CSS, JS, React, Git, GitHub, Tailwind css, Bootstrap",
    },
  ]

  return (
    <div className="bg-[#050619] min-h-screen w-full m-auto p-3">
      <div className="homeIcon w-12 h-12 rounded-full border border-[aqua] flex items-center cursor-pointer justify-center relative sm:absolute m-3" onClick={() => navigate("/")} >
          <img src={home} onClick={() => navigate("/")} className="w-8 h-8 text-center mt-0 mb-0 sm:mt-1  sm:text-left relative cursor-pointer" />
      </div>

      <div className=' text-center text-white text-3xl mt-8  '>𝑶𝑷𝑬𝑵 𝑺𝑶𝑼𝑹𝑪𝑬 𝑪𝑶𝑵𝑻𝑹𝑰𝑩𝑼𝑻𝑰𝑶𝑵𝑺</div>
      <div className=' flex items-center flex-col justify-center mt-[3%]'>
        <img 
          className="w-[550px] cursor-pointer object-contain object-top overflow-hidden"
          src={gssoc} 
          alt="GSSoC"
        />

        <img 
          className="w-[550px] cursor-pointer object-contain object-top overflow-hidden "
          src={swoc} 
          alt="swoc"
        />

        <img 
          className="w-[550px] cursor-pointer object-contain object-top overflow-hidden "
          src={acwoc} 
          alt="acwoc"
        />

      </div>
    </div>
  );
}
