import 'the-new-css-reset/css/reset.css'
import '@/styles/style.scss'

import { notoSansJP, dmSans } from '@/libs/fonts'

export const metadata = {
  title: '基本コーディング',
}

const RootLayout = ({ children }) => {
  return (
    <html lang='ja'>
      <body className={`${notoSansJP.variable} ${dmSans.variable}`}>
        {children}
      </body>
    </html>
  )
}

export default RootLayout
