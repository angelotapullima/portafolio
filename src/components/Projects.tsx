import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const Projects = () => {
  const projects = [
    {
      title: "Capital Lab - Portal Táctico",
      description: "Sistema de autenticación centralizado con Azure B2C para múltiples productos financieros. Desarrollo del Portal Táctico de Chile para mantener continuidad operativa.",
      tags: ["Vue.js", "Azure B2C", "TypeScript"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop"
    },
    {
      title: "Tyba - Fintech App",
      description: "Aplicación fintech multiplataforma con Flutter. Implementación de arquitectura de micro frontends e integración con Firebase y Segment para analytics.",
      tags: ["Flutter", "Dart", "Firebase", "Micro Frontends"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    },
    {
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
    <section id="proyectos" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 motion-safe:animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Proyectos Destacados
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Algunos de mis trabajos recientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card/50 border-border hover:border-primary/50 transition-colors group motion-safe:animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={`Imagen representativa del proyecto ${project.title}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-primary/10 border-primary/30"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button
                  size="sm"
                  variant="outline"
                  className="w-full border-primary/30 hover:bg-primary/10"
                  onClick={() => contactAboutProject(project.title)}
                >
                  <MessageCircle className="w-4 h-4 mr-2" aria-hidden="true" />
                  Hablemos de este proyecto
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
