import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
      
      {/* Animated Circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto relative z-10 text-center animate-fade-in">
        <div className="inline-block mb-4 px-4 py-2 backdrop-blur-sm bg-card/30 border border-primary/20 rounded-full">
          <span className="text-primary text-sm font-medium">👋 Hola, soy</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-scale-in">
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
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] transition-all"
            onClick={() => scrollToSection("proyectos")}
          >
            Ver Proyectos
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary/30 hover:bg-primary/10 backdrop-blur-sm"
            onClick={() => scrollToSection("contacto")}
          >
            Contactar
          </Button>
        </div>
        
        <div className="flex gap-6 justify-center">
          <a 
            href="https://github.com/angelotapullima" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/anked10" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:angelo.anked@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
