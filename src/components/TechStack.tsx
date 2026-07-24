const TechStack = () => {
  const modules = {
    "mobile": ["Flutter", "Dart", "Kotlin", "Riverpod"],
    "frontend": ["Vue.js", "JavaScript", "TypeScript", "Micro Frontends"],
    "backend": ["Node.js", "Firebase", "Clean Architecture"],
    "cloud_tools": ["Azure", "Azure B2C", "Git", "CI/CD", "Segment"]
  };

  return (
    <section id="tech-stack" className="py-24 px-6 border-b border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-primary text-sm">$</span>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-foreground">ls stack/</h2>
          <span className="flex-1 h-px bg-border" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {Object.entries(modules).map(([category, techs]) => (
            <div key={category} className="bg-card border border-border p-5">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
                <span className="font-mono text-sm text-accent font-medium">{category}.json</span>
                <span className="font-mono text-xs text-muted-foreground">{techs.length} items</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-3 py-1.5 border border-border bg-secondary text-foreground font-mono text-xs hover:border-primary hover:text-primary transition-colors"
                  >
                    {tech}
                  </span>
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
