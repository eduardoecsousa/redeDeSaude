export function StatsSection() {
  const stats = [
    { value: "8+", label: "Unidades de Atendimento" },
    { value: "20+", label: "Tipos de Exames" },
    { value: "100%", label: "Comprometimento com Qualidade" },
  ]

  return (
    <section className="py-12 bg-gradient-to-r from-primary via-secondary to-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Nossa Presença no Mercado</h2>
          <p className="text-white/90">Números que demonstram nossa expertise e confiabilidade</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-lg text-white/90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
