import type { Metadata } from 'next'
import { DM_Sans, Italiana } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-dm-sans',
})

const italiana = Italiana({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-italiana',
})

export const metadata: Metadata = {
  title: 'Camila Nocchi — UGC Creator',
  description: 'Conteudo autentico para marcas de beleza que querem parar o scroll e vender de verdade.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} ${italiana.variable} bg-off-white`}>
      <body className="font-sans font-light antialiased overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
