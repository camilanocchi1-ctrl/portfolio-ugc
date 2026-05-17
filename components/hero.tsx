export function Hero() {
  return (
    <section className="grid grid-cols-1 min-h-svh bg-pink-pale relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute w-[420px] h-[420px] rounded-full bg-pink-mid -top-[120px] -right-[100px] z-0" />
      <div className="absolute w-[200px] h-[200px] rounded-full bg-green-pale bottom-[60px] -left-[60px] z-0" />

      <div className="relative z-[1] px-7 pt-16 pb-20 flex flex-col justify-between min-h-svh">
        {/* Top bar */}
        <div className="flex justify-between items-start">
          <span className="text-[11px] tracking-[3px] uppercase text-text-soft">
            camila.nocchi
          </span>
          <span className="flex items-center gap-[7px] text-[11px] text-text-soft">
            <span
              className="w-[7px] h-[7px] rounded-full bg-green-deep"
              style={{ animation: "pulse-dot 2s ease infinite" }}
            />
            {"Disponível"}
          </span>
        </div>

        {/* Middle - Name */}
        <div className="mt-auto pt-12">
          <p className="text-[11px] tracking-[2px] uppercase text-pink-deep mb-4 font-normal">
            {"UGC Creator — Beauty & Skincare"}
          </p>
          <h1 className="font-serif text-[clamp(68px,20vw,120px)] leading-[0.88] text-text tracking-[-2px]">
            Camila
            <span className="block text-pink-deep pl-6">Nocchi</span>
          </h1>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-5">
          <p className="text-sm leading-[1.75] text-text-soft italic max-w-[300px]">
            {"Conteúdo autêntico para marcas de beleza que querem parar o scroll e vender de verdade."}
          </p>
          <div className="flex flex-wrap gap-[7px]">
            {["Skincare Premium", "Maquiagem", "Faceless UGC", "São Paulo"].map(
              (tag) => (
                <span
                  key={tag}
                  className="border border-pink-warm rounded-full px-3.5 py-1.5 text-[11px] text-brown bg-white/60 backdrop-blur-sm"
                >
                  {tag}
                </span>
              )
            )}
          </div>
          <a
            href="#formatos"
            className="flex items-center gap-2.5 text-[11px] tracking-[2px] uppercase text-text-light no-underline mt-2 group"
          >
            <span className="w-9 h-px bg-pink-warm transition-all duration-300 group-hover:w-14" />
            Ver mais
          </a>
        </div>
      </div>
    </section>
  )
}
