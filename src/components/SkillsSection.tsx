"use client";

import { useState, useRef, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { IconCloud } from "@/components/ui/icon-cloud";
import { Particles } from "@/components/ui/particles";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

const slugs = [
  "typescript", "javascript", "java", "react", "html5", "css3",
  "tailwindcss", "nodedotjs", "nextdotjs", "python", "postgresql",
  "firebase", "mysql", "mariadb", "vercel", "git", "github",
  "visualstudiocode", "figma", "postman", "make", "clickup", "openai",
];

const skillsData: Record<string, { name: string; level: number }> = {
  typescript: { name: "TypeScript", level: 5 },
  javascript: { name: "JavaScript", level: 5 },
  java: { name: "Java", level: 5 },
  react: { name: "React", level: 5 },
  html5: { name: "HTML5", level: 5 },
  css3: { name: "CSS3", level: 5 },
  tailwindcss: { name: "Tailwind CSS", level: 5 },
  nodedotjs: { name: "Node.js", level: 5 },
  nextdotjs: { name: "Next.js", level: 5 },
  python: { name: "Python", level: 5 },
  postgresql: { name: "PostgreSQL", level: 5 },
  firebase: { name: "Firebase", level: 5 },
  mysql: { name: "MySQL", level: 5 },
  mariadb: { name: "MariaDB", level: 5 },
  vercel: { name: "Vercel", level: 5 },
  git: { name: "Git", level: 5 },
  github: { name: "GitHub", level: 5 },
  visualstudiocode: { name: "VS Code", level: 5 },
  figma: { name: "Figma", level: 5 },
  postman: { name: "Postman", level: 5 },
  make: { name: "Make", level: 5 },
  clickup: { name: "ClickUp", level: 5 },
  openai: { name: "OpenAI", level: 5 },
};

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const skill = selectedSkill ? skillsData[selectedSkill] : null;

  // Close on click outside
  useEffect(() => {
    if (!selectedSkill) return;
    const handler = (e: MouseEvent) => {
      const card = document.getElementById("skill-popup");
      if (card && !card.contains(e.target as Node)) {
        setSelectedSkill(null);
      }
    };
    window.addEventListener("mousedown", handler);
    return () => window.removeEventListener("mousedown", handler);
  }, [selectedSkill]);

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

          {/* Cloud + overlay card */}
          <div ref={containerRef} className="relative flex w-full max-w-[40rem] mx-auto items-center justify-center overflow-visible my-8">
            <IconCloud
              iconSlugs={slugs}
              onIconClick={(slug) =>
                setSelectedSkill((prev) => (prev === slug ? null : slug))
              }
            />

            {/* Skill popup card */}
            {skill && (
              <div
                id="skill-popup"
                className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 animate-in fade-in slide-in-from-bottom-4 duration-300"
              >
                <div className="flex items-center gap-4 rounded-xl border bg-card/90 backdrop-blur-md px-5 py-3 shadow-xl shadow-primary/10">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-bold text-foreground whitespace-nowrap">
                      {skill.name}
                    </span>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                      Conhecimento
                    </span>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className={cn(
                            "h-4 w-2.5 rounded-sm transition-colors duration-300",
                            i < skill.level ? "bg-primary" : "bg-muted"
                          )}
                        />
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedSkill(null)}
                    className="text-muted-foreground hover:text-foreground transition-colors ml-1"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-2 text-sm text-muted-foreground/60 animate-pulse mt-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>
        <span>Clique nos ícones para ver o nível</span>
      </div>
    </section>
  );
};

export default SkillsSection;
