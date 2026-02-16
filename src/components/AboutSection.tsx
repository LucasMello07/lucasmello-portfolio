import { Download } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="sobre" className="py-24">
      <div className="container mx-auto px-4 max-w-3xl" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Sobre <span className="text-gradient">Mim</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />

          <p className="text-muted-foreground leading-relaxed text-lg mb-8">
          Sou formado em Ciência da Computação e desenvolvedor full stack, com experiência na criação de aplicações web modernas, landing pages com React e TypeScript e soluções back-end com Node.js e Next.js. 
          Tenho experiência em integração de sistemas, APIs, automações e implementação de agentes de IA para atendimento 
          em sites e e-commerces, sempre com foco em performance, escalabilidade, experiência do usuário e geração de valor para o negócio.
          </p>

          <a
            href="/curriculo.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Download className="w-4 h-4" />
            Baixar Currículo
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
