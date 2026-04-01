import Reveal from "../animations/Reveal";

const About = () => (
  <section
    id="about"
    className="w-screen h-max flex flex-col text-copy-primary px-[5%] mb-[25vh]"
  >
    <Reveal>
      <h1 className="font-extrabold text-7xl mb-12 max-md:text-5xl">About</h1>
    </Reveal>
    <div className="grid grid-cols-5 max-md:grid-cols-1 gap-8 items-center justify-items-center">
      <div className="col-span-2">
        <Reveal>
          <img
            src="/personal-website/Luis.png"
            alt="Luis Millan"
            className="h-auto max-w-xs rounded-lg border border-border"
          />
        </Reveal>
      </div>
      <div className="flex flex-col font-semibold text-l gap-4 col-span-3">
        <Reveal>
          <p>
            Hey there! I&apos;m Luis Millan, a Mathematics-Computer Science
            student at UC San Diego graduating in June 2026. I&apos;m passionate
            about using data and machine learning to solve real-world problems
          </p>
        </Reveal>
        <Reveal>
          <p>I currently work as a research assistant at the University of
            Southern California in the Network Reconnaissance Lab, where I build
            open-source health monitoring tools and analyze clinical study data.</p>
        </Reveal>
        <Reveal>
          <p>Outside of work, you can find me swimming, surfing, or at the gym.
            Feel free to reach out if you want to connect!</p>
        </Reveal>
        <Reveal>
          <div className="flex items-center text-lg gap-4 mt-4">
            <a
              href="https://www.linkedin.com/in/luimillan/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cta transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/lmillan1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cta transition-colors"
            >
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default About;