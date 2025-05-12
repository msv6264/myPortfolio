import gif from "../assets/frame2.gif";
import about from "../assets/about.svg";
import skills from "../assets/skills.svg";
import projects from "../assets/projects.svg";
import experience from "../assets/experience.svg";
import resume from "../assets/resume.svg";
import contact from "../assets/contact.svg";
import pdf from "../assets/resume_file.pdf";
import HomeBig from "../components/Home_big";
import HomeMed from "../components/Home_medium";
import HomeSmall from "../components/Home_small";

function Home() {
  const icons = [
    { name: "𝑹𝒆𝒔𝒖𝒎𝒆", src: resume, path: pdf, isPdf: true },
    { name: "𝑨𝒃𝒐𝒖𝒕", src: about, path: "/about" },
    { name: "𝑺𝒌𝒊𝒍𝒍𝒔", src: skills, path: "/skills" },
    { name: "𝑷𝒓𝒐𝒋𝒆𝒄𝒕𝒔", src: projects, path: "/projects" },
    { name: "𝑬𝒙𝒑𝒆𝒓𝒊𝒆𝒏𝒄𝒆", src: experience, path: "/experience" },
    { name: "𝑺𝒐𝒄𝒊𝒂𝒍𝒔", src: contact, path: "/socials" },
  ];

  return (
    <div>
      {/* For larger screens */}
      <div className="hidden md:flex w-full h-full">
        <HomeBig icons={icons} gif={gif} />
      </div>

      {/* For medium screens */}
      <div className="hidden xs:flex md:hidden w-full h-full">
        <HomeMed icons={icons} gif={gif} />
      </div>

      {/* For small screens */}
      <div className="xs:hidden w-full h-full">
        <HomeSmall icons={icons} gif={gif} />
      </div>
    </div>
  );
}


export default Home;