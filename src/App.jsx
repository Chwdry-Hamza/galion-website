import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsOfService from './pages/TermsOfService.jsx'
import CardTerms from './pages/CardTerms.jsx'
import ESignConsent from './pages/ESignConsent.jsx'
import ComingSoon from './pages/ComingSoon.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/card-terms" element={<CardTerms />} />
        <Route path="/esign-consent" element={<ESignConsent />} />
        <Route path="/personal/send" element={<ComingSoon />} />
        <Route path="/personal/paying" element={<ComingSoon />} />
        <Route path="/personal/savings" element={<ComingSoon />} />
        <Route path="/personal/crypto" element={<ComingSoon />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
