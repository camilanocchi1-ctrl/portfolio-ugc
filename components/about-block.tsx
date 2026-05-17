const nums = [
  { val: "5", lbl: "Formatos" },
  { val: "48h", lbl: "Entrega" },
  { val: "BR+", lbl: "Internacional" },
]

export function AboutBlock() {
  return (
    <section className="bg-pink-pale px-7 py-16 grid gap-10">
      <span className="text-[10px] tracking-[3px] uppercase text-pink-deep font-normal">
        Sobre
      </span>
      <p className="text-sm leading-[1.9] text-text-soft">
        {"Especializada em "}
        <strong className="text-text font-normal">beauty e skincare premium</strong>
        {", produzo vídeos UGC pensados para performance — Meta Ads, TikTok Ads e canais orgânicos das marcas."}
        <br />
        <br />
        {"Cada entrega chega "}
        <strong className="text-text font-normal">pronta para veicular</strong>
        {": sem trabalho extra para o time de marketing, sem perda de identidade da marca."}
      </p>
      <div className="grid grid-cols-3 border border-pink-warm rounded-xl overflow-hidden">
        {nums.map((n, i) => (
          <div
            key={n.lbl}
            className={`py-5 px-3 text-center ${
              i < nums.length - 1 ? "border-r border-r-pink-warm" : ""
            }`}
          >
            <span className="font-serif text-[32px] text-brown block leading-none">
              {n.val}
            </span>
            <span className="text-[9px] tracking-[2px] uppercase text-text-light mt-1.5 block">
              {n.lbl}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
