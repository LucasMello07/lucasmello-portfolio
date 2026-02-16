import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ProjectCard } from "@/components/ui/project-card";
import projectGestao from "@/assets/project-gestao.jpg";
import projectIotAgro from "@/assets/project-iot-agro.jpg";

const projects = [
  {
    title: "Sistema de Gestão Empresarial",
    description: "Plataforma web para controle de clientes e contratos.",
    techs: ["React", "Node.js", "MySQL"],
    link: "#",
    imgSrc: projectGestao,
  },
  {
    title: "Plataforma IoT Agro",
    description: "Sistema de monitoramento agrícola com sensores e dashboard web.",
    techs: ["ESP32", "API REST", "React"],
    link: "#",
    imgSrc: projectIotAgro,
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
              <ProjectCard
                key={project.title}
                imgSrc={project.imgSrc}
                title={project.title}
                description={project.description}
                link={project.link}
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
