import { useState } from "react";
import Reveal from "../animations/Reveal";
import projects from "./projects.json";
import ProjectCard from "../components/ProjectCard";
import ProjectCardExpanded from "../components/ProjectCardExpanded";
import { AnimatePresence } from "framer-motion";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [open, setOpen] = useState(false);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <section
      id="Projects"
      className="w-screen h-max flex flex-col text-copy-primary px-[5%] mb-[25vh]"
    >
      <Reveal>
        <h1 className="font-extrabold text-7xl mb-12 max-md:text-5xl">Projects</h1>
      </Reveal>

      <div className="px-[10%] max-md:px-0">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
          {projects.map((project, i) => (
            <div key={i} className="flex">
              <ProjectCard
                title={project.title}
                emoji={project.emoji}
                image={project.image}
                tools={project.tools}
                description={project.description}
                link={project.link}
                onClick={() => handleCardClick(project)}
              />
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence initial={false} mode="wait">
        {selectedProject && open && (
          <ProjectCardExpanded
            title={selectedProject.title}
            image={selectedProject.image}
            tools={selectedProject.tools}
            description={selectedProject.long_description}
            link={selectedProject.link}
            more_links={selectedProject.more_links}
            handleClose={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;