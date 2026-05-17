const marcas = [
  {
    name: "Sallve",
    cat: "Skincare D2C · rotina, textura, ativo",
  },
  {
    name: "MAC Cosmetics",
    cat: "Make Premium · tutorial, swatching, pigmentação",
  },
  {
    name: "Charlotte Tilbury",
    cat: "Luxury Beauty · unboxing, resultado, desejo",
  },
  {
    name: "Rare Beauty",
    cat: "Make Premium · aplicação, textura, emoção",
  },
  {
    name: "YSL Beauty",
    cat: "Luxe Makeup · sofisticação, resultado, credibilidade",
  },
]

export function Marcas() {
  return (
    <section className="bg-pink-pale px-7 py-16">
      <p className="text-[10px] tracking-[3px] uppercase text-text-light mb-7 font-normal">
        {"Referências de nicho"}
      </p>
      <p className="text-[11px] text-text-light italic mb-7 leading-[1.6] border-l-2 border-l-pink-warm pl-3.5">
        {"Produzo o tipo de conteúdo que marcas como estas usam em seus anúncios — autêntico, esteticamente sofisticado e pensado para converter."}
      </p>
      <div className="flex flex-col">
        {marcas.map((m, i) => (
          <div
            key={m.name}
            className={`flex items-center justify-between py-[18px] border-b border-b-pink-mid gap-3 ${
              i === 0 ? "border-t border-t-pink-mid" : ""
            }`}
          >
            <span className="font-serif text-[22px] text-text">{m.name}</span>
            <span className="text-[10px] tracking-[2px] uppercase text-text-light">
              {m.cat}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
