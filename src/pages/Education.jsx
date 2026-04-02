import Reveal from "../animations/Reveal";

const education = [
  {
    years: "2022 - 2026",
    degree: "B.S. in Mathematics-Computer Science",
    school: "University of California, San Diego",
  },
];

const Education = () => (
  <section
    id="education"
    className="w-screen h-max flex flex-col text-copy-primary px-[5%] mb-[25vh]"
  >
    <Reveal>
      <h1 className="font-extrabold text-7xl mb-12 max-md:text-5xl">Education</h1>
    </Reveal>
    <div className="flex flex-col gap-6 px-[10%] max-md:px-0">
      {education.map((ed, i) => (
        <Reveal key={i}>
          <div className="flex gap-6 items-start bg-card p-6 rounded-xl border border-border shadow-sm max-md:flex-col max-md:gap-2">
            <span className="text-sm font-bold text-cta whitespace-nowrap min-w-[130px]">
              {ed.years}
            </span>
            <div>
              <h3 className="font-bold text-lg">{ed.degree}</h3>
              <p className="text-copy-secondary">{ed.school}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Education;