import { useEffect, useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Github, Linkedin, Mail } from "lucide-react";

const TYPED_TEXT = `Angelo Tapullima`;
const TYPING_SPEED = 80;

const Hero = () => {
  const [typed, setTyped] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [showMeta, setShowMeta] = useState(false);

  useEffect(() => {
    if (typed.length < TYPED_TEXT.length) {
      const timeout = setTimeout(() => {
        setTyped(TYPED_TEXT.slice(0, typed.length + 1));
      }, TYPING_SPEED);
      return () => clearTimeout(timeout);
    }
    const metaTimeout = setTimeout(() => setShowMeta(true), 400);
    return () => clearTimeout(metaTimeout);
  }, [typed]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const contactEmail = () => {
    window.location.href = `mailto:${portfolioData.contact.email}`;
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col justify-center relative px-6 pt-20 pb-16 border-b border-border"
    >
      <div className="absolute inset-0 terminal-grid opacity-30 pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="font-mono text-sm text-muted-foreground mb-8 motion-safe:animate-line-reveal">
          <span className="text-primary">~/angelo-tapullima</span>
          <span className="mx-2">|</span>
          <span>main</span>
          <span className="mx-2">|</span>
          <span className="text-success">● online</span>
        </div>

        <div className="mb-10 motion-safe:animate-line-reveal" style={{ animationDelay: "100ms" }}>
          <div className="flex items-baseline flex-wrap gap-x-3 gap-y-2">
            <span className="font-mono text-primary text-lg sm:text-xl">$ whoami</span>
          </div>
          <h1 className="font-mono text-5xl sm:text-7xl md:text-8xl font-bold text-foreground mt-4 tracking-tight">
            {typed}
            <span className="inline-block w-[0.6em] h-[1em] bg-primary ml-2 align-middle cursor-blink" aria-hidden="true" />
          </h1>
        </div>

        {showMeta && (
          <div className="space-y-6 font-mono motion-safe:animate-line-reveal">
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl">
              {portfolioData.title}
            </p>
            <p className="text-base sm:text-lg text-foreground/80 max-w-3xl leading-relaxed font-sans">
              {portfolioData.bio}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={contactEmail}
                className="group inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground font-mono text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                <span className="text-primary-foreground/70">$</span>
                <span>run contact.sh</span>
              </button>
              <button
                onClick={() => scrollToSection("proyectos")}
                className="group inline-flex items-center gap-2 px-5 py-3 border border-border hover:border-primary hover:text-primary transition-colors font-mono text-sm"
              >
                <span className="text-muted-foreground">$</span>
                <span>ls proyectos</span>
              </button>
            </div>

            <div className="flex items-center gap-6 pt-6">
              <a
                href={portfolioData.contact.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar el perfil de GitHub de Angelo Tapullima"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href={portfolioData.contact.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar el perfil de LinkedIn de Angelo Tapullima"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${portfolioData.contact.email}`}
                aria-label="Enviar un correo a Angelo Tapullima"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
