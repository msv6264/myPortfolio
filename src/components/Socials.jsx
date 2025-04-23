import React from "react";
import bg from "../assets/linktreeBG.jpg";

function Socials() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white p-5 backdrop-blur-sm"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${bg})`,
      }}
    >
      <div className="max-w-2xl mx-auto bg-[#28284a] p-6 rounded-lg font-josefin">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">Hello👋🏻, Welcome to my link tree 🌲</h1>
        <h2 className="text-xl md:text-2xl text-center mb-6">Here you can find all my socials 😊</h2>

        <div className="space-y-4">
          {/* LinkedIn */}
          <div className="flex items-center gap-6 bg-[#464278] p-4 rounded-lg md:pl-32 hover:scale-105 transition-transform">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s"
              alt="LinkedIn Logo"
              className="w-12 h-12 rounded-lg hover:scale-125 transition-transform"
            />
            <a href="https://www.linkedin.com/in/sri-vaishnavi-95023630a/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-pink-300">
              LinkedIn
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-6 bg-[#464278] p-4 rounded-lg md:pl-32 hover:scale-105 transition-transform">
            <img
              src="https://images.seeklogo.com/logo-png/30/2/github-logo-png_seeklogo-304612.png"
              alt="GitHub Logo"
              className="w-12 h-12 rounded-lg hover:scale-125 transition-transform"
            />
            <a href="https://github.com/msv6264/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-pink-300">
              GitHub
            </a>
          </div>

          {/* GeeksforGeeks */}
          <div className="flex items-center gap-6 bg-[#464278] p-5 rounded-lg md:pl-32 hover:scale-105 transition-transform">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/GeeksforGeeks.svg/2560px-GeeksforGeeks.svg.png"
              alt="GeeksforGeeks Logo"
              className="w-12 h-10 rounded-lg hover:scale-125 transition-transform"
            />
            <a href="https://www.geeksforgeeks.org/user/srivaishng3dz/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-pink-300">
              GeeksforGeeks
            </a>
          </div>

          {/* LeetCode */}
          <div className="flex items-center gap-6 bg-[#464278] p-4 rounded-lg md:pl-32 hover:scale-105 transition-transform">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/8e/LeetCode_Logo_1.png"
              alt="LeetCode Logo"
              className="w-12 h-12 rounded-lg hover:scale-125 transition-transform"
            />
            <a href="https://leetcode.com/u/wRKsrodbvG/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-pink-300">
              LeetCode
            </a>
          </div>

          {/* Twitter */}
          <div className="flex items-center gap-6 bg-[#464278] p-4 rounded-lg md:pl-32 hover:scale-105 transition-transform">
            <img
              src="https://images.freeimages.com/image/grids/9fe/x-twitter-light-grey-logo-5694251.png"
              alt="Twitter Logo"
              className="w-12 h-12 rounded-lg hover:scale-125 transition-transform"
            />
            <a href="https://x.com/sri_vaish19912" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-pink-300">
              Twitter
            </a>
          </div>

          {/* Instagram */}
          <div className="flex items-center gap-6 bg-[#464278] p-4 rounded-lg md:pl-32 hover:scale-105 transition-transform">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgliJ7D4iSASNLkZIMCmN6ulNfLUkjObKbUA&s"
              alt="Instagram Logo"
              className="w-12 h-12 rounded-lg hover:scale-125 transition-transform"
            />
            <a href="https://www.instagram.com/msv89_99/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-pink-300">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Socials;
