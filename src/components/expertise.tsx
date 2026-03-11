import {
  Award,
  Users,
  Clock,
  Handshake,
  CheckCircle2,
} from "lucide-react";

const differentiators = [
  {
    icon: Award,
    title: "Expertise sectorielle",
    description:
      "15 ans d'expérience dans les environnements critiques : finance, défense, énergie, télécoms. Nos consultants sont certifiés CCIE, AWS SA Pro, Azure Expert.",
  },
  {
    icon: Users,
    title: "Équipe senior",
    description:
      "Pas de juniors sur vos projets. Chaque consultant dispose d'au moins 8 ans d'expérience terrain en infrastructure et performance applicative.",
  },
  {
    icon: Clock,
    title: "Engagement de résultats",
    description:
      "Nous nous engageons contractuellement sur des KPIs de performance. Si les objectifs ne sont pas atteints, nous intervenons gratuitement jusqu'à satisfaction.",
  },
  {
    icon: Handshake,
    title: "Transfert de compétences",
    description:
      "Chaque mission inclut un volet formation pour vos équipes. Notre objectif : vous rendre autonomes sur le maintien des optimisations déployées.",
  },
];

const certifications = [
  "Cisco CCIE",
  "AWS Solutions Architect Pro",
  "Azure Expert",
  "GCP Professional",
  "ITIL v4",
  "ISO 27001 Lead Auditor",
  "Kubernetes CKA",
  "HashiCorp Terraform",
];

export function Expertise() {
  return (
    <section id="expertise" className="py-24 lg:py-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <div>
            <p className="text-xs font-medium text-primary tracking-[0.2em] uppercase mb-4">
              Pourquoi Lent
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              La performance
              <br />
              <span className="text-muted-foreground">n&apos;est pas un luxe</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Dans un monde où la patience des utilisateurs se mesure en millisecondes,
              la performance de vos systèmes est directement liée à votre chiffre d&apos;affaires.
              Nous en avons fait notre unique spécialité.
            </p>

            {/* Certifications */}
            <div>
              <p className="text-sm font-semibold mb-4">Certifications de l&apos;équipe</p>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <span
                    key={cert}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-card border border-border text-muted-foreground"
                  >
                    <CheckCircle2 size={12} className="text-primary" />
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right column — differentiator cards */}
          <div className="space-y-4">
            {differentiators.map((diff) => (
              <div
                key={diff.title}
                className="p-6 rounded-xl bg-card border border-border card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <diff.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{diff.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {diff.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
