import { motion } from "framer-motion";
import ToolList from "./ToolList";
import Backdrop from "./Backdrop";

const dropIn = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: { y: "100vh", opacity: 0 },
};

const ProjectCardExpanded = ({
  handleClose,
  title,
  image,
  tools,
  description,
  link,
  more_links = [],
}) => (
  <Backdrop onClick={handleClose}>
    <motion.section
      className="w-full max-w-2xl h-fit rounded-lg overflow-hidden bg-card shadow-lg cursor-auto max-md:mx-12 my-14"
      onClick={(e) => e.stopPropagation()}
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {image && (
        <img className="w-full" src={image} alt={title} />
      )}
      <div className="p-8 text-copy-primary">
        <h4 className="text-3xl font-bold mb-2">{title}</h4>
        <ToolList tools={tools} />
        <div className="space-y-4 my-6 leading-relaxed text-sm text-copy-secondary">
          {description.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
        <h4 className="text-2xl font-bold mb-2">Project Links</h4>
        <div className="flex flex-row gap-4 mb-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-cta"
          >
            Source Code
          </a>
          {more_links.map((ml, i) => (
            <a
              key={i}
              href={ml.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-cta"
            >
              {ml.title}
            </a>
          ))}
        </div>
        
        <a
          href="mailto:luis@example.com"
          className="text-copy-primary hover:text-cta"
        >
          <h4 className="text-xl font-bold">Contact Me</h4>
        </a>
      </div>
    </motion.section>
  </Backdrop>
);

export default ProjectCardExpanded;