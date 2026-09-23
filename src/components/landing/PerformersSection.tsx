import chesterPitts from '@/imports/Chester_Pitts-portrait-1.png'
import leAnnRimes from '@/imports/LAR_High-Res-jpgLR_SB_PC_S7_1235_r_copy.jpg'
import leAnnLogo from '@/imports/LeAnnRimes_2024_LOGO-2.png'
import sponsorshipBg from '@/imports/ChatGPT_Image_Aug_14__2026__03_09_52_PM.png'

const DEEP = '#2B1B0C'
const GOLD = '#C6A261'
const CREAM = '#FCF9F4'

export default function PerformersSection() {
  return (
    <section id="performers" style={{ background: DEEP, position: 'relative', overflow: 'hidden' }} className="pb-24 pt-5 px-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-12" style={{ position: 'relative', zIndex: 1 }}>
        <div className="text-center mb-16">
          <p className="text-[13px] tracking-[0.4em] uppercase mb-4 font-light" style={{ color: GOLD }}>
            An Evening of Excellence
          </p>
        </div>

        <div className="mb-16">
          <p className="text-[12px] tracking-[0.35em] uppercase mb-4" style={{ color: GOLD }}>A Special Performance By</p>
          <div
            className="flex flex-col lg:flex-row overflow-hidden"
            style={{
              border: `1px solid ${GOLD}`,
              boxShadow: `0 0 0 1px rgba(198,162,97,0.18), 0 0 40px rgba(198,162,97,0.12), inset 0 0 60px rgba(198,162,97,0.03)`,
              background: 'rgba(125,91,36,0.06)',
            }}
          >
            <div className="relative flex-shrink-0 lg:w-[45%] overflow-hidden" style={{ minHeight: 480 }}>
              <img
                src={leAnnRimes}
                alt="LeAnn Rimes — Headlining Artist"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: '65% 20%', transform: 'scale(1.55)', transformOrigin: '65% 25%' }}
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to right, transparent 70%, rgba(27,14,4,0.85) 100%)' }}
              />
            </div>

            <div className="flex flex-col justify-center p-10 lg:p-14 flex-1">
              <img src={leAnnLogo} alt="LeAnn Rimes" className="mb-6" style={{ width: 260, mixBlendMode: 'screen' }} />
              <p className="text-[11px] tracking-[0.35em] uppercase mb-5" style={{ color: GOLD }}>Bio</p>
              <p className="text-base leading-7 mb-5 sm:text-sm" style={{ color: 'rgba(252,249,244,0.68)' }}>
                LeAnn Rimes is an internationally acclaimed, multi-platinum-selling artist whose genre-defying career has spanned nearly three decades. She has released 21 albums and 71 singles to radio worldwide. Rimes has sold over 48 million records globally, earned eight Grammy® nominations and two wins, and made history as the youngest solo artist ever to receive a Grammy.
              </p>
              <p className="text-base leading-7 mb-5 sm:text-sm" style={{ color: 'rgba(252,249,244,0.68)' }}>
                Beyond her recording and performance career, Rimes continues to use her platform to advocate for mental health awareness, LGBTQ+ rights, anti-bullying, and chronic illness visibility.
              </p>
              <p className="text-base leading-7 sm:text-sm" style={{ color: 'rgba(252,249,244,0.68)' }}>
                With a voice that has defined an era and a spirit that continues to evolve, LeAnn Rimes remains a singular force, bridging genres, generations, and global audiences with every new chapter.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center sm:justify-end">
          <div
            className="flex w-full max-w-[320px] flex-col overflow-hidden sm:w-auto sm:max-w-none sm:flex-row sm:items-stretch"
            style={{
              borderTop: `1px solid rgba(226,201,143,0.70)`,
              borderRight: `1px solid rgba(198,162,97,0.28)`,
              borderBottom: `1px solid rgba(198,162,97,0.28)`,
              borderLeft: `1px solid rgba(198,162,97,0.28)`,
              background: DEEP,
              boxShadow: `0 -1px 0 0 rgba(226,201,143,0.35), 0 4px 24px rgba(198,162,97,0.07)`,
            }}
          >
            <div className="order-2 flex min-w-0 flex-col justify-center p-5 text-center sm:order-1 sm:text-right" style={{ minWidth: '180px' }}>
              <p className="font-quiche text-2xl sm:text-xl mb-1" style={{ color: CREAM }}>Chester Pitts</p>
              <p className="text-base sm:text-sm tracking-[0.25em] uppercase mb-1" style={{ color: GOLD }}>Host</p>
              <p className="text-base sm:text-sm leading-relaxed" style={{ color: 'rgba(252,249,244,0.40)' }}>
                Original Houston Texan
              </p>
            </div>
            <div className="order-1 h-[300px] w-full flex-shrink-0 overflow-hidden sm:order-2 sm:h-auto sm:w-72" style={{ minHeight: '320px' }}>
              <img src={chesterPitts} alt="Chester Pitts" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-8%',
          left: 0,
          width: '100%',
          height: '55%',
          pointerEvents: 'none',
          backgroundImage: `url(${sponsorshipBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 12%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 12%)',
          zIndex: 0,
        }}
      />
    </section>
  )
}
