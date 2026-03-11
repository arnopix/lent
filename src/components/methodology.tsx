import { Search, FileText, Wrench, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Audit & diagnostic",
    description:
      "Analyse exhaustive de votre infrastructure existante : topologie réseau, métriques de performance, logs applicatifs, architecture système. Identification précise des points de friction.",
    duration: "1–2 semaines",
  },
  {
    number: "02",
    icon: FileText,
    title: "Plan d'optimisation",
    description:
      "Livraison d'un plan d'action priorisé avec estimations de gains, coûts et délais. Chaque recommandation est chiffrée et argumentée avec des données concrètes.",
    duration: "1 semaine",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Implémentation",
    description:
      "Mise en œuvre progressive des optimisations en coordination avec vos équipes. Approche itérative avec validation à chaque étape pour minimiser les risques.",
    duration: "2–8 semaines",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Suivi & amélioration",
    description:
      "Monitoring continu des KPIs, rapports de performance mensuels, ajustements proactifs. Nous garantissons la pérennité des gains obtenus.",
    duration: "En continu",
  },
];

export function Methodology() {
  return (
    <section id="methodologie" className="py-24 lg:py-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-xs font-medium text-primary tracking-[0.2em] uppercase mb-4">
            Notre méthodologie
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Un processus éprouvé
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Une approche structurée et transparente, affinée sur plus de 200 missions
            d&apos;optimisation pour des entreprises de toute taille.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(100%+1rem)] w-[calc(100%-2rem)] h-px bg-gradient-to-r from-border to-border/0" />
              )}

              <div className="relative p-6">
                {/* Number */}
                <span className="text-6xl font-bold text-muted/80 leading-none mb-4 block font-mono">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary mb-4">
                  <step.icon size={20} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Duration badge */}
                <span className="inline-flex items-center px-3 py-1 text-xs font-mono font-medium text-primary bg-primary/10 rounded-full">
                  {step.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
