export function Footer() {
  return (
    <footer className="py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-7 h-7">
                <div className="absolute inset-0 bg-primary rounded-lg rotate-45" />
                <div className="absolute inset-[3px] bg-background rounded-[4px] rotate-45" />
                <div className="absolute inset-[5px] bg-primary/80 rounded-[2px] rotate-45" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                Lent<span className="text-primary">.</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Conseil en optimisation réseau et performance applicative pour les entreprises exigeantes.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Optimisation réseau
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Performance applicative
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Infrastructure cloud
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Sécurité & résilience
                </a>
              </li>
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#expertise" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#methodologie" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Méthodologie
                </a>
              </li>
              <li>
                <a href="#resultats" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Résultats
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Carrières
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Contact</h4>
            <ul className="space-y-2.5">
              <li className="text-sm text-muted-foreground">
                contact@lent.fr
              </li>
              <li className="text-sm text-muted-foreground">
                Paris · Lyon · Toulouse
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Lent. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
