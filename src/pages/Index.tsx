import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div id="inicio" className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />

      <footer className="py-6 px-6 border-t border-border">
        <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="text-primary">$</span>
            <span>exit 0</span>
          </div>
          <span>© {new Date().getFullYear()} Angelo Tapullima. Todos los derechos reservados.</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
