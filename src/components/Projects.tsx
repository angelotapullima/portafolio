import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Capital Lab - Portal Táctico",
      description: "Sistema de autenticación centralizado con Azure B2C para múltiples productos financieros. Desarrollo del Portal Táctico de Chile en tiempo récord para mantener continuidad operativa.",
      tags: ["Vue.js", "Azure B2C", "TypeScript"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop"
    },
    {
      title: "Tyba - Fintech App",
      description: "Aplicación Fintech multiplataforma con Flutter. Implementación de arquitectura de micro frontends y integración con Firebase y Segment para analytics.",
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

  return (
    <section id="proyectos" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
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
              className="overflow-hidden backdrop-blur-sm bg-card/50 border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] group animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
                      className="backdrop-blur-sm bg-primary/10 border-primary/30"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1 border-primary/30 hover:bg-primary/10"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1 border-primary/30 hover:bg-primary/10"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Código
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
