// components/Skills.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import vscodeIcon from "@/assets/vscode.png";
// Brand icons
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiGithub,
  SiDocker,
  SiVercel,
  SiLinux,
  SiNetlify,
  SiVsco,
  SiFigma,
  SiNpm,
  SiGit,
} from "@icons-pack/react-simple-icons";

type Skill = {
  name: string;
  icon: React.ReactNode;
  category: "Frontend" | "Backend" | "Database" | "Tools" | "Others";
  isHighlighted?: boolean;
};

const skills: Skill[] = [
  { name: "React.js",     icon: <SiReact size={52} />,      category: "Frontend" },
  { name: "Next.js",      icon: <SiNextdotjs size={52} />,  category: "Frontend" },
  // { name: "TypeScript",   icon: <SiTypescript size={52} />, category: "Frontend" },
  { name: "JavaScript",   icon: <SiJavascript size={52} />, category: "Frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={52} />,category: "Frontend" },
  { name: "HTML / CSS",   icon: <SiHtml5 size={52} />,      category: "Frontend" },
  { name: "Node.js",      icon: <SiNodedotjs size={52} />,  category: "Backend" },
  { name: "Express.js",   icon: <SiExpress size={52} />,    category: "Backend" },
  { name: "MongoDB",      icon: <SiMongodb size={52} />,    category: "Database" },
  // { name: "PostgreSQL",   icon: <SiPostgresql size={52} />, category: "Database" },
  { name: "Firebase",     icon: <SiFirebase size={52} />,   category: "Database" },
  { name: "REST APIs",    icon: <SiNodedotjs size={52} />,  category: "Backend" },
  { 
    name: "Git", 
    icon: <SiGit size={52} />,     
    category: "Tools" 
  },
  
  { 
    name: " GitHub", 
    icon: <SiGithub size={52} />,     
    category: "Tools" 
  },
  { 
    name: "VS Code", 
    icon: <img src={vscodeIcon} alt="VS Code" width={52} height={52} />,    
    category: "Tools" 
  },
  { 
    name: "Figma", 
    icon: <SiFigma size={52} />,     
    category: "Tools" 
  },
  { 
    name: "npm", 
    icon: <SiNpm size={52} />,     
    category: "Tools" 
  },
  
  { 
    name: "Vercel", 
    icon: <SiVercel size={52} />, 
    category: "Tools", 
  },
  { 
    name: "Netlify", 
    icon: <SiNetlify size={52} />,     
    category: "Tools", 
  },
  // { name: "Docker",       icon: <SiDocker size={52} />,     category: "Tools" },
  // { name: "Linux",        icon: <SiLinux size={52} />,      category: "Tools" },
];

const categories = ["All", "Frontend", "Backend", "Database", "Tools"] as const;
type Category = (typeof categories)[number];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeading
          title="My Skills"
          subtitle="Technologies & tools I love working with"
        />

        {/* Filter Buttons */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-10 mb-12">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  px-6 py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300
                  ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                      : "bg-muted/70 hover:bg-muted text-muted-foreground hover:text-foreground"
                  }
                `}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <ScrollReveal delay={0.3}>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 md:gap-8 cursor-pointer"
            layout
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={`${skill.name}-${index}`}
                className="group relative"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 180,
                  damping: 22,
                }}
                layout
              >
                <motion.div
                  className={`
                    relative overflow-hidden rounded-2xl 
                    ${skill.isHighlighted 
                      ? "bg-gradient-to-br from-primary/20 via-primary/10 to-background border-primary/40 shadow-lg shadow-primary/20" 
                      : "bg-gradient-to-b from-muted/30 to-muted/10 border-muted/40"}
                    backdrop-blur-sm p-6 md:p-8 flex flex-col items-center
                    border transition-all duration-400
                    group-hover:shadow-2xl group-hover:shadow-primary/30 group-hover:border-primary/50
                  `}
                  whileHover={{
                    scale: skill.isHighlighted ? 1.12 : 1.08,
                    y: -12,
                    rotateX: skill.isHighlighted ? 6 : 4,
                    rotateY: skill.isHighlighted ? 6 : 4,
                    transition: { type: "spring", stiffness: 300, damping: 15 },
                  }}
                  whileTap={{ scale: 1.02 }}
                >
                  {/* Pulsing glow for highlighted (Vercel & Netlify) */}
                  {skill.isHighlighted && (
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-700 bg-gradient-to-br from-primary/30 via-transparent to-transparent pointer-events-none"
                      animate={{ opacity: [0.1, 0.3, 0.1] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                  )}

                  <motion.div
                    className={`mb-5 ${skill.isHighlighted ? "text-primary" : "text-primary/80"} group-hover:text-primary transition-colors duration-300`}
                    whileHover={{ rotate: skill.isHighlighted ? 15 : 10, scale: skill.isHighlighted ? 1.25 : 1.15 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {skill.icon}
                  </motion.div>

                  <span 
                    className={`text-base md:text-lg font-semibold text-center transition-colors duration-300 ${
                      skill.isHighlighted 
                        ? "text-primary group-hover:text-primary/90" 
                        : "text-foreground/90 group-hover:text-foreground"
                    }`}
                  >
                    {skill.name}
                  </span>

                  {skill.isHighlighted && (
                    <span className="mt-2 text-xs font-medium text-primary/70">
                      {skill.name === "Vercel" ? "Deployment Pro" : "Hosting & CDN Pro"}
                    </span>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </ScrollReveal>

        {filteredSkills.length === 0 && (
          <p className="text-center text-muted-foreground mt-16 text-lg">
            No skills found in this category.
          </p>
        )}
      </div>
    </section>
  );
};

export default Skills;