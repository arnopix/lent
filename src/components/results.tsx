"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  {
    value: 200,
    suffix: "+",
    label: "Missions réalisées",
    description: "Audit, optimisation, migration",
  },
  {
    value: 80,
    suffix: "%",
    label: "Réduction de latence moyenne",
    description: "Mesuré sur 12 mois post-projet",
  },
  {
    value: 99.99,
    suffix: "%",
    label: "Disponibilité garantie",
    description: "SLA contractuel engagé",
  },
  {
    value: 340,
    suffix: "%",
    label: "ROI moyen constaté",
    description: "Économies directes et indirectes",
  },
];

function AnimatedCounter({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(target, increment * step);
      setCount(current);
      if (step >= steps) {
        clearInterval(timer);
        setCount(target);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, inView]);

  const display = target % 1 === 0 ? Math.round(count) : count.toFixed(2);

  return (
    <span className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-mono">
      {display}
      <span className="text-primary">{suffix}</span>
    </span>
  );
}

export function Results() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="resultats" className="py-24 lg:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-xs font-medium text-primary tracking-[0.2em] uppercase mb-4">
            Résultats
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Des résultats mesurables
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nos engagements ne sont pas des promesses en l&apos;air.
            Chaque mission est assortie de KPIs contractuels.
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="text-center p-8 rounded-2xl bg-card border border-border gradient-border"
            >
              <AnimatedCounter
                target={metric.value}
                suffix={metric.suffix}
                inView={inView}
              />
              <p className="text-sm font-semibold mt-4 mb-1">{metric.label}</p>
              <p className="text-xs text-muted-foreground">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
