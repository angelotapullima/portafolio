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
      
      <footer className="py-8 text-center border-t border-border">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Angelo Tapullima. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Index;
