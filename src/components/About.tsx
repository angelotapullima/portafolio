import { Card } from "@/components/ui/card";
import { Code2, Smartphone, Globe } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Desarrollo Mobile",
      description: "Apps nativas y multiplataforma con React Native, Flutter y tecnologías modernas."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Desarrollo Web",
      description: "Aplicaciones web escalables con React, Next.js y las últimas tecnologías frontend."
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Full Stack",
      description: "Soluciones completas desde el frontend hasta el backend, APIs y bases de datos."
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
            Desarrollador apasionado por crear soluciones tecnológicas innovadoras
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
            Ingeniero de Sistemas e Informática con más de 5 años de experiencia en desarrollo de software full-stack. 
            Especializado en JavaScript, TypeScript, Vue.js, Node.js y desarrollo móvil con Flutter/Dart.
          </p>
          <p className="text-lg text-foreground/90 leading-relaxed">
            Experiencia comprobada liderando equipos técnicos y diseñando arquitecturas escalables en entornos 
            financieros de alta exigencia. Enfocado en crear soluciones innovadoras que resuelven problemas 
            complejos de negocio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
