import { Noto_Sans_JP, Inter, Shippori_Mincho, DM_Sans } from 'next/font/google'

export const notoSansJP = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
})

export const inter = Inter({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const shipporiMincho = Shippori_Mincho({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-shippori-mincho',
  display: 'swap',
})

export const dmSans = DM_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})
