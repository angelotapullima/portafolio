import { portfolioData } from "@/data/portfolioData";
import { Smartphone, Globe, Code2, Linkedin, Github } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Smartphone className="w-5 h-5" aria-hidden="true" />,
      title: "mobile_runtime",
      description: portfolioData.about.features[0]
    },
    {
      icon: <Globe className="w-5 h-5" aria-hidden="true" />,
      title: "web_frontend",
      description: portfolioData.about.features[1]
    },
    {
      icon: <Code2 className="w-5 h-5" aria-hidden="true" />,
      title: "backend_arch",
      description: portfolioData.about.features[2]
    }
  ];

  return (
    <section id="sobre-mi" className="py-24 px-6 border-b border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-primary text-sm">$</span>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-foreground">cat about.md</h2>
          <span className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-5 bg-card border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-3 text-primary">
                {feature.icon}
                <span className="font-mono text-sm font-medium">{feature.title}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-4 font-mono text-xs text-muted-foreground">
            <span className="text-warning">●</span>
            <span>profile.md</span>
            <span className="ml-auto">{portfolioData.contact.location}</span>
          </div>
          <p className="text-lg text-foreground/90 leading-relaxed mb-4 font-sans">
            {portfolioData.bio}
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-6 font-sans">
            {portfolioData.about.description}
          </p>
          <div className="flex items-center gap-5">
            <a
              href={portfolioData.contact.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar el perfil de LinkedIn de Angelo Tapullima"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-mono text-sm"
            >
              <Linkedin className="w-4 h-4" aria-hidden="true" />
              <span>linkedin --connect</span>
            </a>
            <a
              href={portfolioData.contact.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar el perfil de GitHub de Angelo Tapullima"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-mono text-sm"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
              <span>github --repos</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
