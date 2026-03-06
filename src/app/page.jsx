import { Header } from '@/components/layout'
import {
  KeyVisual,
  SearchJobs,
  NewJobOffers,
  ServiceIntro,
} from './_components'

const Top = () => {
  return (
    <main>
      <Header />
      <KeyVisual />
      <SearchJobs />
      <NewJobOffers />
      <ServiceIntro />
    </main>
  )
}

export default Top
