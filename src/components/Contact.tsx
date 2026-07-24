import { portfolioData } from "@/data/portfolioData";
import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const channels = [
    {
      icon: <Mail className="w-4 h-4" aria-hidden="true" />,
      label: "email",
      value: portfolioData.contact.email,
      href: `mailto:${portfolioData.contact.email}`,
      external: false
    },
    {
      icon: <Phone className="w-4 h-4" aria-hidden="true" />,
      label: "phone",
      value: portfolioData.contact.phone,
      href: `tel:${portfolioData.contact.phone.replace(/\s/g, "")}`,
      external: false
    },
    {
      icon: <MapPin className="w-4 h-4" aria-hidden="true" />,
      label: "location",
      value: portfolioData.contact.location,
      href: null
    },
    {
      icon: <Linkedin className="w-4 h-4" aria-hidden="true" />,
      label: "linkedin",
      value: "conectar",
      href: portfolioData.contact.social.linkedin,
      external: true
    },
    {
      icon: <Github className="w-4 h-4" aria-hidden="true" />,
      label: "github",
      value: "ver repos",
      href: portfolioData.contact.social.github,
      external: true
    }
  ];

  return (
    <section id="contacto" className="py-24 px-6 border-b border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-primary text-sm">$</span>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-foreground">contact --init</h2>
          <span className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-[1fr_360px] gap-8">
          <div className="bg-card border border-border p-6 sm:p-8">
            <div className="font-mono text-xs text-muted-foreground mb-6 pb-3 border-b border-border">
              <span className="text-accent">$</span> ./connect.sh --priority high
            </div>

            <p className="text-lg text-foreground/90 leading-relaxed mb-6 font-sans">
              Disponible para nuevos proyectos y oportunidades profesionales. El canal más directo es el correo.
            </p>

            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="inline-flex items-center gap-3 px-6 py-4 bg-primary text-primary-foreground font-mono text-base font-medium hover:bg-primary/90 transition-colors"
            >
              <span>$</span>
              <span>send-email --to {portfolioData.contact.email}</span>
            </a>
          </div>

          <div className="bg-card border border-border p-5">
            <div className="font-mono text-xs text-muted-foreground mb-4 pb-3 border-b border-border">
              channels.json
            </div>
            <div className="space-y-3">
              {channels.map((channel) => (
                <div key={channel.label} className="flex items-center gap-3 text-sm">
                  <span className="text-primary">{channel.icon}</span>
                  <span className="font-mono text-muted-foreground w-20 shrink-0">{channel.label}</span>
                  {channel.href ? (
                    <a
                      href={channel.href}
                      target={channel.external ? "_blank" : "_self"}
                      rel={channel.external ? "noopener noreferrer" : undefined}
                      className="text-foreground hover:text-primary transition-colors font-sans"
                    >
                      {channel.value}
                    </a>
                  ) : (
                    <span className="text-foreground font-sans">{channel.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
