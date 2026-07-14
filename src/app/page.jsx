import { Header } from '../components/layout/Header'
import { HomePage } from './_components/HomePage'
import { SearchForm } from './_components/SearchForm'
import { NewJob } from './_components/NewJob'
import { Features } from './_components/Features'

const Top = () => {
  return (
    <>
      <Header />
      <HomePage />
      <SearchForm />
      <NewJob />
      <Features />
    </>
  )
}

export default Top
