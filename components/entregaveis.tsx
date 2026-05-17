const items = [
  { title: "Vídeo com legenda", desc: "Editado e pronto para anúncio" },
  { title: "Vídeo limpo", desc: "Sem texto, adaptável a qualquer idioma" },
  { title: "Alta resolução", desc: "4K sem compressão" },
  { title: "Formato 9:16", desc: "Otimizado para TikTok, Reels e Stories" },
  { title: "1 revisão inclusa", desc: "Ajuste de texto, corte ou ritmo" },
  { title: "Direitos de uso", desc: "Irrestrito para anúncios e redes" },
]

export function Entregaveis() {
  return (
    <section className="bg-off-white px-7 py-16">
      <p className="text-[10px] tracking-[3px] uppercase text-text-light mb-9 font-normal">
        O que você recebe
      </p>
      <div className="grid grid-cols-2 border border-pink-mid rounded-xl overflow-hidden">
        {items.map((item, i) => (
          <div
            key={item.title}
            className={`px-[18px] py-[22px] ${
              i % 2 === 0 ? "border-r border-r-pink-mid" : ""
            } ${i < items.length - 2 ? "border-b border-b-pink-mid" : ""}`}
          >
            <h4 className="text-[13px] font-normal text-text mb-[5px]">
              {item.title}
            </h4>
            <p className="text-[11px] text-text-soft leading-[1.5] italic">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
