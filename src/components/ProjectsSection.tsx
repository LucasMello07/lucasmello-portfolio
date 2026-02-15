import { ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "Sistema de Gestão Empresarial",
    description: "Plataforma web para controle de clientes e contratos.",
    techs: ["React", "Node.js", "MySQL"],
    link: "#",
  },
  {
    title: "Plataforma IoT Agro",
    description: "Sistema de monitoramento agrícola com sensores e dashboard web.",
    techs: ["ESP32", "API REST", "React"],
    link: "#",
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projetos" className="py-24">
      <div className="container mx-auto px-4" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            <span className="text-gradient">Projetos</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12 mx-auto" />

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {projects.map((project, i) => (
              <div
                key={project.title}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:glow"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-secondary text-primary border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline transition-colors"
                >
                  Ver Projeto <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
