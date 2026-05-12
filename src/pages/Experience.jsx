import React from "react";
import gssoc from "../assets/GSSOC_img.png";
import swoc from "../assets/SWOC_img.png";
import acwoc from "../assets/ACWOC_img.png";
import home from "../assets/home.svg";
import wrench from "../assets/wrench.png";
import { useNavigate } from "react-router-dom";

export default function Experience() {
  const navigate = useNavigate();

  const exp = [
    {
      id: 1,
      expName: "Frontend Developer Intern",
      expIcon: wrench,
      duration: "Feb 2026 - Apr 2026",
      company: "Wrench Cloud Startup",
      desc: [
        {
          pt: "Enhanced features for a Garage OS platform, streamlining invoice and job card workflows and reducing manual effort by approximately 60%.",
        },
        {
          pt: "Optimized UI and integrated APIs to improve data flow and system responsiveness.",
        },
        {
          pt: "Collaborated with team in solving bugs and issues.",
        },
        {
          pt: "Worked remotely with the development team to build scalable and user-friendly frontend features.",
        },
      ],
      skills:
        "React, JavaScript, API Integration, UI Optimization, Git, GitHub, Tailwind CSS",
    },

    {
      id: 2,
      expName: "Open Source Contributor",
      expIcon: acwoc,
      duration: "Feb 2025 - Mar 2025",
      company: "ACWOC",
      desc: [
        {
          pt: "Contributed to multiple open-source projects by designing logos, creating animations and preloaders, and fixing UI bugs.",
        },
        {
          pt: "Collaborated with project maintainers and mentors to successfully implement features and improvements.",
        },
        {
          pt: "Ranked 14th among contributors and received a digital badge for contributions.",
        },
        {
          pt: "Awarded a Top Contributor certificate for active participation and impactful contributions.",
        },
      ],
      skills:
        "HTML, CSS, JavaScript, React, Git, GitHub, Tailwind CSS, Bootstrap",
    },

    {
      id: 3,
      expName: "Open Source Contributor",
      expIcon: swoc,
      duration: "Jan 2025 - Mar 2025",
      company: "SWOC",
      desc: [
        {
          pt: "Contributed to 6+ open-source projects, developing and enhancing features to improve application usability and user experience.",
        },
        {
          pt: "Utilized Git and GitHub for version control and collaborated with distributed teams through pull requests and code reviews.",
        },
        {
          pt: "Built UI components, fixed bugs, and improved frontend responsiveness across multiple projects.",
        },
        {
          pt: "Enhanced collaboration and workflow efficiency while delivering contributions on time.",
        },
      ],
      skills:
        "HTML, CSS, JavaScript, React, Git, GitHub, Tailwind CSS, Bootstrap",
    },

    {
      id: 4,
      expName: "Open Source Contributor",
      expIcon: gssoc,
      duration: "Oct 2024 - Nov 2024",
      company: "GSSOC",
      desc: [
        {
          pt: "Collaborated with mentors and contributors to make meaningful open-source contributions.",
        },
        {
          pt: "Solved issues involving UI enhancements, bug fixes, and feature development.",
        },
        {
          pt: "Improved dark mode contrast to enhance accessibility and user experience.",
        },
        {
          pt: "Learned and applied real-world collaboration practices using Git and GitHub.",
        },
      ],
      skills: "HTML, CSS, JavaScript, React, Git, GitHub",
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#050619] via-[#0f0f2e] to-[#050619] px-4 py-6 md:px-8 md:py-10">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute left-[-6rem] top-24 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute right-[-4rem] top-[22rem] h-80 w-80 rounded-full bg-purple-500/15 blur-3xl" />
      </div>

      {/* Home Icon */}
      <button
        type="button"
        className="fixed left-4 top-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/70 bg-[#050619]/80 backdrop-blur-md transition hover:border-cyan-300 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/20 md:absolute md:left-8 md:top-8"
        onClick={() => navigate("/")}
        aria-label="Go back home"
      >
        <img
          src={home}
          className="h-6 w-6 transition-transform hover:scale-110"
          alt="Home"
        />
      </button>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center pt-16 md:pt-12">
        <div className="mb-10 max-w-3xl text-center md:mb-14">
          <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Experience
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Experience &amp; Contributions
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-300 md:text-lg">
            A snapshot of internships, open-source work, and the projects that
            shaped my frontend journey.
          </p>
        </div>

        <div className="relative w-full">
          <div className="absolute left-4 top-3 hidden h-full w-px bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 opacity-35 md:left-1/2 md:block md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {exp.map((obj, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={obj.id}
                  className={`relative flex items-stretch gap-5 md:gap-10 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="hidden md:flex md:w-[40%] md:justify-end md:pr-8">
                    <div
                      className={`w-full max-w-2xl ${isEven ? "md:text-right" : "md:text-left"}`}
                    >
                      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-xs font-medium text-gray-300 backdrop-blur-sm">
                        <span className="h-2 w-2 rounded-full bg-cyan-400" />
                        {obj.duration}
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 hidden md:flex md:items-start md:pt-8">
                    <div className="mt-1 h-5 w-5 rounded-full border-4 border-[#050619] bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_20px_rgba(6,182,212,0.45)]" />
                  </div>

                  <div className="w-full md:w-[60%]">
                    <div className="group relative overflow-hidden rounded-3xl border border-gray-700/80 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-[0_14px_50px_rgba(6,182,212,0.18)] md:p-8">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      <div className="relative z-10">
                        <div className="mb-5 flex items-start gap-4">
                          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-cyan-400/25 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/60 p-2 shadow-[0_0_18px_rgba(6,182,212,0.12)] transition group-hover:border-cyan-300/40 group-hover:from-slate-900 group-hover:via-slate-800 group-hover:to-cyan-900/70 group-hover:shadow-[0_0_24px_rgba(6,182,212,0.22)]">
                            {typeof obj.expIcon === "string" ? (
                              <img
                                src={obj.expIcon}
                                alt={obj.company}
                                className="h-full w-full object-contain"
                                loading="eager"
                                decoding="async"
                                draggable="false"
                              />
                            ) : (
                              <span className="text-3xl">{obj.expIcon}</span>
                            )}
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="text-xl font-bold text-white transition-colors group-hover:text-cyan-300 md:text-2xl">
                                {obj.expName}
                              </h3>
                              {index === 0 && (
                                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                                  Latest
                                </span>
                              )}
                            </div>
                            <p className="mt-1 text-sm font-semibold text-cyan-300 md:text-base">
                              {obj.company}
                            </p>
                            <p className="mt-1 text-xs text-gray-400 md:hidden">
                              {obj.duration}
                            </p>
                          </div>
                        </div>

                        <div className="mb-5 space-y-3">
                          {obj.desc.map((item, i) => (
                            <div key={i} className="flex gap-3">
                              <span className="mt-1 flex-shrink-0 text-cyan-400">
                                ▸
                              </span>
                              <p className="text-sm leading-7 text-gray-300 md:text-base">
                                {item.pt}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="border-t border-white/10 pt-4">
                          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                            Skills &amp; Tech Stack
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {obj.skills.split(", ").map((skill) => (
                              <span
                                key={skill}
                                className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200 transition hover:border-cyan-300/50 hover:bg-cyan-400/15"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-gray-400 md:hidden">
                          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                            {obj.duration}
                          </span>
                        </div>
                      </div>

                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/0 to-blue-500/0 transition-all duration-300 group-hover:from-cyan-400/10 group-hover:via-blue-500/10 group-hover:to-purple-500/5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Decoration */}
        <div className="mt-14 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-cyan-400" />
          Open to opportunities &amp; collaborations
          <span className="h-2 w-2 rounded-full bg-cyan-400" />
        </div>
      </div>
    </div>
  );
}
