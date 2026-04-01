import Reveal from "../animations/Reveal";

const Intro = () => {
  return (
    <section id="home" className="w-screen h-max text-copy-primary py-[25vh] max-md:py-[10vh] px-[5%]">
      <div className="flex flex-col gap-10 max-w-2xl max-md:text-center">
        <Reveal width="100%">
          <h1 className="text-7xl font-extrabold max-md:text-5xl">Hi, I&apos;m Luis 👋</h1>
        </Reveal>
        <Reveal>
          <p className="text-2xl font-semibold max-md:text-xl">
            I&apos;m an undergraduate student studying Mathematics and Computer Science
            at the University of California, San Diego.
            <br /><br />
            Currently an undergraduate researcher at the Network Reconnaissance Lab.
            <br /><br />
            Reach out if you&apos;d like to learn more!
          </p>
        </Reveal>
        <Reveal>
          <a href="mailto:luis@example.com" className="inline-block bg-cta-active text-cta-text rounded-lg py-4 px-6 text-2xl font-semibold opacity-90 hover:opacity-100 max-md:text-xl">
            Contact Me
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Intro;