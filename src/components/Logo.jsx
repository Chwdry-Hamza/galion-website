import logoImg from '../assets/images/logo.jpeg'

export default function Logo() {
  return (
    <div className="logo" aria-label="Galion logo">
      <img src={logoImg} alt="Galion" className="logo__img" />
    </div>
  )
}
