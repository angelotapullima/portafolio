import { Badge } from "@/components/ui/badge";

const TechStack = () => {
  const technologies = {
    "Mobile": ["Flutter", "Dart", "Kotlin", "Riverpod"],
    "Frontend": ["Vue.js", "JavaScript", "TypeScript", "Micro Frontends"],
    "Backend": ["Node.js", "Firebase", "Clean Architecture"],
    "Cloud & Tools": ["Azure", "Azure B2C", "Git", "CI/CD", "Segment"]
  };

  return (
    <section id="tech-stack" className="py-24 px-6 bg-card/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 motion-safe:animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Tecnologías
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tecnologías y herramientas que domino
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {Object.entries(technologies).map(([category, techs], categoryIndex) => (
            <div
              key={category}
              className="motion-safe:animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <h3 className="text-xl font-bold mb-4 text-primary">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {techs.map((tech, techIndex) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="px-4 py-2 text-base bg-card/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-colors cursor-default motion-safe:animate-scale-in"
                    style={{ animationDelay: `${(categoryIndex * 100) + (techIndex * 50)}ms` }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
