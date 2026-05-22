import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: portfolioData.contact.email,
      link: `mailto:${portfolioData.contact.email}`
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Teléfono",
      value: portfolioData.contact.phone,
      link: `tel:${portfolioData.contact.phone.replace(/\s/g, '')}`
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Ubicación",
      value: portfolioData.contact.location,
      link: null
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "Perfil de LinkedIn",
      link: portfolioData.contact.social.linkedin
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      value: "Perfil de GitHub",
      link: portfolioData.contact.social.github
    }
  ];

  return (
    <section id="contacto" className="py-24 px-6 bg-card/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Hablemos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escucharte
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card 
              key={index}
              className="p-6 backdrop-blur-sm bg-card/50 border-primary/20 hover:border-primary/50 transition-all text-center group animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-primary mb-3 flex justify-center group-hover:scale-110 transition-transform">
                {info.icon}
              </div>
              <h3 className="font-semibold mb-2">{info.title}</h3>
              {info.link ? (
                <a 
                  href={info.link}
                  target={info.title === "LinkedIn" || info.title === "GitHub" ? "_blank" : "_self"}
                  rel={info.title === "LinkedIn" || info.title === "GitHub" ? "noopener noreferrer" : ""}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-muted-foreground text-sm">{info.value}</p>
              )}
            </Card>
          ))}
        </div>
        
        <div className="text-center backdrop-blur-sm bg-card/30 border border-primary/20 rounded-xl p-12 animate-fade-in">
          <p className="text-lg mb-6">
            Disponible para nuevos proyectos y oportunidades profesionales
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] transition-all"
            onClick={() => window.location.href = `mailto:${portfolioData.contact.email}`}
          >
            Enviar Mensaje
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
