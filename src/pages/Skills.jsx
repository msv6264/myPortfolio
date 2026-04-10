import python from "../assets/python_icon.webp";
import c from "../assets/clang_icon.png";
import html from "../assets/icon-html.svg";
import css from "../assets/icon-css.svg";
import js from "../assets/js.svg";
import bootstrap from "../assets/bootstrap.png";
import react from "../assets/react.png";
import git from "../assets/git.png";
import gitHub from "../assets/github-icon.svg";
import tailwind from "../assets/tailwind-icon.svg";
import { useNavigate } from "react-router-dom";
import home from "../assets/home.svg";
import fstApi from "../assets/fstApi.png";
import flsk from "../assets/flsk.png";
import nodeIcon from "../assets/nodeIcon.png";
import xprss from "../assets/xprss.png";

function Skills() {
  const navigate = useNavigate();
  const skillObj = [
    {
      skillName: "HTML",
      iconWidth: "120px",
      iconSrc: html,
    },
    {
      skillName: "CSS",
      iconWidth: "120px",
      iconSrc: css,
    },
    {
      skillName: "JS",
      iconWidth: "80px",
      iconSrc: js,
    },
    {
      skillName: "React",
      iconWidth: "100px",
      iconSrc: react,
    },
    {
      skillName: "Flask",
      iconWidth: "100px",
      iconSrc: flsk,
    },
    {
      skillName: "NodeJs",
      iconWidth: "100px",
      iconSrc: nodeIcon,
    },
    {
      skillName: "ExpressJS",
      iconWidth: "100px",
      iconSrc: xprss,
    },
    {
      skillName: "FastAPI",
      iconWidth: "90px",
      iconSrc: fstApi,
    },
    {
      skillName: "Bootstrap",
      iconWidth: "90px",
      iconSrc: bootstrap,
    },
    {
      skillName: "Tailwind CSS",
      iconWidth: "100px",
      iconSrc: tailwind,
    },
    {
      skillName: "C language",
      iconWidth: "90px",
      iconSrc: c,
    },
    {
      skillName: "Python",
      iconWidth: "90px",
      iconSrc: python,
    },
    {
      skillName: "Git",
      iconWidth: "100px",
      iconSrc: git,
    },
    {
      skillName: "GitHub",
      iconWidth: "100px",
      iconSrc: gitHub,
    },
  ];

  return (
    <div className="bg-[#050619] min-h-screen w-full relative overflow-hidden">
      <div
        className="homeIcon w-12 h-12 rounded-full border border-[aqua] flex items-center cursor-pointer justify-center absolute m-16"
        onClick={() => navigate("/")}
      >
        <img
          src={home}
          onClick={() => navigate("/")}
          className="w-8 h-8 cursor-pointer"
        />
      </div>

      <div className="flex flex-col  items-center mt-10 mb-14 gap-16">
        <div className="rounded-lg flex flex-col text-5xl winky-rough-header text-[#f7fb08]">
          Tech Stack
        </div>

        <div className="flex flex-wrap gap-20 winky-rough-header text-[aqua] text-xl pl-[8%] w-[60%]">
          {skillObj.map((skill, idx) => (
            <div
              key={idx}
              className="w-[180px] h-[180px] rounded-lg flex flex-col justify-center items-center shadow-lg shadow-[#7db4b4] hover:scale-110 transition-transform ease-in-out duration-300 gap-2"
            >
              <img
                style={{ width: skill.iconWidth }}
                src={skill.iconSrc}
                alt={skill.skillName}
              />
              <div>{skill.skillName}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
