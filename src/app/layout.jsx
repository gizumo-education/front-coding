import 'the-new-css-reset/css/reset.css'
import '@/styles/style.scss'

import { notoSansJP } from '@/libs/fonts'

export const metadata = {
  title: '医療事務求人を探すならギズジョブ',
  description: 'ギズジョブは完全無料の求職者向け求人サービスです',
  keywords: ['ギズジョブ', 'ギズジョブ医療事務', '医療事務求人', '医療事務'],
}

const RootLayout = ({ children }) => {
  return (
    <html lang='ja'>
      <body className={notoSansJP.variable}>{children}</body>
    </html>
  )
}

export default RootLayout
