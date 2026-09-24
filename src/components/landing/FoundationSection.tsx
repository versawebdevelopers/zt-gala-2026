import foundationHero from '@/imports/ZTA-Background-image.png'
import foundationHeroMobile from '@/imports/baseball_background-mobile.png'
import ztaWordMarkIcon from '@/imports/ZT_Athletics_Word_Mark_Icon.png'
import ztaWordMark from '@/imports/ZT_Athletics_Word_Mark-2.png'
import ztbLW1 from '@/imports/ZTB_Photo_Collage-Landscape-Wide-1.png'
import ztbLW1b from '@/imports/ZTB_Photo_Collage-Landscape-Wide-1-1.png'
import ztbLW2 from '@/imports/ZTB_Photo_Collage-Landscape-Wide-2.png'
import ztbLW2b from '@/imports/ZTB_Photo_Collage-Landscape-Wide-2-1.png'
import ztbV1 from '@/imports/ZTB_Photo_Collage-Vertical-1.png'
import ztbV2 from '@/imports/ZTB_Photo_Collage-Vertical-2.png'
import ztbV3 from '@/imports/ZTB_Photo_Collage-Vertical-3.png'
import ztbV4 from '@/imports/ZTB_Photo_Collage-Vertical-4.png'
import ztbV5 from '@/imports/ZTB_Photo_Collage-Vertical-5-1.png'
import ztbV6 from '@/imports/ZTB_Photo_Collage-Vertical-6-1.png'
import ztbLL1 from '@/imports/ZTB_Photo_Collage-Landscape-Large-1.png'
import ztbL1 from '@/imports/ZTB_Photo_Collage-Landscape-1.png'
import ztbL2 from '@/imports/ZTB_Photo_Collage-Landscape-2.png'
import ztbL4 from '@/imports/ZTB_Photo_Collage-Landscape-4.png'
import ztbL5 from '@/imports/ZTB_Photo_Collage-Landscape-5.png'
import ztbL6 from '@/imports/ZTB_Photo_Collage-Landscape-6.png'
import ztbL7 from '@/imports/ZTB_Photo_Collage-Landscape-7.png'
import ztbL8 from '@/imports/ZTB_Photo_Collage-Landscape-8.png'
import ztbL3 from '@/imports/ZTB_Photo_Collage-Landscape-3.png'
import testimonial1 from '@/imports/ZTB_Testimonial_Thumbnail-1b.png'
import testimonial2 from '@/imports/ZTB_Testimonial_Thumbnail-2b.png'
import testimonial3 from '@/imports/ZTB_Testimonial_Thumbnail-3b.png'
import testimonial4 from '@/imports/ZTB_Testimonial_Thumbnail-4b.png'
import { CarouselSlot, MobileVerticalSlideshow, MobileVideoSlideshow, MobileWideSlideshow, VideoCarouselSlot } from './GalaGallerySection'

const OBSIDIAN = '#2B1B0C'
const GOLD = '#C6A261'
const CREAM = '#FCF9F4'

const MOSAIC: { pair: [string, string]; delay: number; col: string; row: string }[] = [
  { pair: [ztbLW1, ztbLW2], delay: 0.0, col: '1 / 4', row: '1 / 2' },
  { pair: [ztbLL1, ztbL7], delay: 1.8, col: '4 / 6', row: '1 / 2' },
  { pair: [ztbV1, ztbV2], delay: 3.5, col: '6 / 7', row: '1 / 2' },
  { pair: [ztbV3, ztbV4], delay: 2.2, col: '1 / 2', row: '2 / 3' },
  { pair: [ztbL2, ztbL6], delay: 0.8, col: '2 / 5', row: '2 / 3' },
  { pair: [ztbL4, ztbL1], delay: 4.2, col: '5 / 7', row: '2 / 3' },
  { pair: [ztbL8, ztbL5], delay: 1.5, col: '1 / 3', row: '3 / 4' },
  { pair: [ztbV5, ztbV6], delay: 3.8, col: '3 / 4', row: '3 / 4' },
  { pair: [ztbLW2, ztbLW2b], delay: 5.5, col: '4 / 7', row: '3 / 4' },
]

const TESTIMONIALS = [
  { name: 'Angel Gonzalez', thumbnail: testimonial1, videoUrl: 'https://www.youtube.com/watch?v=ITSkVKs5RA0' },
  { name: 'Earon Ramirez', thumbnail: testimonial2, videoUrl: 'https://www.youtube.com/watch?v=x7NpK82ACPQ' },
  { name: 'Jael Santos', thumbnail: testimonial3, videoUrl: 'https://www.youtube.com/watch?v=FNgLg9oD28Q' },
  { name: 'Lennex Minor', thumbnail: testimonial4, videoUrl: 'https://www.youtube.com/watch?v=ub18Z5G_YpY' },
]

export default function FoundationSection() {
  const mobileWideImages = [
    ztbLW1, ztbL7, ztbL2, ztbL6,
    ztbL4, ztbL1, ztbL8, ztbL5, ztbLW2b, ztbLL1,
  ]
  const mobileVideoItems = [
    { src: testimonial3, name: TESTIMONIALS[2].name, videoUrl: TESTIMONIALS[2].videoUrl },
    { src: testimonial1, name: TESTIMONIALS[0].name, videoUrl: TESTIMONIALS[0].videoUrl },
    { src: testimonial4, name: TESTIMONIALS[3].name, videoUrl: TESTIMONIALS[3].videoUrl },
    { src: testimonial2, name: TESTIMONIALS[1].name, videoUrl: TESTIMONIALS[1].videoUrl },
  ]
  const mobileVerticalImages = [ztbV1, ztbV2, ztbV3, ztbV4, ztbV5, ztbV6]

  return (
    <section id="foundation" style={{ background: OBSIDIAN }} className="relative py-24 overflow-hidden">
      <img
        src={ztaWordMarkIcon}
        aria-hidden="true"
        className="absolute pointer-events-none select-none"
        style={{
          left: '-8%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: 560,
          opacity: 0.12,
        }}
      />
      <div className="absolute inset-y-0 right-0 pointer-events-none hidden sm:block" style={{ width: '52%' }}>
        <img
          src={foundationHero}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-[18%_center]"
          style={{ imageRendering: 'auto', WebkitBackfaceVisibility: 'hidden' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(43,27,12,1) 0%, rgba(43,27,12,0.80) 18%, rgba(43,27,12,0.20) 55%, transparent 100%)' }} />
        <div className="absolute inset-x-0 top-0" style={{ height: '35%', background: 'linear-gradient(to bottom, rgba(43,27,12,0.85) 0%, transparent 100%)' }} />
        <div className="absolute inset-x-0 bottom-0" style={{ height: '35%', background: 'linear-gradient(to top, rgba(43,27,12,0.85) 0%, transparent 100%)' }} />
      </div>

      <div className="absolute bottom-0 left-0 pointer-events-none" style={{ width: '45%', height: '45%', background: 'radial-gradient(ellipse at 0% 100%, rgba(198,162,97,0.55) 0%, rgba(198,162,97,0.30) 30%, rgba(198,162,97,0.10) 55%, transparent 72%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-start mb-12 sm:mb-20">
          <div className="relative overflow-hidden sm:overflow-visible -mx-4 -mt-24 sm:mx-0 sm:mt-0">
            {/* Mobile-only background, scoped to this column's own height instead of the full section */}
            <div className="absolute inset-0 sm:hidden pointer-events-none" aria-hidden="true">
              <img
                src={foundationHeroMobile}
                alt=""
                className="w-full h-full object-cover object-[65%_center]"
              />
            </div>
            <div className="relative z-10 px-6 pb-6 pt-[120px] sm:p-0">
            <p className="text-[12px] tracking-[0.3em] uppercase mb-3 font-light sm:text-[13px] sm:tracking-[0.4em]" style={{ color: GOLD }}>
              Giving Back
            </p>
            <h2 className="font-quiche text-3xl sm:text-4xl lg:text-5xl leading-tight mb-3 sm:mb-6" style={{ color: CREAM }}>
              Supporting the
            </h2>
            <img src={ztaWordMark} alt="ZT Athletics Foundation" className="mb-5 w-[210px] sm:w-[280px] lg:w-[320px]" style={{ mixBlendMode: 'screen' }} />
            <p className="text-base leading-7 sm:text-sm sm:leading-8 mb-6" style={{ color: 'rgba(252,249,244,0.60)' }}>
              The ZT Athletics Foundation fosters youth development and community engagement through sports, integrating teamwork and discipline into young athletes' lives while promoting physical fitness and personal growth. It offers various programs and clinics, connecting communities with opportunities for skill development and character building.
            </p>

            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {[
                { num: '1,200+', label: 'Youth Served' },
                { num: '48', label: 'Partner Schools' },
                { num: '$2.1M', label: 'Raised to Date' },
              ].map((stat) => (
                <div key={stat.label} className="min-w-0 p-2 text-center sm:p-5" style={{ border: 'none' }}>
                  <p className="font-quiche text-2xl sm:text-3xl lg:text-4xl mb-1" style={{ color: GOLD }}>
                    {stat.num}
                  </p>
                  <p className="text-sm leading-5 tracking-[0.08em] uppercase sm:text-sm sm:leading-8 sm:tracking-[0.2em]" style={{ color: 'rgba(252,249,244,0.45)' }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            </div>
          </div>

          <div className="lg:self-center p-6 sm:p-10 lg:p-14" style={{ background: 'rgba(125,91,36,0.05)', borderTop: `1px solid rgba(198,162,97,0.18)`, borderRight: `1px solid rgba(198,162,97,0.18)`, borderBottom: `1px solid rgba(198,162,97,0.18)`, borderLeft: `3px solid ${GOLD}` }}>
            <p className="font-quiche text-xl leading-relaxed mb-5 sm:text-2xl lg:text-3xl lg:mb-6" style={{ color: CREAM }}>
              "We're building more than ballplayers; we're building young leaders for the future."
            </p>
            <p className="text-[11px] tracking-[0.24em] uppercase sm:text-[12px] sm:tracking-[0.3em]" style={{ color: GOLD }}>
              — <strong>Taseer Badar, Founder</strong>
            </p>
          </div>
        </div>

        <style>{`
          .foundation-grid { display: grid; gap: 8px; grid-template-columns: repeat(6, minmax(0, 1fr)); grid-template-rows: repeat(3, 240px); }
          @media (max-width: 767px) {
            .foundation-grid .gallery-slot-wide { display: none; }
            .foundation-grid .gallery-slot-vertical { display: none; }
            .foundation-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); grid-template-rows: none; }
            .foundation-grid > * { grid-column: auto !important; grid-row: auto !important; min-height: 200px; }
            .foundation-grid > :nth-child(1),
            .foundation-grid > :nth-child(7),
            .foundation-grid > :nth-child(8) { grid-column: 1 / -1 !important; min-height: 220px; }
            .foundation-grid > :nth-child(2),
            .foundation-grid > :nth-child(5),
            .foundation-grid > :nth-child(6),
            .foundation-grid > :nth-child(9) { order: 1; min-height: 180px; }
            .foundation-grid > :nth-child(1),
            .foundation-grid > :nth-child(7),
            .foundation-grid > :nth-child(8) { order: 2; }
            .foundation-grid > :nth-child(3),
            .foundation-grid > :nth-child(4) { order: 3; min-height: 280px; }
          }
        `}</style>

        <div className="mobile-video-slideshow mb-3">
          <MobileVideoSlideshow items={mobileVideoItems} />
        </div>
        <div className="mobile-wide-slideshow mb-3">
          <MobileWideSlideshow items={mobileWideImages} fixedAspectRatio="16 / 9" />
        </div>
        <div className="mobile-vertical-slideshow mb-10">
          <MobileVerticalSlideshow items={mobileVerticalImages} />
        </div>

        <div className="foundation-grid">
          <CarouselSlot pair={MOSAIC[0].pair} delay={MOSAIC[0].delay} col="1 / 4" row="1 / 2" />
          <VideoCarouselSlot thumbnail={TESTIMONIALS[2].thumbnail} name={TESTIMONIALS[2].name} videoUrl={TESTIMONIALS[2].videoUrl} altImage={ztbL7} col="4 / 6" row="1 / 2" delay={1.2} />
          <CarouselSlot pair={MOSAIC[2].pair} delay={MOSAIC[2].delay} col="6 / 7" row="1 / 2" mobileType="vertical" />
          <CarouselSlot pair={MOSAIC[3].pair} delay={MOSAIC[3].delay} col="1 / 2" row="2 / 3" mobileType="vertical" />
          <VideoCarouselSlot thumbnail={TESTIMONIALS[0].thumbnail} name={TESTIMONIALS[0].name} videoUrl={TESTIMONIALS[0].videoUrl} altImage={ztbL2} col="2 / 4" row="2 / 3" delay={3.0} />
          <VideoCarouselSlot thumbnail={TESTIMONIALS[3].thumbnail} name={TESTIMONIALS[3].name} videoUrl={TESTIMONIALS[3].videoUrl} altImage={ztbL6} col="4 / 7" row="2 / 3" delay={0.6} />
          <CarouselSlot pair={MOSAIC[6].pair} delay={MOSAIC[6].delay} col="1 / 3" row="3 / 4" />
          <CarouselSlot pair={MOSAIC[7].pair} delay={MOSAIC[7].delay} col="3 / 4" row="3 / 4" mobileType="vertical" />
          <VideoCarouselSlot thumbnail={TESTIMONIALS[1].thumbnail} name={TESTIMONIALS[1].name} videoUrl={TESTIMONIALS[1].videoUrl} altImage={ztbLL1} col="4 / 7" row="3 / 4" delay={4.5} />
        </div>
      </div>
    </section>
  )
}
