import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import movieListing from "../public/img/projects/movieListing.png";
import websiteDesa from "../public/img/projects/leuwiGrowth.png";
import ecoTour from "../public/img/projects/Frame 6(5).png";
import sibiLearning from "../public/img/projects/SIBI_LEARNING.png";
import webBerita from "../public/img/projects/web-berita.png";
import paymentFiture from "../public/img/projects/Frame 7.png";

import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          img={movieListing .src}
          title="Movie Listing"
          link="https://flick-finder-site.vercel.app/"
        />
        <ProjectCard
          img={websiteDesa.src}
          title="Website Desa"
          link="https://leuwi-growth.vercel.app/"
        />
        <ProjectCard
          img={ecoTour.src}
          title="Eco Tour App"
          link="https://github.com/jeiverlahilote/EcoTour-Indonesia"
        />
        <ProjectCard
          img={sibiLearning.src}
          title="Learning SIBI"
          link="https://learning-sibi.vercel.app/"
        />
        <ProjectCard
          img={webBerita.src}
          title="News Website"
          link="https://github.com/jeiverlahilote/quicknews"
        />
        <ProjectCard
          img={paymentFiture.src}
          title="Fitur Payment"
          link="https://github.com/jeiverlahilote/EAZYKOZT"
        />

      </div>
    </div>
  );
};

export default Projects;
