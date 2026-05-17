const mainTags = [
  "Skincare Premium",
  "Maquiagem",
  "Bases & Corretivos",
  "Lábios & Batom",
  "Iluminadores",
]

const otherTags = [
  "Haircare",
  "Protetor Solar",
  "Sérum & Ativos",
  "Perfumaria",
  "Unboxing Luxury",
]

export function Nichos() {
  return (
    <section className="bg-green-pale px-7 py-16">
      <p className="text-[10px] tracking-[3px] uppercase text-text-light mb-8 font-normal">
        Nichos
      </p>
      <div className="flex flex-wrap gap-2.5">
        {mainTags.map((tag) => (
          <span
            key={tag}
            className="border border-green-deep rounded bg-white px-4 py-[9px] text-xs text-brown font-normal"
          >
            {tag}
          </span>
        ))}
        {otherTags.map((tag) => (
          <span
            key={tag}
            className="border border-green-mid rounded bg-white/50 px-4 py-[9px] text-xs text-brown transition-colors duration-200 hover:bg-white hover:border-green-deep"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  )
}
