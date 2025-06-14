import { FiArrowUpRight } from "react-icons/fi";
import SocialLink from "./SocialLink";

const Contact = () => {
  return (
    <div className="wrapper">
      <div className="max-w-5xl mx-auto flex flex-col gap-4 items-center justify-center">
        <h2 className="text-2xl font-bold">Let&apos;s Build Amazing Digital Experiences!</h2>
        <p className="text-lg tracking-wide font-medium text-center">
        I&apos;m passionate about turning ideas into impactful solutions. Let&apos;s collaborate 
        to enhance your online presence, create stunning designs, or solve complex challenges 
        through innovative technology.
        </p>
        <a href="mailto:jeiverrr16@gmail.com">
          <button className="w-52 h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 text-xl font-bold text-white rounded-lg hover:from-indigo-950 hover:to-blue-600 duration-300">
          Contact Me
          </button>
        </a>
      </div>
      <div className="mt-8 flex items-center flex-wrap   gap-8 justify-center">
        <SocialLink title="Github" link="https://github.com/jeiverlahilote" />
        <SocialLink title="Instagram" link="https://www.instagram.com/_jeiverl/" />
        <SocialLink
          title="Linkedin"
          link="https://www.linkedin.com/in/jeiver-lahilote/"
        />
      </div>
    </div>
  );
};

export default Contact;
