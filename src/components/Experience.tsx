import { Briefcase, GraduationCap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const timeline = [
  {
    type: "work",
    title: "Senior Full Stack Developer",
    org: "Tech Company",
    period: "2023 - Present",
    description: "Leading development of scalable web applications using React and Node.js. Mentoring junior developers and driving architectural decisions.",
  },
  {
    type: "work",
    title: "Full Stack Developer",
    org: "Digital Agency",
    period: "2021 - 2023",
    description: "Built 20+ client projects including e-commerce platforms, dashboards, and SaaS applications using the MERN stack.",
  },
  {
    type: "education",
    title: "B.Sc. in Computer Science",
    org: "University of Dhaka",
    period: "2018 - 2022",
    description: "Graduated with honors. Focused on software engineering, data structures, and web technologies.",
  },
  {
    type: "work",
    title: "Junior Web Developer",
    org: "Startup Inc.",
    period: "2020 - 2021",
    description: "Started professional journey building responsive websites and learning modern development practices.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading title="My Experience" subtitle="My professional journey" />

        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {timeline.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className={`relative flex items-start gap-6 mb-10 md:mb-12 ${i % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""}`}>
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full -translate-x-1.5 mt-2" style={{ background: "var(--gradient-primary)" }} />

                {/* Content */}
                <div className={`ml-14 md:ml-0 md:w-5/12 ${i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8 md:text-left"}`}>
                  <div className="p-5 rounded-xl glass hover:glow transition-shadow duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      {item.type === "work" ? (
                        <Briefcase size={16} className="text-primary" />
                      ) : (
                        <GraduationCap size={16} className="text-secondary" />
                      )}
                      <span className="text-xs text-muted-foreground">{item.period}</span>
                    </div>
                    <h3 className="font-heading font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-primary mb-2">{item.org}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
