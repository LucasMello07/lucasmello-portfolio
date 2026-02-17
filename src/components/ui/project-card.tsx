import * as React from "react";
import { Github, Linkedin, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  title: string;
  description: string;
  githubLink?: string;
  linkedinLink?: string;
  deployLink?: string; // Mantive opcional caso queira por link do site rodando no futuro
  techs?: string[];
}

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ className, imgSrc, title, description, githubLink, linkedinLink, deployLink, techs, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1",
          className
        )}
        {...props}
      >
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
        />
        {/* Imagem */}
        <div className="aspect-video w-full overflow-hidden bg-muted">
          <img
            src={imgSrc}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Conteúdo */}
        <div className="flex flex-1 flex-col gap-4 p-5">
          <div>
            <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-200">
              {title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
              {description}
            </p>
          </div>

          {/* Tecnologias */}
          {techs && techs.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-auto pt-2">
              {techs.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-mono font-medium px-2 py-1 rounded-md bg-secondary/50 text-secondary-foreground border border-border/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Botões de Ação */}
          <div className="flex items-center gap-3 mt-2 border-t border-border/50 pt-4">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-4 h-4" />
                <span>Código</span>
              </a>
            )}
            
            {linkedinLink && (
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-[#0077b5] transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            )}

            {deployLink && (
              <a
                href={deployLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors ml-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <span>Demo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
);
ProjectCard.displayName = "ProjectCard";

export { ProjectCard };