import React from "react";
import bg from "../assets/linktreeBG.jpg";
import home from "../assets/home.svg";
import { useNavigate } from "react-router-dom";

function Socials() {
  const navigate = useNavigate();
  const mylinks = [
    {
      name: "LinkedIn",
      source:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s",
      altName: "LinkedIn Logo",
      link: "https://www.linkedin.com/in/sri-vaishnavi-95023630a",
    },
    {
      name: "GitHub",
      source:
        "https://images.seeklogo.com/logo-png/30/2/github-logo-png_seeklogo-304612.png",
      altName: "GitHub Logo",
      link: "https://github.com/msv6264",
    },
    {
      name: "GeeksforGeeks",
      source:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/GeeksforGeeks.svg/2560px-GeeksforGeeks.svg.png",
      altName: "GeeksforGeeks Logo",
      link: "https://www.geeksforgeeks.org/user/srivaishng3dz",
    },
    {
      name: "LeetCode",
      source:
        "https://upload.wikimedia.org/wikipedia/commons/8/8e/LeetCode_Logo_1.png",
      altName: "LeetCode Logo",
      link: "https://leetcode.com/u/wRKsrodbvG",
    },
    {
      name: "Twitter",
      source:
        "https://images.freeimages.com/image/grids/9fe/x-twitter-light-grey-logo-5694251.png",
      altName: "Twitter Logo",
      link: "https://x.com/sri_vaish19912",
    },
    {
      name: "Instagram",
      source:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgliJ7D4iSASNLkZIMCmN6ulNfLUkjObKbUA&s",
      altName: "Instagram Logo",
      link: "https://www.instagram.com/msv89_99",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white p-5 backdrop-blur-sm"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${bg})`,
      }}
    >
      <div
        className="homeIcon w-12 h-12 rounded-full border border-[aqua] flex items-center cursor-pointer justify-center absolute m-8"
        onClick={() => navigate("/")}
      >
        <img
          src={home}
          onClick={() => navigate("/")}
          className="w-7 h-7 cursor-pointer"
        />
      </div>
      <div className="max-w-2xl mx-auto bg-[#28284a] p-6 rounded-lg font-josefin">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Hello👋🏻, Welcome to my link tree 🌲
        </h1>
        <h2 className="text-xl md:text-2xl text-center mb-6">
          Here you can find all my socials 😊
        </h2>

        <div className="space-y-4">
          {mylinks.map((obj, idx) => {
            return (
              <div className="flex items-center gap-6 bg-[#464278] p-4 rounded-lg md:pl-32 hover:scale-105 transition-transform">
                <img
                  src={obj.source}
                  alt={obj.altName}
                  className="w-12 h-12 rounded-lg hover:scale-125 transition-transform"
                />
                <a
                  href={obj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-pink-300"
                >
                  {obj.name}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Socials;
