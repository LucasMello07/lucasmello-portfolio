"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { IconCloud } from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "tailwindcss",
  "nodedotjs",
  "nextdotjs",
  "python",
  "postgresql",
  "firebase",
  "mysql",
  "mariadb",
  "vercel",
  "git",
  "github",
  "visualstudiocode",
  "figma",
  "postman",
  "make",
  "clickup",
  "openai",
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="habilidades" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4" ref={ref}>
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            <span className="text-gradient">Habilidades</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12 mx-auto" />

          {/* Nuvem Única Centralizada */}
          <div className="relative flex w-full max-w-[40rem] mx-auto items-center justify-center overflow-hidden my-8">
            <IconCloud iconSlugs={slugs} />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;