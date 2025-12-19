import 'the-new-css-reset/css/reset.css'
import '@/styles/style.scss'
import Script from 'next/script'
import { notoSansJP } from '@/libs/fonts'

export const metadata = {
  title: '基本コーディング',
  description: 'ギズジョブは完全無料の求職者向け求人サービスです',
}

export default function RootLayout({ children }) {
  return (
    <html lang='ja'>
      <head>
        {/* Swiper CSS */}
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css'
        />
      </head>
      <body className={notoSansJP.variable}>
        {children}

        {/* Swiper JS（1回のみ） */}
        <Script
          src='https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js'
          strategy='afterInteractive'
        />
      </body>
    </html>
  )
}
