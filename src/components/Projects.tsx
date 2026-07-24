import { ArrowUpRight, ExternalLink, Smartphone } from "lucide-react";

interface ProjectLink {
  label: string;
  href: string;
  icon: "web" | "mobile";
}

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
  image: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: "capital-lab",
      title: "Capital Lab — Portal Táctico",
      description: "Sistema de autenticación centralizado con Azure B2C para múltiples productos financieros. Desarrollo del Portal Táctico de Chile para mantener continuidad operativa.",
      tags: ["Vue.js", "Azure B2C", "TypeScript"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
      links: []
    },
    {
      id: "tyba",
      title: "Tyba — Fintech App",
      description: "Aplicación fintech multiplataforma con Flutter. Implementación de arquitectura de micro frontends e integración con Firebase y Segment para analytics.",
      tags: ["Flutter", "Dart", "Firebase", "Micro Frontends"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      links: []
    },
    {
      id: "canchas",
      title: "App Alquiler de Canchas",
      description: "Aplicación multiplataforma para alquiler de canchas sintéticas con integración de pasarelas de pago (Izypay) y geolocalización con Google Maps.",
      tags: ["Flutter", "Dart", "Google Maps", "Izypay"],
      image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&h=600&fit=crop",
      links: []
    },
    {
      id: "sudoku-web",
      title: "Sudoku Arena — Web",
      description: "Juego de Sudoku completo para navegador: generación de tableros, múltiples dificultades, validación en tiempo real, pistas y temporizador. Experiencia limpia y responsive.",
      tags: ["Vue.js", "TypeScript", "PWA", "Game Logic"],
      image: "https://images.unsplash.com/photo-1606318801954-d46d46d3360a?w=800&h=600&fit=crop",
      links: [
        { label: "sudokudev.anked.dev", href: "https://sudokudev.anked.dev/", icon: "web" }
      ]
    },
    {
      id: "sudoku-android",
      title: "Sudoku Arena — Android",
      description: "Versión nativa Android del juego Sudoku Arena publicada en Google Play. Desarrollada con Flutter para ofrecer la misma experiencia en móvil con guardado de progreso y desafíos.",
      tags: ["Flutter", "Android", "Google Play", "Game Logic"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      links: [
        { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.anked.dev.sudoku_arena", icon: "mobile" }
      ]
    },
    {
      id: "bajadita",
      title: "Bajadita — Barbería",
      description: "Sitio web para barbería con identidad visual propia, información de servicios, horarios y contacto directo. Experiencia simple, rápida y orientada a conversiones locales.",
      tags: ["Vue.js", "Landing Page", "Responsive"],
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&h=600&fit=crop",
      links: [
        { label: "bajadita.anked.dev", href: "https://bajadita.anked.dev/", icon: "web" }
      ]
    }
  ];

  return (
    <section id="proyectos" className="py-24 px-6 border-b border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-primary text-sm">$</span>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-foreground">deploy --list</h2>
          <span className="flex-1 h-px bg-border" />
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-card border border-border hover:border-primary/50 transition-colors overflow-hidden"
            >
              <div className="grid md:grid-cols-[240px_1fr] gap-0">
                <div className="relative h-44 md:h-auto bg-secondary overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Vista del proyecto ${project.title}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/90 hidden md:block" />
                  <div className="absolute top-3 left-3 font-mono text-xs text-primary bg-background/80 px-2 py-1">
                    {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-mono text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="font-mono text-xs text-success border border-success/30 px-2 py-1 shrink-0">
                      status: live
                    </span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-5 font-sans">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs text-primary border border-primary/30 px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-4">
                    {project.links.length > 0 ? (
                      project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-mono text-sm text-primary hover:text-primary/80 transition-colors"
                        >
                          <span>$</span>
                          <span>open --{link.icon} {link.label}</span>
                          {link.icon === "web" ? (
                            <ExternalLink className="w-4 h-4" aria-hidden="true" />
                          ) : (
                            <Smartphone className="w-4 h-4" aria-hidden="true" />
                          )}
                        </a>
                      ))
                    ) : (
                      <span className="font-mono text-xs text-muted-foreground">
                        # links privados — disponible bajo solicitud
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
