const links = [
  {
    platform: "Instagram",
    handle: "@camila.nocchi",
    href: "https://instagram.com/camila.nocchi",
  },
  {
    platform: "E-mail",
    handle: "camilanocchi1@gmail.com",
    href: "mailto:camilanocchi1@gmail.com",
    highlight: "1",
  },
  {
    platform: "WhatsApp",
    handle: "+55 (11) 9 8787-7710",
    href: "https://wa.me/5511987877710",
  },
]

export function Contato() {
  return (
    <section id="contato" className="bg-brown px-7 pt-[72px] pb-20">
      <h2 className="font-serif text-[clamp(44px,12vw,72px)] text-pink-pale leading-[0.95] tracking-[-1px] mb-2">
        Vamos
        <em className="italic text-pink-warm block">criar juntos?</em>
      </h2>
      <p className="text-[13px] text-[rgba(249,240,238,0.55)] leading-[1.7] mt-4 mb-10">
        {"Disponível para projetos pontuais e parcerias recorrentes. Respondo em até 24 horas."}
      </p>
      <div className="flex flex-col gap-0.5">
        {links.map((link, i) => (
          <a
            key={link.platform}
            href={link.href}
            target={link.platform !== "E-mail" ? "_blank" : undefined}
            rel={link.platform !== "E-mail" ? "noopener noreferrer" : undefined}
            className={`flex items-center justify-between py-[18px] border-b border-b-[rgba(249,240,238,0.12)] no-underline transition-opacity duration-200 hover:opacity-70 ${
              i === 0 ? "border-t border-t-[rgba(249,240,238,0.12)]" : ""
            }`}
          >
            <div>
              <span className="text-[9px] tracking-[3px] uppercase text-pink-warm block mb-[3px]">
                {link.platform}
              </span>
              <span className="font-serif text-xl text-pink-pale">
                {link.highlight ? (
                  <>
                    {"camilanocchi"}
                    <span className="text-pink-warm font-medium">1</span>
                    {"@gmail.com"}
                  </>
                ) : (
                  link.handle
                )}
              </span>
            </div>
            <span className="text-pink-warm text-lg opacity-60">{"→"}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
