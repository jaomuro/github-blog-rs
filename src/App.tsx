import { CardContainer } from './components/cardContaniner'
import { Header } from './components/header'
import { InputContainer } from './components/inputContainer'
import { ProfileCard } from './components/profileCard'

export function App() {
  return (
    <>
      <Header />
      <ProfileCard></ProfileCard>
      <InputContainer />
      <CardContainer />
    </>
  )
}
