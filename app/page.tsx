import { MarqueeBar } from "@/components/marquee-bar"
import { Hero } from "@/components/hero"
import { IntroStrip } from "@/components/intro-strip"
import { Formatos } from "@/components/formatos"
import { AboutBlock } from "@/components/about-block"
import { Entregaveis } from "@/components/entregaveis"
import { Nichos } from "@/components/nichos"
import { Marcas } from "@/components/marcas"
import { Portfolio } from "@/components/portfolio"
import { Contato } from "@/components/contato"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <main>
      <MarqueeBar />
      <Hero />
      <IntroStrip />
      <Formatos />
      <AboutBlock />
      <Entregaveis />
      <Nichos />
      <Marcas />
      <Portfolio />
      <Contato />
      <SiteFooter />
    </main>
  )
}
