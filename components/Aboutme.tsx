import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
        I am a 5th-semester Information Technology student at Telkom University, with a strong leadership mindset 
        and a deep passion for the latest trends in web and mobile development. My academic journey, combined with 
        hands-on projects, has equipped me with a robust foundation in programming languages, frameworks, and tools 
        that are essential for crafting innovative, user-centric digital solutions. I thrive on transforming complex 
        challenges into intuitive technologies that drive impact and efficiency.
        </p>
        <p>
          I am always looking to improve my skills and stay up-to-date with the
          latest best practices in web development. I am excited to continue
          growing as a developer and making meaningful contributions to projects
          and teams.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
