import { Header } from '@/components/layout'
import { KeyVisual } from './_components/KeyVisual'
import { Recruitment } from './_components/Recruitment'
import { JobOffer } from './_components/JobOffer'
import { Information } from './_components/Information'

const Top = () => {
  return (
    <>
      <Header />
      <KeyVisual />
      <Recruitment />
      <JobOffer />
      <Information />
    </>
  )
}

export default Top
