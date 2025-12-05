'use client'

import { Header } from '@/components/layout'
import { KeyVisual } from './_components/keyvisual'
import { Form } from './_components/form'
import { News } from './_components/news'
import { Group1 } from './_components/group1'
import { Group2 } from './_components/group2'
import { Group3 } from './_components/group3'
import { Group4 } from './_components/group4'

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

        <Group2 id='group2' className={styles['group2-section']} />

        <Group3 id='group3' className={styles['group3-section']} />

        <Group4 id='group4' className={styles['group4-section']} />

        <Form className={styles['form-bottom-section']} />
      </main>
    </>
  )
}

export default Top
