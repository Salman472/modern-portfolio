import { FileDown } from "lucide-react";
import aboutImg from "@/assets/about.png";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import CountUp from "react-countup";

const stats = [
  { label: "Month Hands On Experience", value: 8 },
  { label: "Projects Completed", value: 20 },
  // { label: "Happy Clients", value: "30+" },
  { label: "Technologies", value: 17 },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading title="About Me" subtitle="Get to know me better" />

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image */}
          <ScrollReveal className="flex-1 flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 cursor-pointer lg:h-96 rounded-2xl overflow-hidden gradient-border">
              <img
                src={aboutImg}
                alt="Salman working"
                className="w-full h-full object-cover "
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal className="flex-1" delay={0.2}>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I am a passionate{" "}
              <span className="gradient-text font-bold">
                Front-End Developer
              </span>{" "}
              and
              <span className="gradient-text font-bold">
                {" "}
                MERN Stack Developer
              </span>{" "}
              focused on building modern, scalable, and high-performance web
              applications. I specialize in creating clean, maintainable code
              and crafting intuitive user experiences that blend functionality
              with elegant design. With strong expertise in
              <span className="gradient-text font-bold"> JavaScript,</span>{" "}
              <span className="gradient-text font-bold"> React,</span>{" "}
              <span className="gradient-text font-bold"> Next.js,</span> and the{" "}
              <span className="gradient-text font-bold"> MERN stack</span> I
              enjoy turning complex problems into simple, efficient solutions.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I am continuously learning and adapting to new technologies to
              stay ahead in the fast-evolving web ecosystem. My goal is to
              deliver reliable digital products that not only work flawlessly
              but also provide meaningful value to users and businesses.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 cursor-pointer">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl glass"
                >
                  <div className="text-2xl font-bold gradient-text">
                    {/* {stat.value} */}
                    {/* <CountUp start={1} end={8} duration={3} /> */}
                    <CountUp
                      start={1}
                      end={stat.value}
                      duration={3}
                      enableScrollSpy
                      scrollSpyDelay={200}
                    />+
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-primary-foreground"
              style={{ background: "var(--gradient-primary)" }}
            >
              Download Resume <FileDown size={16} />
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
