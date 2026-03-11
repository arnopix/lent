import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-border rounded-full bg-secondary/50 backdrop-blur-sm animate-fade-in">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">
              Conseil en performance IT
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-8 animate-fade-in-up">
            Chaque milliseconde
            <br />
            <span className="text-gradient animate-gradient">
              compte pour vos clients
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up [animation-delay:200ms] opacity-0">
            Nous optimisons vos infrastructures réseau et vos applications
            pour garantir des performances maximales, une disponibilité totale
            et une expérience utilisateur irréprochable.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-in-up [animation-delay:400ms] opacity-0">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all glow-blue"
            >
              Demander un audit
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-xl hover:bg-secondary/50 transition-all"
            >
              Découvrir nos services
            </a>
          </div>

          {/* Value props */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in-up [animation-delay:600ms] opacity-0">
            <div className="flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-secondary/30 border border-border/50">
              <Zap size={18} className="text-primary shrink-0" />
              <span className="text-sm text-muted-foreground">Latence réduite jusqu&apos;à 80%</span>
            </div>
            <div className="flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-secondary/30 border border-border/50">
              <Shield size={18} className="text-primary shrink-0" />
              <span className="text-sm text-muted-foreground">99,99% de disponibilité</span>
            </div>
            <div className="flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-secondary/30 border border-border/50">
              <TrendingUp size={18} className="text-primary shrink-0" />
              <span className="text-sm text-muted-foreground">ROI moyen de 340%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
