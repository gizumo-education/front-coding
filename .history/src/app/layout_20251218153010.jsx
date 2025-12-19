import 'the-new-css-reset/css/reset.css'
import '@/styles/style.scss'
import Script from 'next/script'
import { notoSansJP } from '@/libs/fonts'

export const metadata = {
  title: '基本コーディング',
  description: 'ギズジョブは完全無料の求職者向け求人サービスです',
}

const RootLayout = ({ children }) => {
  return (
    <html lang='ja'>
      <body className={notoSansJP.variable}>{children}</body>
    </html>
  )
}

export default RootLayout
