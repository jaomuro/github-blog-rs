import logoSrc from '../assets/logo.svg'

export function Header() {
  return (
    <header className="w-full h-72 bg-cover bg-header-bg flex items-center justify-center">
      <img src={logoSrc} alt="" />
    </header>
  )
}
