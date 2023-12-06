import { NavBar } from '../components/NavBar'

export default function LoginLayout({ children }) {
  return (
    <section>
      <NavBar />
      {children}
    </section>
  )
}
