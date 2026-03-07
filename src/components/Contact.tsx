import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast({ title: "Please enter a valid email", variant: "destructive" });
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setForm({ name: "", email: "", message: "" });
      toast({ title: "Message sent!", description: "I'll get back to you soon." });
    }, 1500);
  };

  const contactInfo = [
    { icon: Mail, label: "salman@example.com", href: "mailto:salman@example.com" },
    { icon: MapPin, label: "Dhaka, Bangladesh", href: "#" },
    { icon: Phone, label: "+880 1XXX-XXXXXX", href: "#" },
  ];

  const socials = [
    { icon: Github, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Twitter, href: "#" },
  ];

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading title="Contact Me" subtitle="Let's work together" />

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Info */}
          <ScrollReveal>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                I'm always open to new opportunities and interesting projects.
                Feel free to reach out!
              </p>
              {contactInfo.map((item) => (
                <a key={item.label} href={item.href} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center glass group-hover:glow transition-shadow">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">{item.label}</span>
                </a>
              ))}
              <div className="flex gap-3 pt-4">
                {socials.map((s, i) => (
                  <a key={i} href={s.href} className="w-10 h-10 rounded-lg flex items-center justify-center glass hover:glow transition-all hover:-translate-y-1">
                    <s.icon size={18} className="text-muted-foreground hover:text-foreground" />
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
              <textarea
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                maxLength={1000}
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
              />
              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-xl font-medium text-primary-foreground flex items-center justify-center gap-2 disabled:opacity-50"
                style={{ background: "var(--gradient-primary)" }}
              >
                {sending ? "Sending..." : <><Send size={16} /> Send Message</>}
              </motion.button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
