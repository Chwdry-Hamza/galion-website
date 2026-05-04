import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

export default function MainLayout() {
  const { pathname } = useLocation()
  const hideMainFooter = pathname === '/about' || pathname.startsWith('/about/')

  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-main">
        <Outlet />
      </main>
      {!hideMainFooter && <Footer />}
    </div>
  )
}
