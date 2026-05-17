const formatos = [
  {
    num: "01",
    name: "Textura em Close",
    dur: "20s",
    desc: "Aplicação e absorção em macro",
  },
  {
    num: "02",
    name: "Swatching Real",
    dur: "25s",
    desc: "Cor na pele, sem filtro",
  },
  {
    num: "03",
    name: "Unboxing Premium",
    dur: "30s",
    desc: "Abertura sensorial do produto",
  },
  {
    num: "04",
    name: "Rotina em Cena",
    dur: "20–30s",
    desc: "Flat lay animado + aplicação",
  },
  {
    num: "05",
    name: "Antes e Depois",
    dur: "15s",
    desc: "Resultado visual direto",
  },
]

export function Formatos() {
  return (
    <section id="formatos" className="px-7 py-16 bg-off-white">
      <p className="text-[10px] tracking-[3px] uppercase text-text-light mb-9 font-normal">
        O que produzo
      </p>
      <div className="flex flex-col">
        {formatos.map((f, i) => (
          <div
            key={f.num}
            className={`flex items-baseline justify-between py-5 border-b border-pink-mid gap-4 cursor-default transition-[padding-left] duration-[250ms] hover:pl-2 ${
              i === 0 ? "border-t border-t-pink-mid" : ""
            }`}
          >
            <span className="font-serif text-[13px] text-text-light shrink-0 w-7">
              {f.num}
            </span>
            <span className="font-serif text-[clamp(22px,6vw,32px)] text-text flex-1 leading-none">
              {f.name}
            </span>
            <div className="text-right shrink-0">
              <span className="text-[11px] text-text-light block tracking-[1px]">
                {f.dur}
              </span>
              <span className="text-[11px] text-text-soft block mt-[3px] italic max-w-[120px] leading-[1.4]">
                {f.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
