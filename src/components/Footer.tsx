import { ArrowUp, FacebookIcon, Github, Linkedin } from "lucide-react";

const socialLinks = [
  {
    Icon: Github,
    href: "https://github.com/Salman472",
    label: "GitHub",
  },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/salman2025/",
    label: "LinkedIn",
  },
  {
    Icon: FacebookIcon,
    href: "https://www.facebook.com/md.sayem.hossain.71778",
    label: "Facebook",
  },
];
const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a
              href="#home"
              className="font-heading text-xl font-bold gradient-text"
            >
              Salman<span className="text-foreground">.</span>Hossain
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              Web Developer
            </p>
          </div>

          <div className="flex gap-6 text-sm text-muted-foreground">
            {["Home", "About", "Projects", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
            <button
              onClick={scrollToTop}
              className="ml-2 w-9 h-9 rounded-lg flex items-center justify-center glass hover:glow transition-all"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        <div className="text-center text-xs text-muted-foreground mt-8">
          © {new Date().getFullYear()} MD Salman Hossain. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
