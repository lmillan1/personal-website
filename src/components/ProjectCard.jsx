import ToolList from "./ToolList";
import Reveal from "../animations/Reveal";

const ProjectCard = ({ title, emoji, tools, description, link, onClick }) => (
  <div className="bg-card text-copy-primary p-5 rounded-xl shadow-md border border-border hover:border-cta transition-colors cursor-pointer" onClick={onClick}>
    <Reveal>
      <div className="w-full h-32 mb-4 rounded-lg bg-cta-active bg-opacity-10 flex items-center justify-center text-6xl">
        {emoji || "📁"}
      </div>
    </Reveal>
    <Reveal>
      <div className="flex items-center gap-2 mb-2">
        <h2 className="font-bold text-xl">{title}</h2>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-copy-secondary text-sm"
          onClick={(e) => e.stopPropagation()}
        >
          GitHub
        </a>
      </div>
    </Reveal>
    <Reveal>
      <ToolList tools={tools} />
    </Reveal>
    <Reveal>
      <p className="mt-3 text-sm text-copy-secondary leading-relaxed">{description}</p>
    </Reveal>
  </div>
);

export default ProjectCard;