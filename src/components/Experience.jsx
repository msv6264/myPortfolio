import React from 'react';
import gssoc from "../assets/GSSOC_img.png";
import swoc from "../assets/SWOC_img.png";
import acwoc from "../assets/ACWOC_img.png";
import home from "../assets/home.svg";
import { useNavigate } from "react-router-dom";

export default function Experience() {
  const navigate = useNavigate();

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
