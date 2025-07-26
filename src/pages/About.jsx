import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useNavigate } from "react-router-dom";
import home from "../assets/home.svg";

function About() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#050619] min-h-screen w-full relative overflow-hidden">
      <div className="homeIcon w-12 h-12 rounded-full border border-[aqua] flex items-center cursor-pointer justify-center absolute m-8" onClick={() => navigate("/")} >
        <img src={home} onClick={() => navigate("/")} className="w-7 h-7 cursor-pointer" />
      </div>

      <div className='flex flex-col pl-[6%] m-auto w-[70%] justify-center align-middle'>
        <p className="info text-2xl sm:text-3xl text-[#f2ff00] m-10 winky-rough-header">Hello 👋🏻, Welcome to explore my journey, I am Sri Vaishnavi</p>
        <p className="info text-base sm:text-xl text-[#00ffc8] mb-10 winky-rough-header">This timeline highlights my growth, the technologies I've learned, and the milestones that shaped my path.</p>
      </div>
      
      <div>
        <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work text-[#feffff]"
            contentStyle={{ backgroundColor: 'transparent', border: '2px solid aqua' }}
            contentArrowStyle={{ borderRight: '12px solid aqua' }}
            date="2023 – Beginning of My College Journey"
          >
            <h2 style={{ fontWeight: 600, color: 'yellow' }}>Getting Started:</h2>
            <h4 className="text-[#ebaa32]">Wrote my first program and laid the foundation.</h4>
            <p>
              Focused on academics while starting to explore the world of programming through small practice codes.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work text-[#feffff]"
            contentStyle={{ backgroundColor: 'transparent', border: '2px solid aqua' }}
            contentArrowStyle={{ borderRight: '12px solid aqua' }}
            date="2nd Semester"
          >
            <h2 style={{ fontWeight: 600, color: 'yellow' }}>Languages Learned:</h2>
            <h4 className="text-[#ebaa32]">C and Python</h4>
            <p>
              Developed a simple Tic-Tac-Toe game using C and explored basic data structures. Started to manage academics alongside coding practice.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work text-[#feffff]"
            contentStyle={{ backgroundColor: 'transparent', border: '2px solid aqua' }}
            contentArrowStyle={{ borderRight: '12px solid aqua' }}
            date="3rd Semester"
          >
            <h2 style={{ fontWeight: 600, color: 'yellow' }}>Skill Building:</h2>
            <h4 className="text-[#ebaa32]">Explored DSA and Web Development</h4>
            <p>
              Solved basic DSA problems on LeetCode in topics like arrays, strings, hash maps, and stacks. Built mini web projects including a calculator, note-taking app, and a Netflix clone. Also learned version control with GitHub.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work text-[#feffff]"
            contentStyle={{ backgroundColor: 'transparent', border: '2px solid aqua' }}
            contentArrowStyle={{ borderRight: '12px solid aqua' }}
            date="4th Semester"
          >
            <h2 style={{ fontWeight: 600, color: 'yellow' }}>Turning Point:</h2>
            <h4 className="text-[#ebaa32]">Diving deeper into tech and community</h4>
            <p>
              Participated in open source programs like GSSoC, SWOC, and ACWOC. Actively shared my journey on LinkedIn and secured campus rank 6. Solved 100+ DSA problems on LeetCode and GFG. Started learning React and built projects including a music website, a news website, and this portfolio you're viewing now.
            </p>
          </VerticalTimelineElement>


          <VerticalTimelineElement/>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default About;