export function Clients() {
  const clients = [
    "Airbus Defence",
    "Société Générale",
    "Enedis",
    "Orange Business",
    "Dassault Systèmes",
    "Thales",
    "BNP Paribas",
    "AXA",
  ];

  return (
    <section className="py-16 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-xs font-medium text-muted-foreground tracking-[0.2em] uppercase mb-10">
          Ils nous font confiance
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {clients.map((client) => (
            <span
              key={client}
              className="text-lg font-semibold text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors cursor-default tracking-tight"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
