import { Header } from '@/components/layout'
import { Keyvisual } from './_components/Keyvisual'
import { Jobsearch } from './_components/Jobsearch'
import { NewJobs } from './_components/NewJobs'
import { Main } from './_components/Main'
import { Features } from './_components/Features'
import { Flow } from './_components/Flow'
import { Contents } from './_components/Contents'
import styles from './page.module.scss'

const Top = () => {
  return (
    <>
      <Header />
      <div id='top-section' className={styles['scroll-margin']}>
        <Keyvisual />
        <Jobsearch />
        <NewJobs id='new-jobs' />
        <Main />
        <Features id='features' />
        <Flow id='flow' />
        <Contents id='contents' />
        <Jobsearch />
      </div>
    </>
  )
}

export default Top
