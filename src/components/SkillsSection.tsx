"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { IconCloud } from "@/components/ui/icon-cloud";
import { Particles } from "@/components/ui/particles";

const slugs = [
  "typescript", "javascript", "java", "react", "html5", "css3",
  "tailwindcss", "nodedotjs", "nextdotjs", "python", "postgresql",
  "firebase", "mysql", "mariadb", "vercel", "git", "github",
  "visualstudiocode", "figma", "postman", "make", "clickup", "openai",
];

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
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
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
        </div>
      </div>
      {/* 2. DICA DE UX */}
      <div className="flex justify-center items-center gap-2 text-sm text-muted-foreground/60 animate-pulse mt-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>
        <span>Arraste os ícones para explorar</span>
      </div>
    </section>
  );
};

export default SkillsSection;
