"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ProjectCard } from "@/components/ui/project-card";
import projectContrack from "@/assets/contrack_editada.png";
import projectAgro from "@/assets/agromello_editada.png";

const projects = [
  {
    title: "Contrack - Gestão de Contratos e Serviços",
    description: "Solução web centralizada para automação de contratos publicitários e integração entre agências, rádio e clientes. Garante fluxo digital seguro e auditável.",
    techs: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    // Adicionamos os links específicos aqui
    linkedinLink: "https://www.linkedin.com/in/lucasmello07/details/projects/",
    githubLink: "https://github.com/ifsp-sbv-projetos-bcc/pidc-pde-2025",
    imgSrc: projectContrack,
  },
  {
    title: "AgroMello - Plataforma IoT Agricultura 4.0",
    description: "Sistema IoT para monitoramento ambiental no agronegócio. Integra sensores, ESP32 e mensageria para envio de alertas e controle remoto em tempo real.",
    techs: ["ESP32", "IoT", "C++"],
    linkedinLink: "https://www.linkedin.com/in/lucasmello07/details/projects/",
    githubLink: "https://github.com/LucasMello07",
    imgSrc: projectAgro,
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projetos" className="py-24 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <div
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
            {/* Usando text-primary para cor sólida, ou mantenha text-gradient se preferir */}
            <span className="text-primary">Projetos</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-5 mx-auto" />

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto font-medium">
            Projetos desenvolvidos com foco em performance, escalabilidade e geração de valor através da tecnologia.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.title}
                imgSrc={project.imgSrc}
                title={project.title}
                description={project.description}
                // Passando os novos links
                githubLink={project.githubLink}
                linkedinLink={project.linkedinLink}
                techs={project.techs}
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;