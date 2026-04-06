import { Globe, Layout, Server } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Full-stack web applications built with modern technologies. From concept to deployment, I handle the entire development lifecycle.",
  },
  {
    icon: Layout,
    title: "Frontend Development",
    description: "Pixel-perfect, responsive user interfaces with smooth animations. I create engaging experiences that delight users.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Context APIs and server-side solutions with Node.js. Scalable architectures that power your applications reliably.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading title="My Services" subtitle="What I can do for you" />
        
        <div className="grid md:grid-cols-3 gap-8 cursor-pointer">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.15}>
              <div className="group p-8 rounded-2xl glass hover:glow transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 group-hover:scale-110 transition-transform" style={{ background: "var(--gradient-primary)" }}>
                  <service.icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
