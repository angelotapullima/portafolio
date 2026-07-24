import { portfolioData } from "@/data/portfolioData";
import { ArrowUpRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: "capital-lab",
      title: "Capital Lab — Portal Táctico",
      description: "Sistema de autenticación centralizado con Azure B2C para múltiples productos financieros. Desarrollo del Portal Táctico de Chile para mantener continuidad operativa.",
      tags: ["Vue.js", "Azure B2C", "TypeScript"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop"
    },
    {
      id: "tyba",
      title: "Tyba — Fintech App",
      description: "Aplicación fintech multiplataforma con Flutter. Implementación de arquitectura de micro frontends e integración con Firebase y Segment para analytics.",
      tags: ["Flutter", "Dart", "Firebase", "Micro Frontends"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    },
    {
      id: "canchas",
      title: "App Alquiler de Canchas",
      description: "Aplicación multiplataforma para alquiler de canchas sintéticas con integración de pasarelas de pago (Izypay) y geolocalización con Google Maps.",
      tags: ["Flutter", "Dart", "Google Maps", "Izypay"],
      image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&h=600&fit=crop"
    }
  ];

  const contactAboutProject = (projectTitle: string) => {
    const subject = encodeURIComponent(`Consulta sobre proyecto: ${projectTitle}`);
    window.location.href = `mailto:${portfolioData.contact.email}?subject=${subject}`;
  };

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
              <div className="grid md:grid-cols-[280px_1fr] gap-0">
                <div className="relative h-48 md:h-auto bg-secondary overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Vista del proyecto ${project.title}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
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
                    <button
                      onClick={() => contactAboutProject(project.title)}
                      className="inline-flex items-center gap-2 font-mono text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      <span>$</span>
                      <span>contact --project {project.id}</span>
                      <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    </button>
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
