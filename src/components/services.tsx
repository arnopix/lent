import {
  Network,
  Gauge,
  Cloud,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Network,
    title: "Optimisation réseau",
    description:
      "Audit complet de votre infrastructure réseau, identification des goulots d'étranglement, refonte de l'architecture et mise en place de solutions haute performance (SD-WAN, CDN, load balancing).",
    features: [
      "Analyse de trafic et QoS",
      "Architecture SD-WAN",
      "Optimisation BGP/OSPF",
      "Monitoring temps réel",
    ],
  },
  {
    icon: Gauge,
    title: "Performance applicative",
    description:
      "Profilage avancé de vos applications, optimisation des temps de réponse, réduction de la latence et amélioration de l'expérience utilisateur sur l'ensemble de votre stack.",
    features: [
      "APM & profilage",
      "Optimisation base de données",
      "Caching stratégique",
      "Tests de charge",
    ],
  },
  {
    icon: Cloud,
    title: "Infrastructure cloud",
    description:
      "Migration cloud, optimisation des coûts, mise en place d'architectures résilientes et auto-scalables. Expertise multi-cloud (AWS, Azure, GCP) et hybrid cloud.",
    features: [
      "Migration & modernisation",
      "FinOps & optimisation coûts",
      "Architecture serverless",
      "Multi-cloud & hybride",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Sécurité & résilience",
    description:
      "Audit de sécurité réseau, mise en place de politiques zero-trust, DDoS protection, plan de reprise d'activité et tests de pénétration.",
    features: [
      "Architecture zero-trust",
      "Protection DDoS",
      "PRA / PCA",
      "Pentesting réseau",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-medium text-primary tracking-[0.2em] uppercase mb-4">
            Nos services
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Une expertise complète
            <br />
            <span className="text-muted-foreground">de bout en bout</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            De l&apos;audit initial au monitoring post-déploiement, nous couvrons
            l&apos;intégralité du spectre performance pour vos systèmes critiques.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-2xl bg-card border border-border card-hover gradient-border"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon size={24} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                {service.title}
                <ArrowUpRight
                  size={18}
                  className="text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground border border-border/50"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
