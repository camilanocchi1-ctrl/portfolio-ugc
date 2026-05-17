const mainVideo = "https://www.youtube.com/embed/eL5HcNq4yTs"

const secondaryVideos = [
  "https://www.youtube.com/embed/6MNF5-_dC1g",
  "https://www.youtube.com/embed/uzf8infw-2w",
  "https://www.youtube.com/embed/o0pmMkx0hNo",
]

export function Portfolio() {
  return (
    <section className="bg-off-white px-7 py-16">
      <p className="text-[10px] tracking-[3px] uppercase text-text-light mb-8 font-normal">
        {"Portfólio"}
      </p>

      {/* Main video */}
      <div className="mb-5">
        <div className="relative w-full max-w-[420px] mx-auto aspect-[9/16] border-[1.5px] border-pink-deep rounded-xl overflow-hidden bg-pink-pale">
          <iframe
            src={mainVideo}
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full absolute top-0 left-0"
            title="Video principal do portfólio"
          />
        </div>
      </div>

      {/* Secondary videos grid */}
      <div className="grid grid-cols-3 gap-3">
        {secondaryVideos.map((url) => (
          <div
            key={url}
            className="aspect-[9/16] bg-pink-pale rounded-lg overflow-hidden relative"
          >
            <iframe
              src={url}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full absolute top-0 left-0"
              title="Video do portfólio"
            />
          </div>
        ))}
        <div className="aspect-[9/16] bg-pink-pale border border-dashed border-pink-warm rounded-lg flex flex-col items-center justify-end px-2.5 py-3.5 relative overflow-hidden">
          <span className="text-[9px] tracking-[1.5px] uppercase text-text-light text-center leading-[1.5]">
            Novos projetos em breve
          </span>
        </div>
      </div>

      <p className="mt-5 text-xs text-text-soft italic leading-[1.7] text-center">
        {"Conteúdos criados para performance, estética e conversão — entre em contato para receber materiais exclusivos e cases completos."}
      </p>
    </section>
  )
}
