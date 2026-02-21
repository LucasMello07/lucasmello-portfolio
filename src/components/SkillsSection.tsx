"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { IconCloud } from "@/components/ui/icon-cloud";
import { Particles } from "@/components/ui/particles";
import { cn } from "@/lib/utils";

const slugs = [
  "typescript", "javascript", "java", "react", "html5", "css3",
  "tailwindcss", "nodedotjs", "nextdotjs", "python", "postgresql",
  "firebase", "mysql", "mariadb", "vercel", "git", "github",
  "visualstudiocode", "figma", "postman", "make", "clickup", "openai",
];

const skillsData: { slug: string; name: string; level: number }[] = [
  { slug: "typescript", name: "TypeScript", level: 5 },
  { slug: "javascript", name: "JavaScript", level: 5 },
  { slug: "java", name: "Java", level: 5 },
  { slug: "react", name: "React", level: 5 },
  { slug: "html5", name: "HTML5", level: 5 },
  { slug: "css3", name: "CSS3", level: 5 },
  { slug: "tailwindcss", name: "Tailwind CSS", level: 5 },
  { slug: "nodedotjs", name: "Node.js", level: 5 },
  { slug: "nextdotjs", name: "Next.js", level: 5 },
  { slug: "python", name: "Python", level: 5 },
  { slug: "postgresql", name: "PostgreSQL", level: 5 },
  { slug: "firebase", name: "Firebase", level: 5 },
  { slug: "mysql", name: "MySQL", level: 5 },
  { slug: "mariadb", name: "MariaDB", level: 5 },
  { slug: "vercel", name: "Vercel", level: 5 },
  { slug: "git", name: "Git", level: 5 },
  { slug: "github", name: "GitHub", level: 5 },
  { slug: "visualstudiocode", name: "VS Code", level: 5 },
  { slug: "figma", name: "Figma", level: 5 },
  { slug: "postman", name: "Postman", level: 5 },
  { slug: "make", name: "Make", level: 5 },
  { slug: "clickup", name: "ClickUp", level: 5 },
  { slug: "openai", name: "OpenAI", level: 5 },
];

const SkillBar = ({ filled }: { filled: boolean }) => (
  <div
    className={cn(
      "h-5 w-3 rounded-sm transition-colors duration-300",
      filled ? "bg-primary" : "bg-muted"
    )}
  />
);

const SkillCard = ({ name, level }: { name: string; level: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen(!open)}
      className={cn(
        "flex flex-col items-start gap-2 rounded-lg border bg-card/80 backdrop-blur-sm p-3 text-left transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:shadow-primary/10 cursor-pointer w-full",
        open && "border-primary/60 shadow-lg shadow-primary/15"
      )}
    >
      <span className="text-sm font-semibold text-foreground">{name}</span>
      {open && (
        <div className="flex flex-col gap-1 w-full animate-in fade-in slide-in-from-top-2 duration-300">
          <span className="text-xs text-muted-foreground">Conhecimento</span>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <SkillBar key={i} filled={i < level} />
            ))}
          </div>
        </div>
      )}
    </button>
  );
};

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

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
            <IconCloud iconSlugs={slugs} />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-4xl mx-auto mt-8">
            {skillsData.map((skill) => (
              <SkillCard key={skill.slug} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
      </div>

      {/* UX */}
      <div className="flex justify-center items-center gap-2 text-sm text-muted-foreground/60 animate-pulse mt-8">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>
        <span>Arraste os ícones para explorar</span>
      </div>
    </section>
  );
};

export default SkillsSection;
