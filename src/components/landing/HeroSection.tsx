import heroBackground from '@/imports/Hero_background.png'
import ztIconHeadline from '@/imports/heading-v2.png'
import ztcWordmark from '@/imports/ZTC-Wordmark.png'

const GOLD = '#C6A261'
const GOLD_LIGHT = '#E2C98F'
const GOLD_DIM = 'rgba(198,162,97,0.28)'
const OBSIDIAN = '#2B1B0C'
const CREAM = '#FCF9F4'

export default function HeroSection() {
  return (
    <section id="details" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBackground} alt="" className="w-full h-full object-cover object-center" />
        <div
          className="absolute inset-x-0 bottom-0"
          style={{
            height: '58%',
            background: 'linear-gradient(to top, rgba(27,14,4,1) 0%, rgba(27,14,4,0.95) 28%, rgba(27,14,4,0.70) 52%, rgba(27,14,4,0.30) 72%, rgba(27,14,4,0.10) 88%, rgba(27,14,4,0.03) 95%, transparent 100%)',
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-48 pb-20">
        <img
          src={ztcWordmark}
          alt="ZT Corporate"
          className="h-auto object-contain mb-4"
          style={{ width: 260, mixBlendMode: 'screen' }}
        />
        <img
          src={ztIconHeadline}
          alt="ZT Corporate Chairman's Gala"
          className="w-full max-w-xs sm:max-w-md lg:max-w-xl xl:max-w-2xl h-auto object-contain mb-10"
        />

        <div className="flex items-center gap-4 mb-10" style={{ opacity: 0 }}>
          <div className="h-px w-36" style={{ background: `linear-gradient(to right, transparent, ${GOLD_LIGHT})` }} />
          <div style={{ filter: `drop-shadow(0 0 6px ${GOLD})` }}>
            <svg width="10" height="10" viewBox="0 0 8 8" fill={GOLD_LIGHT}>
              <polygon points="4,0 8,4 4,8 0,4" />
            </svg>
          </div>
          <div className="h-px w-36" style={{ background: `linear-gradient(to left, transparent, ${GOLD_LIGHT})` }} />
        </div>

        <div className="flex flex-col sm:flex-row items-stretch gap-8 sm:gap-0 mb-14">
          {[
            { label: 'Date', lines: ['December 5th'] },
            { label: 'Venue', lines: ['Hilton Americas Hotel', 'On Lamar St, Houston'] },
            { label: 'Time', lines: ['6:30 PM'] },
          ].map((item, i, arr) => (
            <div
              key={item.label}
              className="flex-1 flex flex-col justify-start"
              style={
                i < arr.length - 1
                  ? { paddingRight: '2.5rem', borderRight: '1px solid rgba(198,162,97,0.18)', marginRight: '2.5rem' }
                  : {}
              }
            >
              <p className="text-[8px] tracking-[0.5em] uppercase mb-3" style={{ color: GOLD, opacity: 0.75 }}>
                {item.label}
              </p>
              {item.lines.map((line, j) => (
                <p
                  key={j}
                  className="font-quiche leading-snug"
                  style={{
                    color: j === 0 ? CREAM : 'rgba(252,249,244,0.45)',
                    fontSize: j === 0 ? 'clamp(1.15rem, 2vw, 1.5rem)' : 'clamp(0.85rem, 1.4vw, 1.05rem)',
                    marginBottom: j < item.lines.length - 1 ? '0.1rem' : 0,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <a
            href="#rsvp"
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
              style={{ border: `1px solid ${GOLD_DIM}`, color: GOLD }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'rgba(198,162,97,0.10)'
                el.style.borderColor = GOLD
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'transparent'
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
