import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skills = [
  { name: "JavaScript", icon: "JS" },
  { name: "TypeScript", icon: "TS" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "Laravel", icon: "🔺" },
  { name: "Java", icon: "☕" },
  { name: "MySQL", icon: "🗃️" },
  { name: "Git", icon: "🔀" },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="habilidades" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            <span className="text-gradient">Habilidades</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12 mx-auto" />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {skills.map((skill, i) => (
              <div
                key={skill.name}
                className="group flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:glow transition-all duration-300 cursor-default"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                  {skill.icon}
                </span>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
