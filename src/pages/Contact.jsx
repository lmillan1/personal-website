import Reveal from "../animations/Reveal";

const Contact = () => (
  <section
    id="contact"
    className="w-screen h-max flex flex-col text-cta-text px-[5%] mb-[25vh] items-center"
  >
    <div className="flex flex-col bg-cta-active w-max h-max p-8 text-center gap-6 rounded-3xl border-2 hover:bg-card hover:text-copy-primary transition-colors">
      <Reveal>
        <h1 className="text-4xl font-extrabold">Contact</h1>
      </Reveal>
      <Reveal>
        <p>
          Feel free to send an email or message on{" "}
          <a
            href="https://www.linkedin.com/in/luimillan/"
            className="hover:underline font-bold"
          >
            LinkedIn
          </a>
        </p>
      </Reveal>
      <Reveal>
        <a
          href="mailto:luimillan3@gmail.com"
          className="text-2xl font-bold hover:underline"
        >
          luimillan3@gmail.com
        </a>
      </Reveal>
    </div>
  </section>
);

export default Contact;