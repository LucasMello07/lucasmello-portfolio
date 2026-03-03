"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ProjectCard } from "@/components/ui/project-card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Github, Linkedin, ExternalLink } from "lucide-react";
import projectContrack from "@/assets/contrack_editada.png";
import projectAgro from "@/assets/agromello_editada.png";
import projectConecta from "@/assets/conecta.png";

interface Project {
  title: string;
  description: string;
  details: string;
  techs: string[];
  linkedinLink: string;
  githubLink: string;
  imgSrc: string;
}

const projects: Project[] = [
  {
    title: "Contrack - Gestão de Contratos e Serviços",
    description: "Solução web centralizada para automação de contratos publicitários e integração entre agências, rádio e clientes. Garante fluxo digital seguro e auditável.",
    details: "Em breve mais detalhes sobre este projeto.",
    techs: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    linkedinLink: "https://www.linkedin.com/in/lucasmello07/details/projects/",
    githubLink: "https://github.com/ifsp-sbv-projetos-bcc/pidc-pde-2025",
    imgSrc: projectContrack,
  },
  {
    title: "AgroMello - Plataforma IoT Agricultura 4.0",
    description: "Sistema IoT para monitoramento ambiental no agronegócio. Integra sensores, ESP32 e mensageria para envio de alertas e controle remoto em tempo real.",
    details: "Em breve mais detalhes sobre este projeto.",
    techs: ["ESP32", "IoT", "C++"],
    linkedinLink: "https://www.linkedin.com/in/lucasmello07/details/projects/",
    githubLink: "https://github.com/LucasMello07",
    imgSrc: projectAgro,
  },
  {
    title: "Conecta+ – Plataforma Inteligente de Conexão",
    description: "Solução web centralizada para conectar profissionais autônomos à população, automatizando agendamentos, avaliações e gestão de serviços. Integra ranking de reputação e sincronização com Google Agenda.",
    details: "Em breve mais detalhes sobre este projeto.",
    techs: ["React", "TypeScript", "Node.js"],
    linkedinLink: "https://www.linkedin.com/in/lucasmello07/details/projects/",
    githubLink: "https://github.com/LucasMello07/conecta-lucas",
    imgSrc: projectConecta,
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projetos" className="py-24 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <div
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
            <span className="text-primary">Projetos</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-5 mx-auto" />

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto font-medium">
            Projetos desenvolvidos com foco em performance, escalabilidade e geração de valor através da tecnologia.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project, i) => (
              <div key={project.title} className="cursor-pointer" onClick={() => setSelectedProject(project)}>
                <ProjectCard
                  imgSrc={project.imgSrc}
                  title={project.title}
                  description={project.description}
                  githubLink={project.githubLink}
                  linkedinLink={project.linkedinLink}
                  techs={project.techs}
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          {selectedProject && (
            <>
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted mb-4">
                <img
                  src={selectedProject.imgSrc}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-base leading-relaxed mt-2">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.details}
                </p>

                {/* Techs */}
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techs.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono font-medium px-3 py-1 rounded-md bg-secondary/50 text-secondary-foreground border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-2 border-t border-border/50">
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Código</span>
                    </a>
                  )}
                  {selectedProject.linkedinLink && (
                    <a
                      href={selectedProject.linkedinLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-[#0077b5] transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;