import 'the-new-css-reset/css/reset.css'
import '@/styles/style.scss'

import { notoSansJP } from '@/libs/fonts'

export const metadata = {
  title: '基本コーディング',
}

const RootLayout = ({ children }) => {
  return (
    <html lang='ja'>
      <body className={notoSansJP.variable}>{children}</body>
    </html>
  )
}

export default RootLayout
