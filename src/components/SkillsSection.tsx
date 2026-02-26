"use client";

import { useCallback, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { IconCloud } from "@/components/ui/icon-cloud";
import { Particles } from "@/components/ui/particles";
import { X } from "lucide-react";

const slugs = [
  "typescript", "javascript", "java", "react", "html5", "css3",
  "tailwindcss", "nodedotjs", "nextdotjs", "python", "postgresql",
  "firebase", "mysql", "mariadb", "vercel", "git", "github",
  "visualstudiocode", "figma", "postman", "make", "clickup", "openai",
];

const slugToName: Record<string, string> = {
  typescript: "TypeScript",
  javascript: "JavaScript",
  java: "Java",
  react: "React",
  html5: "HTML5",
  css3: "CSS3",
  tailwindcss: "Tailwind CSS",
  nodedotjs: "Node.js",
  nextdotjs: "Next.js",
  python: "Python",
  postgresql: "PostgreSQL",
  firebase: "Firebase",
  mysql: "MySQL",
  mariadb: "MariaDB",
  vercel: "Vercel",
  git: "Git",
  github: "GitHub",
  visualstudiocode: "VS Code",
  figma: "Figma",
  postman: "Postman",
  make: "Make",
  clickup: "ClickUp",
  openai: "OpenAI",
};

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const handleIconClick = useCallback((slug: string) => {
    setSelectedSkill((prev) => (prev === slug ? null : slug));
  }, []);

  return (
    <section id="habilidades" className="py-24 bg-secondary/30 relative overflow-hidden">
      <Particles
        className="absolute inset-0 z-0"
        quantity={80}
        color="#8862E3"
        size={0.5}
        staticity={40}
        ease={60}
      />
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            <span className="text-gradient">Habilidades</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-5 mx-auto" />
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ecossistema tecnológico focado em alta performance, arquitetura escalável e aplicações com inteligência artificial integrada.
          </p>
          <div className="relative flex w-full max-w-[40rem] mx-auto items-center justify-center overflow-hidden my-8">
            <IconCloud iconSlugs={slugs} onIconClick={handleIconClick} />
          </div>

          {/* Skill popup */}
          {selectedSkill && (
            <div className="max-w-[90vw] sm:max-w-sm mx-auto mt-2 animate-in fade-in slide-in-from-top-4 duration-300">
              <div className="rounded-2xl border border-border/50 bg-card/60 backdrop-blur-xl p-4 sm:p-5 shadow-lg">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground">
                    {slugToName[selectedSkill] ?? selectedSkill}
                  </h3>
                  <button
                    onClick={() => setSelectedSkill(null)}
                    className="text-muted-foreground hover:text-foreground transition-colors p-1"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mb-2 sm:mb-3">Nível de conhecimento</p>
                <div className="flex gap-1 sm:gap-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-2.5 sm:h-2 flex-1 rounded-full bg-primary"
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* UX */}
      <div className="flex justify-center items-center gap-2 text-sm text-muted-foreground/60 animate-pulse mt-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>
        <span>Clique em um ícone para ver detalhes</span>
      </div>
    </section>
  );
};

export default SkillsSection;
