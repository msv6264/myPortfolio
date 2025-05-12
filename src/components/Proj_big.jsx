import React from 'react';
import home from "../assets/home.svg";
import { useNavigate } from "react-router-dom";

export default function Proj_big({webProjects,  githubWhite}) {
  const navigate = useNavigate();
  return (
    <div className='bg-[#050619] w-full overflow-y-scroll h-screen'>
      <div className="homeIcon w-12 h-12 rounded-full border border-[aqua] flex items-center cursor-pointer justify-center absolute m-16" onClick={() => navigate("/")} >
          <img src={home} onClick={() => navigate("/")} className="w-8 h-8 cursor-pointer" />
      </div>

      <div className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-4xl font-markoOne m-10 mb-14 ml-[20%]'>
        From Code to Reality: My Practical Web Projects
      </div>
      
      <div className='relative space-y-24 mb-[6%]' >
        {webProjects.map((project, idx) => {
            return (
                <div className='flex flex-row m-auto gap-1 border border-[#b19c9c] rounded-[25px] bg-[#2d2b3a] w-[65%] sticky '
                style={{
                  top: `calc(64px + ${idx * 37}px)`,
                }}
                >

                   {/* Left: Project Content */}
                  <div key={idx} className="w-[55%] h-[40%] p-[4%] mb-10 ">
                    <div className='m-2'>
                      <div className='font-markoOne text-white text-4xl mt-[5%] ml-[14%] mb-10'>{project.title}</div>
                      <hr className="m-[5%] border-t border-gray-500" />

                      <div className='flex gap-[15%] mt-10 align-middle justify-center'>
                          <div 
                            className='rounded-[15px] text-[18px] bg-white p-[10px] w-[25%] h-[50%] flex align-middle justify-center font-bold gap-2 cursor-pointer ' 
                            onClick={() => window.open(project.siteLink, "_blank")} >
                              Live site 
                              <span className="font-normal">&#8599;</span>
                          </div>

                          <div 
                            className='rounded-[15px] text-white text-[17px] bg-black w-[45%] h-[50%] flex align-middle justify-center font-bold gap-4 cursor-pointer p-[10px] '
                            onClick={() => window.open(project.RepoLink, "_blank")} >
                              Source code 
                              <img src={githubWhite} className="w-6 h-6 rounded-full" alt="GitHub" />
                              <span className="font-normal">&#8599;</span> 
                          </div>
                      </div> 

                      <div className="text-[#b8b8ca] font-inria mt-10 ml-4 text-xl ">
                        {project.desc.map((point, i) => (
                          <div key={i} className="mb-2 ml-4">• {point.title}</div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Rectangular project image */}
                  <div className='w-[40%] h-[250px] m-auto rounded-xl overflow-hidden shadow-lg'>
                    <img 
                      className='w-full h-full object-cover' 
                      src={project.image} 
                      alt={project.title} 
                    />
                  </div>


                </div>
              );
        })}
      </div>

    </div>
  )
}
