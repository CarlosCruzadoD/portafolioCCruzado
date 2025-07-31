import CardProject, { type CardProjectProps } from "./Projects/CardProject";
import SectionSvg from "./SectionSvg";
import './styles/projects.css';

interface ProjectJson{
  title: string;
  type: string;
  tech: string[];
  desc: string;
  image: string[];
  link: string;
  github: string
}
interface ProjectProp {
  title: string;
  desc: string;
  projects: ProjectJson[];
}
const Projects = (prop: ProjectProp) => {
  return (
    <section className="projects">
      <div className="max-w-[1200px] mx-auto py-40 text-center flex flex-col">
        <SectionSvg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="m21,9h-2v-3c0-.55-.45-1-1-1h-4c-.55,0-1,.45-1,1v3h-2v-3c0-.55-.45-1-1-1h-4c-.55,0-1,.45-1,1v3h-2c-.55,0-1,.45-1,1v8c0,.55.45,1,1,1h18c.55,0,1-.45,1-1v-8c0-.55-.45-1-1-1Zm-6-2h2v2h-2v-2Zm-8,0h2v2h-2v-2Zm13,10H4v-6h16v6Z"></path>
          </svg>
        </SectionSvg>

        <h2>{prop.title}</h2>
        <span>{prop.desc}</span>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-15 p-5">
          {
            prop.projects.map((project, index) => (
              <CardProject 
                key={index}
                title={project.title}
                desc={project.desc}
                tags={project.tech}
                image={project.image[0]}
                linkCode={project.github}
                linkLive={project.link}
              />
            ))
          }
          
        </div>
      </div>
    </section>
  );
};

export default Projects;
