import { Github, Linkedin, Instagram, Mail, Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const contactLinks = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "(16) 99202-8407",
    href: "https://wa.me/5516992028407",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@lucasmello04",
    href: "https://instagram.com/lucasmello04",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "lucasmello07",
    href: "https://www.linkedin.com/in/lucasmello07/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "LucasMello07",
    href: "https://github.com/LucasMello07",
  },
];

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contato" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-3xl" ref={ref}>
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            <span className="text-gradient">Entre em Contato!</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-6 mx-auto" />
          <p className="text-muted-foreground text-center text-lg mb-12 max-w-xl mx-auto">
            Sempre em busca de novos desafios tecnológicos e oportunidades para
            elevar o nível do desenvolvimento.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {contactLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:glow group"
                >
                  <div className="p-3 rounded-lg bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium text-foreground">{item.value}</p>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="text-center">
            <a
              href="mailto:lucasmellofreitas2014@gmail.com"
              className="inline-flex items-center gap-2 text-primary hover:underline font-mono text-sm"
            >
              <Mail className="w-4 h-4" />
              lucasmellofreitas2014@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
