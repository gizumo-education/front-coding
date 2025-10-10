import { Header } from '@/components/layout'
import { Keyvisual } from './_components/keyvisual'
import { Form } from './_components/form'
import { News } from './_components/news'
import { MainVisual } from './_components/mainVisual'
import { Feature } from './_components/feature'
import { Flow } from './_components/flow'
import { Info } from './_components/info'

import styles from './page.module.scss'

const Top = () => {
  return (
    <>
      <Header />
      <main>
        <Keyvisual />
        <Form className={styles['form-top-section']} />
        <News />
        <MainVisual />
        <Feature className={styles['feature-section']} />
        <Flow className={styles['flow-section']} />
        <Info className={styles['info-section']} />
        <Form className={styles['form-bottom-section']} />
      </main>
    </>
  )
}

export default Top
