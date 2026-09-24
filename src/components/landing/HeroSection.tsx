import heroBackground from '@/imports/Hero_background.png'
import mobileHeroBackground from '@/imports/topbanner_background-mobile.png'
import ztIconHeadline from '@/imports/heading-v2.png'
import ztcWordmark from '@/imports/ZTC-Wordmark.png'

const GOLD = '#C6A261'
const GOLD_LIGHT = '#E2C98F'
const GOLD_DIM = 'rgba(198,162,97,0.28)'
const OBSIDIAN = '#2B1B0C'
const CREAM = '#FCF9F4'

export default function HeroSection() {
  return (
    <section id="details" className="relative min-h-0 sm:min-h-screen flex flex-col items-center justify-start sm:justify-center overflow-hidden">
      <div className="absolute inset-0">
        <picture>
          <source media="(max-width: 639px)" srcSet={mobileHeroBackground} />
          <img src={heroBackground} alt="" className="w-full h-full object-cover object-center" />
        </picture>
        <div
          className="absolute inset-x-0 bottom-0 hidden sm:block"
          style={{
            height: '58%',
            background: 'linear-gradient(to top, rgba(27,14,4,1) 0%, rgba(27,14,4,0.95) 28%, rgba(27,14,4,0.70) 52%, rgba(27,14,4,0.30) 72%, rgba(27,14,4,0.10) 88%, rgba(27,14,4,0.03) 95%, transparent 100%)',
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-12 sm:px-20 pt-30 pb-0 sm:pt-48 sm:pb-20">
        <style>{`
          @media (max-width: 639px) {
            .hero-detail-label {
              font-size: 16px !important;
              color: ${OBSIDIAN} !important;
              opacity: 1 !important;
            }
            .hero-detail-primary {
              font-size: 1.9rem !important;
            }
            .hero-detail-secondary {
              font-size: 1.3rem !important;
            }
            .hero-detail-group-spaced {
              margin-top: 1.25rem;
            }
          }
        `}</style>
        <img
          src={ztcWordmark}
          alt="ZT Corporate"
          className="relative top-20 sm:top-14 w-[260px] sm:w-[220px] h-auto object-contain mb-2"
          style={{ mixBlendMode: 'screen' }}
        />
        <img
          src={ztIconHeadline}
          alt="ZT Corporate Chairman's Gala"
          className="relative top-20 sm:top-14 w-full max-w-[340px] sm:max-w-md lg:max-w-xl xl:max-w-2xl h-auto object-contain mb-5 sm:mb-10"
        />

        <div className="flex items-center gap-4 mb-16 sm:mb-10" style={{ opacity: 0 }}>
          <div className="h-px w-36" style={{ background: `linear-gradient(to right, transparent, ${GOLD_LIGHT})` }} />
          <div style={{ filter: `drop-shadow(0 0 6px ${GOLD})` }}>
            <svg width="10" height="10" viewBox="0 0 8 8" fill={GOLD_LIGHT}>
              <polygon points="4,0 8,4 4,8 0,4" />
            </svg>
          </div>
          <div className="h-px w-36" style={{ background: `linear-gradient(to left, transparent, ${GOLD_LIGHT})` }} />
        </div>

        <div className="flex w-full max-w-[330px] sm:max-w-4xl flex-col items-center gap-3 sm:flex-row sm:items-stretch sm:justify-center sm:gap-24 pb-9 sm:pb-0 sm:mb-14">
          {[
            { label: 'Date', lines: ['December 5th'] },
            { label: 'Venue', lines: ['Hilton Americas Hotel', 'On Lamar St, Houston'] },
            { label: 'Time', lines: ['6 PM'] },
          ].map((item, i, arr) => (
            <div
              key={item.label}
              className={`flex w-full flex-col items-center justify-start text-center sm:flex-1 ${i > 0 ? 'hero-detail-group-spaced' : ''}`}
              style={
                i < arr.length - 1
                  ? { paddingRight: '0', borderRight: 'none', marginRight: '0', paddingBottom: '0' }
                  : {}
              }
            >
              <p className="hero-detail-text hero-detail-label text-[14px] tracking-[0.32em] uppercase mb-1.5 sm:text-[15px] sm:tracking-[0.5em] sm:mb-3" style={{ color: GOLD, opacity: 0.75 }}>
                {item.label}
              </p>
              {item.lines.map((line, j) => (
                <p
                  key={j}
                  className={`hero-detail-text font-quiche leading-snug ${j === 0 ? 'hero-detail-primary' : 'hero-detail-secondary'}`}
                  style={{
                    color: CREAM,
                    fontSize: j === 0 ? 'clamp(1.9rem, 3vw, 2.4rem)' : 'clamp(1.3rem, 2vw, 1.5rem)',
                    marginBottom: j < item.lines.length - 1 ? '0.08rem' : 0,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="hidden md:flex flex-col sm:flex-row gap-4 items-start">
          <a
            href="https://ZTGala2026.rsvpify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-4 text-sm tracking-[0.3em] uppercase font-medium transition-colors duration-300"
            style={{ background: GOLD, color: OBSIDIAN }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = GOLD_LIGHT)}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = GOLD)}
          >
            Reserve Your Seat
          </a>
          <div className="relative">
            <a
              href="https://book.passkey.com/gt/221294688?gtid=1a0c291fbd420562cd110013932d5bf1"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-12 py-4 text-sm tracking-[0.3em] uppercase font-light transition-all duration-300"
              style={{ background: OBSIDIAN, border: `1px solid ${GOLD_DIM}`, color: GOLD }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = '#3A2614'
                el.style.borderColor = GOLD
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = OBSIDIAN
                el.style.borderColor = GOLD_DIM
              }}
            >
              <strong>Book Hotel Room</strong>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
