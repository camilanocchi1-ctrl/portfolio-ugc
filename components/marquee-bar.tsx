const items = [
  "UGC Creator",
  "Beauty & Skincare",
  "São Paulo",
  "Faceless Content",
  "Meta Ads",
  "TikTok Ads",
  "Make Premium",
]

export function MarqueeBar() {
  return (
    <div className="bg-pink-warm overflow-hidden whitespace-nowrap py-2.5">
      <div
        className="inline-block"
        style={{ animation: "marquee 20s linear infinite" }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-[11px] tracking-[3px] uppercase text-brown px-8 before:content-['·'] before:mr-8 before:opacity-50"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
