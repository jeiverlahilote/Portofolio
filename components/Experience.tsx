import Title from "./Title";
import { MdWork } from "react-icons/md";
import { SiReactivex, SiToptal, SiFreelancer, SiFiverr, SiGoogle, SiReact } from "react-icons/si";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Experiences" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ExperienceCard
          title="Afbenesia - PT Afbe Cahaya Kreatif"
          subTitle="Project Handler | Sept 2024 - Jan 2025"
          icon={<SiReactivex />}
        />
        <ExperienceCard
          title="GDSC"
          subTitle="Mobile Dev Student Group | Dec 2023 - Jan 2025"
          icon={<SiGoogle />}
        />
        <ExperienceCard
          title="Freelancer"
          subTitle="MERN Stack Developer | 2023 - present"
          icon={<SiFreelancer />}
        />

        <ExperienceCard
          title="ESD LABORATORY"
          subTitle="Software Engineer Student Group | Jan 2024 - Okt 2024"
          icon={<SiReact />}
        />
      </div>
    </div>
  );
};

export default Experience;
