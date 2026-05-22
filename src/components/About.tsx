import { Card } from "@/components/ui/card";
import { Code2, Smartphone, Globe, Linkedin, Github } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const About = () => {
  const features = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Desarrollo Mobile",
      description: portfolioData.about.features[0] // Mapear a la descripción de portfolioData
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Desarrollo Web",
      description: portfolioData.about.features[1] // Mapear a la descripción de portfolioData
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Full Stack",
      description: portfolioData.about.features[2] // Mapear a la descripción de portfolioData
    }
  ];

  return (
    <section id="sobre-mi" className="py-24 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Sobre Mí
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {portfolioData.title}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 backdrop-blur-sm bg-card/50 border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] group animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto backdrop-blur-sm bg-card/30 border border-primary/20 rounded-xl p-8">
          <p className="text-lg text-foreground/90 leading-relaxed mb-4">
            {portfolioData.bio}
          </p>
          <p className="text-lg text-foreground/90 leading-relaxed mb-8">
            {portfolioData.about.description}
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href={portfolioData.contact.social.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a 
              href={portfolioData.contact.social.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors"
            >
              <Github className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
