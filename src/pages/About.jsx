import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useNavigate } from "react-router-dom";
import home from "../assets/home.svg";
import "./About.css";

function About() {
  const navigate = useNavigate();

  const details = [
    {
      date: "2023 – Beginning of My College Journey",
      text: "Getting Started:",
      heading: "Wrote my first program and laid the foundation.",
      desc: "Focused on academics while starting to explore the world of programming through small practice codes.",
      icon: "🎓",
    },
    {
      date: "2nd Semester",
      text: "Languages Learned:",
      heading: "C and Python",
      desc: "Developed a simple Tic-Tac-Toe game using C and explored basic data structures. Started to manage academics alongside coding practice.",
      icon: "🐍",
    },
    {
      date: "3rd Semester",
      text: "Skill Building:",
      heading: "Explored DSA and Web Development",
      desc: "Solved basic DSA problems on LeetCode in topics like arrays, strings, hash maps, and stacks. Built mini web projects including a calculator, note-taking app, and a Netflix clone. Also learned version control with GitHub.",
      icon: "📊",
    },
    {
      date: "4th Semester",
      text: "Turning Point:",
      heading: "Diving deeper into tech and community",
      desc: "Participated in open source programs like GSSoC, SWOC, and ACWOC. Actively shared my journey on LinkedIn and secured campus rank 6. Solved 100+ DSA problems on LeetCode and GFG. Started learning React and built projects including a music website, a news website, and this portfolio you're viewing now.",
      icon: "🚀",
    },
    {
      date: "5th Semester",
      text: "Exploration continues",
      heading: "Exploring more interesting things",
      desc: "Built tony tales, resume Genie. I tried to contribute to statup projects as well, here I was completely into frontend only. Then my focus completely went into Gate preparation, I didn't expect that I would study for GATE because I didn't know much about it.",
      icon: "🔍",
    },
    {
      date: "6th Semester",
      text: "Confusion point",
      heading: "Looked into some new tech",
      desc: "Gate journey was completed, I started working in a startup as a intern. I also built docForU which generates ppts, docs according to information which user gives. I started learning node JS, mongoDB and built some websites like Spendyx which is an expense tracker with dashboard. Started taking part in hackathons",
      icon: "💡",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#050619] via-[#0f0f2e] to-[#050619] min-h-screen w-full relative overflow-hidden">
      {/* Home Icon */}
      <div
        className="w-12 h-12 rounded-full border border-cyan-400 flex items-center cursor-pointer justify-center fixed md:absolute top-4 md:top-8 left-4 md:left-8 z-50 bg-[#050619]/80 backdrop-blur-sm hover:bg-cyan-400/10 transition-all duration-300"
        onClick={() => navigate("/")}
      >
        <img
          src={home}
          className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
          alt="home"
        />
      </div>

      {/* Header Section */}
      <div className="pt-20 md:pt-24 px-4 md:px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-6">
          My Journey
        </h1>

        <div className="space-y-4 mb-16">
          <p className="text-xl md:text-2xl text-transparent bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text font-semibold">
            Hello 👋🏻, Welcome to explore my journey, I am Sri Vaishnavi
          </p>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl">
            This timeline highlights my growth, the technologies I've learned,
            and the milestones that shaped my path from a curious student to a
            passionate developer.
          </p>
        </div>
      </div>

      {/* Custom Timeline Styles */}
      <style>{`
        .vertical-timeline--two-columns::before {
          background: linear-gradient(180deg, #06B6D4, #3B82F6, #A855F7);
        }
        
        .vertical-timeline-element--work .vertical-timeline-element-icon {
          background: linear-gradient(135deg, #06B6D4, #3B82F6) !important;
          box-shadow: 0 0 20px rgba(6, 182, 212, 0.5) !important;
          border: 3px solid #050619 !important;
        }
        
        .vertical-timeline-element--work.vertical-timeline-element--left .vertical-timeline-element-content {
          box-shadow: 0.5rem 0.5rem 2rem rgba(6, 182, 212, 0.15) !important;
        }
        
        .vertical-timeline-element--work.vertical-timeline-element--right .vertical-timeline-element-content {
          box-shadow: -0.5rem 0.5rem 2rem rgba(6, 182, 212, 0.15) !important;
        }
      `}</style>

      <VerticalTimeline className="custom-timeline">
        {details.map((obj, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work timeline-element-custom"
            contentStyle={{
              backgroundColor: "rgba(30, 30, 50, 0.8)",
              border: "2px solid rgba(6, 182, 212, 0.4)",
              borderRadius: "1rem",
              backdropFilter: "blur(10px)",
              padding: "2rem",
              transition: "all 0.3s ease",
            }}
            contentArrowStyle={{
              borderRight: "12px solid rgba(6, 182, 212, 0.4)",
            }}
            date={
              <span className="text-cyan-400 font-semibold text-sm md:text-base">
                {obj.date}
              </span>
            }
            iconStyle={{
              background: "linear-gradient(135deg, #06B6D4, #3B82F6)",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            icon={<div className="timeline-icon-emoji">{obj.icon}</div>}
          >
            <div className="space-y-3">
              <p
                style={{ fontWeight: 600, color: "#FBBF24", fontSize: "1rem" }}
              >
                {obj.text}
              </p>

              <h4 className="text-cyan-300 font-semibold text-lg">
                {obj.heading}
              </h4>

              <p className="text-gray-200 leading-relaxed text-sm md:text-base">
                {obj.desc}
              </p>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

      {/* Footer Decoration */}
      <div className="pb-12 text-center">
        <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
          <span>Continuing to learn & grow</span>
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
