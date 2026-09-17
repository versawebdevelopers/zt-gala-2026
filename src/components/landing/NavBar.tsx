import { useEffect, useState } from 'react'
import ztwayLogo from '@/imports/ZTWAY_Logo.png'

const GOLD = '#C6A261'
const OBSIDIAN = '#2B1B0C'
const CREAM = '#FCF9F4'
const GOLD_DIM = 'rgba(198,162,97,0.28)'

const NAV_LINKS: { label: string; href: string | null }[] = [
  { label: 'Sponsorship', href: '#sponsorships' },
  { label: 'ZT Corporate', href: null },
]

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={
        scrolled
          ? {
              background: 'rgba(43,27,12,0.96)',
              backdropFilter: 'blur(12px)',
              borderBottom: `1px solid rgba(198,162,97,0.55)`,
              paddingTop: '12px',
              paddingBottom: '12px',
            }
          : { background: 'rgba(27,14,4,0.85)', paddingTop: '20px', paddingBottom: '20px' }
      }
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center flex-shrink-0">
          <img src={ztwayLogo} alt="ZTWAY" className="h-10 w-auto object-contain" />
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) =>
            link.href ? (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] tracking-[0.2em] uppercase font-light transition-colors duration-200"
                style={{ color: 'rgba(252,249,244,0.62)' }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = GOLD)}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(252,249,244,0.62)')}
              >
                {link.label}
              </a>
            ) : (
              <span
                key={link.label}
                className="text-[11px] tracking-[0.2em] uppercase font-light"
                style={{ color: 'rgba(252,249,244,0.62)', cursor: 'default' }}
              >
                {link.label}
              </span>
            ),
          )}
        </div>

        <div className="hidden lg:flex items-start gap-4">
          <span
            className="px-6 py-2.5 text-[11px] tracking-[0.25em] uppercase font-medium"
            style={{ background: GOLD, color: OBSIDIAN, cursor: 'default' }}
          >
            RSVP
          </span>
          <span
            className="block px-5 py-2.5 text-[11px] tracking-[0.2em] uppercase font-light"
            style={{ border: `1px solid ${GOLD_DIM}`, color: GOLD, cursor: 'default' }}
          >
            <strong>Book Hotel Room</strong>
          </span>
        </div>

        <button
          className="lg:hidden p-2 flex flex-col gap-1.5"
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span key={i} className="block w-6 h-px transition-all duration-200" style={{ background: CREAM }} />
          ))}
        </button>
      </div>

      {mobileMenuOpen && (
        <div
          className="lg:hidden px-6 py-6"
          style={{
            background: 'rgba(43,27,12,0.98)',
            borderTop: `1px solid ${GOLD_DIM}`,
          }}
        >
          {NAV_LINKS.map((link) =>
            link.href ? (
              <a
                key={link.label}
                href={link.href}
                className="block py-3 text-[11px] tracking-[0.25em] uppercase"
                style={{ color: 'rgba(252,249,244,0.62)', borderBottom: '1px solid rgba(198,162,97,0.10)' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <span
                key={link.label}
                className="block py-3 text-[11px] tracking-[0.25em] uppercase"
                style={{ color: 'rgba(252,249,244,0.62)', borderBottom: '1px solid rgba(198,162,97,0.10)', cursor: 'default' }}
              >
                {link.label}
              </span>
            ),
          )}
          <div className="flex gap-3 mt-6 items-start">
            <span
              className="flex-1 text-center py-3 text-[11px] tracking-widest uppercase"
              style={{ background: GOLD, color: OBSIDIAN, cursor: 'default' }}
            >
              RSVP
            </span>
          </div>
        </div>
      )}
    </nav>
  )
}
