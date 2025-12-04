'use client'

import { Header } from '@/components/layout'
import { KeyVisual } from './_components/keyvisual'
import { Form } from './_components/form'
import { News } from './_components/news'
import { Group1 } from './_components/group1'

import styles from './page.module.scss'

const Top = () => {
  return (
    <>
      <Header />

      <main className={styles['main']}>
        <KeyVisual id='top' />

        <Form className={styles['form-top-section']} />

        <News id='news' />

        <Group1 />
      </main>
    </>
  )
}

export default Top
