import React from 'react';
import home from "../assets/home.svg";
import { useNavigate } from "react-router-dom";

export default function Proj_small({webProjects,  githubWhite}) {
  const navigate = useNavigate();
  return (
    <div className='bg-[#050619] w-full overflow-y-scroll h-screen'>
      <div className="homeIcon w-12 h-12 rounded-full border border-[aqua] flex items-center cursor-pointer justify-center m-16" onClick={() => navigate("/")} >
          <img src={home} onClick={() => navigate("/")} className="w-8 h-8 cursor-pointer" />
      </div>

      <div className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-4xl font-markoOne m-10 mb-14 ml-[20%]'>
        From Code to Reality: My Practical Web Projects
      </div>
      
      <div className='relative space-y-24 mb-[6%]' >
        {webProjects.map((project, idx) => {
            return (
                <div className='flex flex-col-reverse m-auto gap-1 border border-[#b19c9c] rounded-[25px] bg-[#2d2b3a] w-[65%] sticky '
                style={{
                  top: `calc(64px + ${idx * 37}px)`,
                }}
                >

                   {/* bottom: Project Content */}
                  <div key={idx} className="w-[100%] h-[40%] p-[4%] mb-10 ">
                    <div className='m-2'>
                      <div className='font-markoOne text-white text-2xl mt-[5%] ml-[14%] mb-8'>{project.title}</div>
                      <hr className="m-[5%] border-t border-gray-500" />

                      <div className='flex flex-col gap-3 mt-8 align-middle justify-center'>
                          <div 
                            className='rounded-[15px] text-[13px] bg-white p-[8px] w-[57%] h-[30%] flex align-middle justify-center font-bold gap-2 cursor-pointer m-auto ' 
                            onClick={() => window.open(project.siteLink, "_blank")} >
                              Live site 
                              <span className="font-normal">&#8599;</span>
                          </div>

                          <div 
                            className='rounded-[15px] text-white text-[13px] bg-black w-[75%] h-[40%] flex align-middle justify-center font-bold gap-3 cursor-pointer p-[10px] m-auto '
                            onClick={() => window.open(project.RepoLink, "_blank")} >
                              Source code 
                              <img src={githubWhite} className="w-6 h-6 rounded-full" alt="GitHub" />
                              <span className="font-normal">&#8599;</span> 
                          </div>
                      </div> 

                      <div className="text-[#b8b8ca] font-inria mt-4 ml-4 text-sm ">
                        {project.desc.map((point, i) => (
                          <div key={i} className="mb-2 ml-4">• {point.title}</div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* top: Rectangular project image */}
                  <div className='w-[80%] h-[150px] mt-[10%] m-auto rounded-xl overflow-hidden shadow-lg'>
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
