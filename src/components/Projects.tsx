import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";

import project1 from "@/assets/project1.png";
import project01 from "@/assets/project01.png";
import project2 from "@/assets/project2.png";
import project02 from "@/assets/project02.png";
import project3 from "@/assets/project3.png";
import project03 from "@/assets/project03.png";

import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    id: 1,
    title: "Analytics Dashboard",
    category: "Full Stack",
    image: project1,
    hoverImage: project01,
    tech: ["React", "Node.js", "MongoDB", "Chart.js"],
    description: "A modern analytics dashboard with real-time insights.",
    details:
      "Built a scalable analytics platform featuring dynamic charts, user segmentation, and real-time data visualization. Integrated REST APIs and optimized performance for large datasets.",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    category: "Full Stack",
    image: project2,
    hoverImage: project02,
    tech: ["Next.js", "Stripe", "MongoDB", "Tailwind"],
    description: "Full-featured e-commerce solution.",
    details:
      "Developed a production-ready e-commerce platform with secure Stripe payments, product management, authentication, and an admin dashboard.",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Social Connect",
    category: "Full Stack",
    image: project3,
    hoverImage: project03,
    tech: ["React", "Firebase", "Redux"],
    description: "Real-time social networking app.",
    details:
      "Implemented a social platform with authentication, live chat, post sharing, and state management using Redux and Firebase.",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Portfolio Template",
    category: "Frontend",
    image: project1,
    hoverImage: project2,
    tech: ["React", "Framer Motion", "Tailwind"],
    description: "Clean and modern portfolio UI.",
    details:
      "Designed a responsive portfolio template with smooth animations, reusable components, and modern UI/UX principles.",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Weather App",
    category: "Frontend",
    image: project2,
    hoverImage: project3,
    tech: ["React", "API"],
    description: "Weather forecast application.",
    details:
      "Built a weather app using external APIs to display real-time data, forecasts, and location-based search with a clean UI.",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const filters = ["All", "Full Stack", "Frontend"];
const ITEMS_PER_PAGE = 3;

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    return activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

  const currentProjects = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProjects.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage, filteredProjects]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          title="My Projects"
          subtitle="A selection of my recent work showcasing full-stack and frontend expertise"
        />

        {/* Filters */}
        <ScrollReveal>
          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300
                ${
                  activeFilter === filter
                    ? "bg-primary text-white shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-primary/10"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {currentProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-background border
                hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:opacity-0 group-hover:scale-110"
                  />
                  <img
                    src={project.hoverImage}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-md bg-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-muted rounded-lg disabled:opacity-40"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === page
                      ? "bg-primary text-white"
                      : "bg-muted"
                  }`}
                >
                  {page}
                </button>
              )
            )}

            <button
              onClick={() =>
                setCurrentPage((p) => Math.min(p + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-muted rounded-lg disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-background rounded-xl max-w-lg w-full p-6 relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4"
              >
                <X size={22} />
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full rounded-lg mb-4"
              />

              <h2 className="text-xl font-bold mb-2">
                {selectedProject.title}
              </h2>

              <p className="text-muted-foreground mb-4">
                {selectedProject.details}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-muted rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg"
                >
                  <ExternalLink size={16} /> Live
                </a>

                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg"
                >
                  <Github size={16} /> Code
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
