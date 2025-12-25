import { Header } from '@/components/layout'
import { KeyVisual } from '@/app/_components/section/KeyVisual/'
import { JobSearch } from '@/app/_components/section/JobSearch/'
import { News } from '@/app/_components/section/News/'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Background } from './_components/section/Background'

const Top = () => {
  return (
    <>
      <Header />
      <main>
        <KeyVisual />
        <JobSearch />
        <News />
        <Background />
      </main>
    </>
  )
}

export default Top
