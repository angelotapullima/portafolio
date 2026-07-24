import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { label: "about", id: "sobre-mi" },
    { label: "stack", id: "tech-stack" },
    { label: "projects", id: "proyectos" },
    { label: "contact", id: "contacto" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border font-mono text-sm transition-colors ${
        isScrolled ? "bg-background/95 backdrop-blur-sm" : "bg-background"
      }`}
      aria-label="Navegación principal"
    >
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-50 bg-primary text-primary-foreground px-4 py-2 text-sm"
        onClick={(e) => { e.preventDefault(); scrollToSection("inicio"); }}
      >
        Saltar al contenido
      </a>

      <div className="container mx-auto px-6 h-14 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("inicio")}
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
        >
          <span className="text-muted-foreground">$</span>
          <span>{portfolioData.name.toLowerCase().replace(" ", "-")}</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="px-4 py-2 text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3 text-xs text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-success" aria-hidden="true" />
          <span>available</span>
        </div>

        <button
          className="md:hidden p-2 text-muted-foreground hover:text-primary"
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-14 left-0 right-0 bg-background border-b border-border p-4 space-y-1"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left px-4 py-3 text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
