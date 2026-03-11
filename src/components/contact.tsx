import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — Info */}
          <div>
            <p className="text-xs font-medium text-primary tracking-[0.2em] uppercase mb-4">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Commençons par
              <br />
              <span className="text-gradient">un diagnostic</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Premier échange gratuit de 30 minutes pour comprendre vos enjeux
              et identifier les premiers axes d&apos;optimisation. Sans engagement.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">contact@lent.fr</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Téléphone</p>
                  <p className="font-medium">+33 1 86 76 00 00</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Bureaux</p>
                  <p className="font-medium">Paris · Lyon · Toulouse</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="p-8 rounded-2xl bg-card border border-border gradient-border">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                    placeholder="Jean"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                    placeholder="Dupont"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email professionnel
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  placeholder="jean.dupont@entreprise.fr"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Entreprise
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  placeholder="Nom de votre entreprise"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Sujet
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="audit">Audit de performance</option>
                  <option value="network">Optimisation réseau</option>
                  <option value="app">Performance applicative</option>
                  <option value="cloud">Infrastructure cloud</option>
                  <option value="security">Sécurité & résilience</option>
                  <option value="other">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow resize-none"
                  placeholder="Décrivez brièvement votre problématique..."
                />
              </div>

              <button
                type="submit"
                className="group w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all glow-blue"
              >
                Envoyer ma demande
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-xs text-muted-foreground text-center">
                Nous vous répondons sous 24h ouvrées. Vos données sont traitées
                conformément au RGPD.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
