import footerBg from '@/imports/Footer-1.png'
import mobileFooterBg from '@/imports/footer_background-mobile.png'

const GOLD = '#C6A261'
const CREAM = '#FCF9F4'
const GOLD_DIM = 'rgba(198,162,97,0.28)'

export default function ContactSection() {
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      <picture className="absolute inset-0 pointer-events-none select-none">
        <source media="(max-width: 639px)" srcSet={mobileFooterBg} />
        <img
          src={footerBg}
          aria-hidden="true"
          className="w-full h-full object-cover"
          style={{ objectPosition: '30% center' }}
        />
      </picture>
      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center">
          <h2 className="font-quiche text-[2rem] sm:text-4xl lg:text-5xl mb-3 sm:mb-5" style={{ color: CREAM }}>
            Have Questions?
          </h2>
          <p className="text-[12px] tracking-[0.04em] uppercase sm:text-sm sm:tracking-[0.05em]" style={{ color: 'rgba(252,249,244,0.48)' }}>
            Feel free to reach out to us at{' '}
            <a
              href="mailto:rsvp@ztcorporate.com"
              className="inline-block break-all"
              style={{ color: GOLD }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.75')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
            >
              rsvp@ztcorporate.com
            </a>
          </p>
          <div className="w-16 h-px mx-auto mt-6 sm:mt-8" style={{ background: GOLD_DIM }} />
        </div>
      </div>
    </section>
  )
}
