import { Factory, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const links = {
    platform: [
      { label: "Diagnostic 360°", href: "#" },
      { label: "Tableau de Bord", href: "#" },
      { label: "Programmes d'Appui", href: "#" },
      { label: "Recommandations IA", href: "#" },
    ],
    resources: [
      { label: "Centre d'Aide", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Tutoriels Vidéo", href: "#" },
    ],
    legal: [
      { label: "Mentions Légales", href: "#" },
      { label: "Politique de Confidentialité", href: "#" },
      { label: "Conditions d'Utilisation", href: "#" },
    ],
  };

  return (
    <footer className="bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <Factory className="w-5 h-5 text-accent-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg">APII</span>
                <span className="text-xs text-primary-foreground/60 -mt-1">Maturité Industrielle</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm mb-6">
              Plateforme intelligente d'aide à la décision pour l'évaluation de la maturité industrielle 
              et l'orientation vers les dispositifs de soutien à l'innovation.
            </p>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Tunis, Tunisie</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+216 71 792 144</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contact@apii.tn</span>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Plateforme</h4>
            <ul className="space-y-2">
              {links.platform.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Ressources</h4>
            <ul className="space-y-2">
              {links.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Légal</h4>
            <ul className="space-y-2">
              {links.legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60">
            © 2024 Agence de Promotion de l'Industrie et de l'Innovation. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-primary-foreground/40">Propulsé par l'IA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
