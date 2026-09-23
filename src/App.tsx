import ContactSection from './components/landing/ContactSection'
import FoundationSection from './components/landing/FoundationSection'
import GalaGallerySection from './components/landing/GalaGallerySection'
import HeroSection from './components/landing/HeroSection'
import NavBar from './components/landing/NavBar'
import PerformersSection from './components/landing/PerformersSection'
import PartnerWallSection from './components/landing/PartnerWallSection'
import SponsorshipSection from './components/landing/SponsorshipSection'

const OBSIDIAN = '#2B1B0C'
const CREAM = '#FCF9F4'

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: OBSIDIAN, color: CREAM, fontFamily: "'Brother 1816', 'Helvetica Neue', sans-serif" }}>
      <NavBar />
      <HeroSection />
      <PerformersSection />
      <GalaGallerySection />
      <FoundationSection />
      <SponsorshipSection />
      <PartnerWallSection />
      <ContactSection />
      {/* Reserves room below the footer so the fixed mobile RSVP/Book Hotel bar never covers it */}
      <div className="md:hidden" style={{ height: 'calc(4.2rem + env(safe-area-inset-bottom))' }} aria-hidden="true" />
    </div>
  )
}
