import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import DownloadButton from "@/components/ui/button-download";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [downloadStatus, setDownloadStatus] = useState<"idle" | "downloading" | "downloaded" | "complete">("idle");
  const [progress, setProgress] = useState(0);

  const simulateDownload = () => {
    setDownloadStatus("downloading");
    setProgress(0);

    // Trigger actual download
    const link = document.createElement('a');
    link.href = "/curriculo.pdf";
    link.download = "curriculo.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setDownloadStatus("downloaded");
          return 100;
        }
        return prevProgress + 5;
      });
    }, 200); // Update every 200ms to complete in 4 seconds

    // Show 'Downloaded' state for 1.5 seconds
    setTimeout(() => {
      setDownloadStatus("complete");
    }, 4000 + 1500);

    // Reset to idle state after download completes and 'Downloaded' state is shown
    setTimeout(() => {
      setDownloadStatus("idle");
      setProgress(0);
    }, 4000 + 1500 + 100);
  };

  const handleDownloadClick = () => {
    if (downloadStatus === "idle") {
      simulateDownload();
    }
  };

  return (
    <section id="sobre" className="py-24">
      <div className="container mx-auto px-4 max-w-3xl" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Sobre <span className="text-gradient">Mim</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />

          <p className="text-muted-foreground leading-relaxed text-lg mb-8">
            Sou formado em Ciência da Computação e atuo como Desenvolvedor Full Stack,
            desenvolvendo aplicações web modernas com React, TypeScript, Node.js e Next.js, além de criar APIs, integrar sistemas (CRMs e ERPs),
            automatizar processos e implementar agentes de IA para atendimento digital.
            Trabalho com foco em arquitetura organizada, performance, escalabilidade e experiência do usuário,
            sempre buscando gerar valor estratégico para o negócio por meio da tecnologia.
          </p>

          <DownloadButton 
            downloadStatus={downloadStatus}
            progress={progress}
            onClick={handleDownloadClick}
            label="Baixar Currículo"
            className="hover:shadow-xl transition-shadow duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
