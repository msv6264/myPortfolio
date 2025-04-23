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

function Skills(){
    const navigate = useNavigate();

    return(
        <div className="bg-[#050619] min-h-screen w-full relative overflow-hidden">
            <div className="homeIcon w-12 h-12 rounded-full border border-[aqua] flex items-center cursor-pointer justify-center absolute m-16" onClick={() => navigate("/")} >
                <img src={home} onClick={() => navigate("/")} className="w-8 h-8 cursor-pointer" />
            </div>
      
            <div className="flex flex-col  items-center mt-10 mb-14 gap-16">
                <div className="rounded-lg flex flex-col text-5xl winky-rough-header text-[#f7fb08]">
                    Tech Stack
                </div>
                
                <div className="flex flex-wrap gap-20 winky-rough-header text-[aqua] text-xl pl-[8%] w-[60%]">
                <div className="w-[180px] h-[180px] rounded-lg flex flex-col justify-center items-center shadow-lg shadow-[#7db4b4] hover:scale-110 transition-transform ease-in-out duration-300 gap-2">
                    <img className="w-20" src={c} alt="C language logo" />
                    <div>C language</div>
                </div>
                    
                    <div className="shadow-lg shadow-[#7db4b4] hover:scale-110 transition-transform ease-in-out duration-300 w-[180px] h-[180px] rounded-lg flex flex-col justify-center items-center gap-2">
                        <img className="w-20" src={python} /> 
                        <div>python</div>
                    </div>

                    <div className="shadow-lg shadow-[#7db4b4] hover:scale-110 transition-transform ease-in-out duration-300 w-[180px] h-[180px] rounded-lg flex flex-col justify-center items-center gap-2">
                        <img className="w-21" src={html} /> 
                        <div>HTML</div>
                    </div>

                    <div className="shadow-lg shadow-[#7db4b4] hover:scale-110 transition-transform ease-in-out duration-300 w-[180px] h-[180px] rounded-lg flex flex-col justify-center items-center gap-2">
                        <img className="w-21" src={css} /> 
                        <div>CSS</div>
                    </div>

                    <div className="shadow-lg shadow-[#7db4b4] hover:scale-110 transition-transform ease-in-out duration-300 w-[180px] h-[180px] rounded-lg flex flex-col justify-center items-center gap-2">
                        <img className="w-20" src={js} /> 
                        <div>JS</div>
                    </div>

                    <div className="shadow-lg shadow-[#7db4b4] hover:scale-110 transition-transform ease-in-out duration-300 w-[180px] h-[180px] rounded-lg flex flex-col justify-center items-center gap-2">
                        <img className="w-[100px]" src={bootstrap} /> 
                        <div>Bootstrap</div>
                    </div>

                    <div className="shadow-lg shadow-[#7db4b4] hover:scale-110 transition-transform ease-in-out duration-300 w-[180px] h-[180px] rounded-lg flex flex-col justify-center items-center gap-2">
                        <img className="w-[100px]" src={tailwind} /> 
                        <div>Tailwind CSS</div>
                    </div>

                    <div className="shadow-lg shadow-[#7db4b4] hover:scale-110 transition-transform ease-in-out duration-300 w-[180px] h-[180px] rounded-lg flex flex-col justify-center items-center gap-2">
                        <img className="w-[105px]" src={react} /> 
                        <div>React</div>
                    </div>

                    <div className="shadow-lg shadow-[#7db4b4] hover:scale-110 transition-transform ease-in-out duration-300 w-[180px] h-[180px] rounded-lg flex flex-col justify-center items-center gap-2">
                        <img className="w-[105px]" src={git} /> 
                        <div>Git</div>
                    </div>

                    <div className="shadow-lg shadow-[#7db4b4] hover:scale-110 transition-transform ease-in-out duration-300 w-[180px] h-[180px] rounded-lg flex flex-col justify-center items-center gap-2">
                        <img className="w-[105px]" src={gitHub} /> 
                        <div>GitHub</div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Skills;