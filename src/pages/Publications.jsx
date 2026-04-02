import Reveal from "../animations/Reveal";

const publications = [
  {
    title: "From Stress to Distress: A Personalized Detection Approach Using Gaussian Process Regression",
    authors: [
      "Rodrigo Aguilar Barrios", "Luis Millan", "Emily Mojica",
      "Jeffrey Millan", "Emiliano Gonzalez", "Rabiat Sadiq",
      "Corey E. Baker"
    ],
    venue: "IEEE Body Sensor Networks (BSN)",
    year: 2025,
    badge: "Best Poster Award",
    links: [
      { label: "Poster", url: "/personal-website/BSN_Poster.pdf" }
    ]
  },
  {
    title: "Motivating Adherence to Symptom Reporting Among Patients with Cancer: Pilot Study",
    authors: [
      "Alyssa Donawa", "Jeffrey Millan", "Luis Millan", "Thomas Reeves",
      "Ronaldo Lopez-Tucux", "Nazila Shafagati", "Ruta Arays",
      "Ralph Zinner", "Corey E. Baker"
    ],
    venue: "IEEE Body Sensor Networks (BSN)",
    year: 2025,
    badge: null,
    links: [
      { label: "PDF", url: "https://openreview.net/pdf?id=qWx7tvILrJ" }
    ]
  },
  {
    title: "An Analysis of Students\u0027 Testing Processes in CS1",
    authors: [
      "Gonzalo Allen-Perez", "Luis Millan", "Brandon Nghiem",
      "Kevin Wu", "Anshul Shah", "Adalbert Gerald Soosai Raj"
    ],
    venue: "ACM SIGCSE Technical Symposium",
    year: 2025,
    badge: null,
    links: [
      { label: "PDF", url: "https://dl.acm.org/doi/10.1145/3641554.3701890" }
    ]
  },
  {
    title: "Assuage: Improving mHealth Accessibility and Adherence for Remote Patient Monitoring",
    authors: [
      "Luis Millan", "Alyssa Donawa", "Corey E. Baker"
    ],
    venue: "USC Viterbi SURE Program (Amazon SURE Fellow)",
    year: 2024,
    badge: null,
    links: [
      { label: "Poster", url: "/personal-website/USC_Poster.pdf" }
    ]
  }
];

const Publications = () => (
  <section
    id="publications"
    className="w-screen h-max flex flex-col text-copy-primary px-[5%] mb-[25vh]"
  >
    <Reveal>
      <h1 className="font-extrabold text-7xl mb-12 max-md:text-5xl">Publications</h1>
    </Reveal>
    <div className="flex flex-col gap-6 px-[10%] max-md:px-0">
      {publications.map((pub, i) => (
        <Reveal key={i}>
          <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
            {pub.badge && (
              <span className="inline-block text-xs font-bold px-2.5 py-1 rounded-full bg-cta-active text-cta-text mb-3">
                {pub.badge}
              </span>
            )}
            <h3 className="font-bold text-lg leading-snug mb-2">
              {pub.title}
            </h3>
            <p className="text-sm text-copy-secondary mb-1">
              {pub.authors.map((author, j) => (
                <span key={j}>
                  {author === "Luis Millan" ? (
                    <span className="font-bold text-copy-primary">
                      {author}
                    </span>
                  ) : (
                    author
                  )}
                  {j < pub.authors.length - 1 && ", "}
                </span>
              ))}
            </p>
            <p className="text-sm text-cta font-medium italic mb-3">
              {pub.venue}, {pub.year}
            </p>
            {pub.links.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {pub.links.map((link, k) => (
                  <a
                    key={k}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold px-3 py-1.5 rounded border border-cta text-cta hover:bg-cta-active hover:text-cta-text transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Publications;