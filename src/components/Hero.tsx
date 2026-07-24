import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />

      <div className="container mx-auto relative z-10 text-center motion-safe:animate-fade-in">
        <div className="inline-block mb-4 px-4 py-2 bg-card/60 border border-border rounded-full">
          <span className="text-primary text-sm font-medium">Hola, soy</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground motion-safe:animate-scale-in">
          Angelo Tapullima
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Frontend Engineer | Full-Stack Developer
        </p>

        <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          Ingeniero de Sistemas con +5 años de experiencia en desarrollo full-stack.
          Especializado en Flutter, Vue.js, Node.js y arquitecturas escalables en entornos financieros.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-all"
            onClick={() => scrollToSection("proyectos")}
          >
            Ver Proyectos
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 hover:bg-primary/10"
            onClick={() => scrollToSection("contacto")}
          >
            Contactar
          </Button>
        </div>

        <div className="flex gap-6 justify-center">
          <a
            href={portfolioData.contact.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar el perfil de GitHub de Angelo Tapullima"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-6 h-6" aria-hidden="true" />
          </a>
          <a
            href={portfolioData.contact.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar el perfil de LinkedIn de Angelo Tapullima"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-6 h-6" aria-hidden="true" />
          </a>
          <a
            href={`mailto:${portfolioData.contact.email}`}
            aria-label="Enviar un correo a Angelo Tapullima"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-6 h-6" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
