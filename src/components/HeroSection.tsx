import { Github, Linkedin, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { BackgroundPaths } from "@/components/ui/background-paths";
import DownloadButton from "@/components/ui/button-download";

const useTypingEffect = (text: string, speed = 80) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    setDisplayed("");
    setDone(false);
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return { displayed, done };
};

const HeroSection = () => {
  const { displayed, done } = useTypingEffect("Desenvolvedor Full Stack Junior", 80);
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
    <section id="home" className="min-h-screen flex items-center pt-16 relative">
      <BackgroundPaths />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* Photo */}
          <div className="flex-shrink-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-border glow">
              <img
                src={profilePhoto}
                alt="Lucas Melo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-primary font-mono text-sm mb-3 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Olá, seja bem-vindo 👋
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Meu nome é{" "}
              <span className="text-gradient">Lucas Mello</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium mb-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <span className="text-primary font-mono">
                {displayed}
                <span
                  className={`inline-block w-0.5 h-5 md:h-6 bg-primary ml-0.5 align-middle ${done ? "animate-[blink_1s_step-end_infinite]" : ""
                    }`}
                />
              </span>
            </h2>
            <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.4s" }}>
              Desenvolvo aplicações ponta a ponta, garantindo integração eficiente entre as camadas da aplicação.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4 justify-center md:justify-start mb-8 animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <a
                href="https://github.com/LucasMello07"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-muted transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/lucasmello07/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-muted transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5515991022077"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-muted transition-all duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>

            {/* CTA */}
            <div className="animate-fade-up" style={{ animationDelay: "0.6s" }}>
              <DownloadButton 
                downloadStatus={downloadStatus}
                progress={progress}
                onClick={handleDownloadClick}
                label="Baixar Currículo"
                className="hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
