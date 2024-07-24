import { CardContainer } from '../components/cardContainer'
import { Header } from '../components/header'
import { InputContainer } from '../components/inputContainer'
import { ProfileCard } from '../components/profileCard'

export function Home() {
  return (
    <>
      <Header />
      <ProfileCard />
      <InputContainer />
      <CardContainer />
    </>
  )
}
