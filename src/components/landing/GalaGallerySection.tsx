import { useCallback, useEffect, useRef, useState } from 'react'
import { VideoModal } from './VideoModal'
import gala2025Recap from '@/imports/2025 post Gala recap video.mp4'
import pgVid1 from '@/imports/2024_Gala_-_Video_Thumbnail-1.png'
import pgL1 from '@/imports/2024_Gala_Photo_Collage-Landscape-1-1.png'
import pgL2 from '@/imports/2024_Gala_Photo_Collage-Landscape-2-1.png'
import pgL3 from '@/imports/2024_Gala_Photo_Collage-Landscape-3-1.png'
import pgL4 from '@/imports/2024_Gala_Photo_Collage-Landscape-4-1.png'
import pgL5 from '@/imports/2024_Gala_Photo_Collage-Landscape-5-2.png'
import pgL6 from '@/imports/2024_Gala_Photo_Collage-Landscape-6-1.png'
import pgL7 from '@/imports/2024_Gala_Photo_Collage-Landscape-7-1.png'
import pgL8 from '@/imports/2024_Gala_Photo_Collage-Landscape-8-1.png'
import pgL9 from '@/imports/2024_Gala_Photo_Collage-Landscape-9-1.png'
import pgL11 from '@/imports/2024_Gala_Photo_Collage-Landscape-11.png'
import pgL13 from '@/imports/2024_Gala_Photo_Collage-Landscape-13.png'
import pgL15 from '@/imports/2024_Gala_Photo_Collage-Landscape-15.png'
import pgL16 from '@/imports/2024_Gala_Photo_Collage-Landscape-16.png'
import pgL18 from '@/imports/2024_Gala_Photo_Collage-Landscape-18.png'
import pgL20 from '@/imports/2024_Gala_Photo_Collage-Landscape-20.png'
import pgVid2 from '@/imports/2025_Gala_-_Video_Thumbnail.png'
import pgVert1 from '@/imports/2024_Gala_Photo_Collage-Vertical-1-1.png'
import pgVert2 from '@/imports/2024_Gala_Photo_Collage-Vertical-2-1.png'
import pgVert3 from '@/imports/2024_Gala_Photo_Collage-Vertical-3-1.png'
import pgVert4 from '@/imports/2024_Gala_Photo_Collage-Vertical-4.png'
import pgVert5 from '@/imports/2024_Gala_Photo_Collage-Vertical-5.png'
import pgVert6 from '@/imports/2024_Gala_Photo_Collage-Vertical-6.png'
import ztbLW1 from '@/imports/ZTB_Photo_Collage-Landscape-Wide-1.png'
import ztbLW2 from '@/imports/ZTB_Photo_Collage-Landscape-Wide-2.png'
import ztbV1 from '@/imports/ZTB_Photo_Collage-Vertical-1.png'
import ztbV2 from '@/imports/ZTB_Photo_Collage-Vertical-2.png'
import ztbV3 from '@/imports/ZTB_Photo_Collage-Vertical-3.png'
import ztbV4 from '@/imports/ZTB_Photo_Collage-Vertical-4.png'
import ztbLL1 from '@/imports/ZTB_Photo_Collage-Landscape-Large-1.png'
import ztbLW1b from '@/imports/ZTB_Photo_Collage-Landscape-Wide-1-1.png'
import ztbLW2b from '@/imports/ZTB_Photo_Collage-Landscape-Wide-2-1.png'
import ztbV5 from '@/imports/ZTB_Photo_Collage-Vertical-5-1.png'
import ztbV6 from '@/imports/ZTB_Photo_Collage-Vertical-6-1.png'
import ztbL1 from '@/imports/ZTB_Photo_Collage-Landscape-1.png'
import ztbL2 from '@/imports/ZTB_Photo_Collage-Landscape-2.png'
import ztbL4 from '@/imports/ZTB_Photo_Collage-Landscape-4.png'
import ztbL5 from '@/imports/ZTB_Photo_Collage-Landscape-5.png'
import ztbL6 from '@/imports/ZTB_Photo_Collage-Landscape-6.png'
import ztbL7 from '@/imports/ZTB_Photo_Collage-Landscape-7.png'
import ztbL8 from '@/imports/ZTB_Photo_Collage-Landscape-8.png'
import galaBg from '@/imports/f696a615-47f2-4fb7-97bb-63945106d40b.png'

const ESPRESSO = '#4D310A'
const GOLD = '#C6A261'

export function MosaicPlaceholder({ label }: { label?: string }) {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-3"
      style={{ background: 'linear-gradient(135deg, #111009 0%, #1c180e 50%, #0f0d09 100%)' }}
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #C6A261 0px, #C6A261 1px, transparent 1px, transparent 18px)',
        }}
      />
      <svg width="26" height="26" viewBox="0 0 26 26" style={{ opacity: 0.22 }}>
        <polygon points="13,1 25,13 13,25 1,13" fill="none" stroke="#C6A261" strokeWidth="1.5" />
        <polygon points="13,7 19,13 13,19 7,13" fill="rgba(198,162,97,0.22)" stroke="#C6A261" strokeWidth="0.7" />
      </svg>
      <p
        className="text-[9px] tracking-[0.28em] uppercase text-center px-3 leading-5 relative"
        style={{ color: 'rgba(198,162,97,0.35)' }}
      >
        {label ?? 'Foundation Photo'}
      </p>
    </div>
  )
}

export function CarouselSlot({
  pair,
  delay,
  col,
  row,
  label,
  objectPosition = 'center',
}: {
  pair: [string | null, string | null]
  delay: number
  col: string
  row: string
  label?: string
  objectPosition?: string
}) {
  const bothReal = pair[0] !== null && pair[1] !== null
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const msRef = useRef(5000 + Math.random() * 3000)

  const startCycle = useCallback(() => {
    if (!bothReal) return
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => setActive((p) => 1 - p), msRef.current)
  }, [bothReal])

  useEffect(() => {
    const t = setTimeout(startCycle, delay * 1000)
    return () => {
      clearTimeout(t)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [delay, startCycle])

  const handlePause = () => {
    if (!bothReal) return
    setPaused(true)
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  const handleResume = () => {
    if (!bothReal) return
    setPaused(false)
    startCycle()
  }

  return (
    <div
      style={{ gridColumn: col, gridRow: row }}
      className="relative overflow-hidden bg-stone-950"
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
    >
      {pair.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: bothReal ? (i === active ? 1 : 0) : 1 }}
        >
          {src ? (
            <img src={src} alt="ZT Baseball Foundation" className="w-full h-full object-cover" style={{ objectPosition }} />
          ) : (
            <MosaicPlaceholder label={label} />
          )}
        </div>
      ))}

      {paused && (
        <div className="absolute bottom-2 left-2 z-10">
          <span className="text-white/60 text-[9px] tracking-widest uppercase px-2 py-1" style={{ background: 'rgba(0,0,0,0.55)' }}>
            Paused
          </span>
        </div>
      )}
    </div>
  )
}

export function VideoCarouselSlot({
  thumbnail,
  name,
  altImage,
  col,
  row,
  delay,
  videoUrl,
}: {
  thumbnail: string
  name: string
  altImage: string
  col: string
  row: string
  delay: number
  videoUrl?: string
}) {
  const [active, setActive] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const ms = useRef(5000 + Math.random() * 4000)

  useEffect(() => {
    const t = setTimeout(() => {
      intervalRef.current = setInterval(() => setActive((p) => 1 - p), ms.current)
    }, delay * 1000)
    return () => {
      clearTimeout(t)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [delay])

  return (
    <div
      style={{ gridColumn: col, gridRow: row }}
      className="relative overflow-hidden bg-stone-950 group cursor-pointer"
      onClick={() => videoUrl && setModalOpen(true)}
    >
      <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out" style={{ opacity: active === 0 ? 1 : 0 }}>
        <img src={thumbnail} alt={`${name} testimonial`} className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(43,27,12,0.75) 0%, rgba(43,27,12,0.12) 55%, transparent 100%)' }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{ width: 44, height: 44, border: `1.5px solid rgba(198,162,97,0.9)`, background: 'rgba(43,27,12,0.55)', backdropFilter: 'blur(4px)' }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="rgba(198,162,97,0.9)">
              <polygon points="3,1 13,7 3,13" />
            </svg>
          </div>
        </div>
        <p className="absolute bottom-3 left-4 text-[11px] tracking-[0.2em] uppercase font-light" style={{ color: 'rgba(252,249,244,0.85)' }}>
          {name}
        </p>
      </div>

      <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out" style={{ opacity: active === 1 ? 1 : 0 }}>
        <img src={altImage} alt="ZT Baseball Foundation" className="w-full h-full object-cover" />
      </div>

      {modalOpen && videoUrl && <VideoModal url={videoUrl} onClose={() => setModalOpen(false)} />}
    </div>
  )
}

export const TESTIMONIALS = [
  { name: 'Angel Gonzalez', thumbnail: pgL1 },
  { name: 'Earon Ramirez', thumbnail: pgL2 },
  { name: 'Jael Santos', thumbnail: pgL3 },
  { name: 'Lennex Minor', thumbnail: pgL4 },
]

export const MOSAIC: { pair: [string, string | null]; delay: number; col: string; row: string }[] = [
  { pair: [ztbLW1, ztbLW1b], delay: 0.0, col: '1 / 4', row: '1 / 2' },
  { pair: [ztbLL1, ztbL7], delay: 1.8, col: '4 / 6', row: '1 / 2' },
  { pair: [ztbV1, ztbV2], delay: 3.5, col: '6 / 7', row: '1 / 2' },
  { pair: [ztbV3, ztbV4], delay: 2.2, col: '1 / 2', row: '2 / 3' },
  { pair: [ztbL2, ztbL6], delay: 0.8, col: '2 / 5', row: '2 / 3' },
  { pair: [ztbL4, ztbL1], delay: 4.2, col: '5 / 7', row: '2 / 3' },
  { pair: [ztbL8, ztbL5], delay: 1.5, col: '1 / 3', row: '3 / 4' },
  { pair: [ztbV5, ztbV6], delay: 3.8, col: '3 / 4', row: '3 / 4' },
  { pair: [ztbLW2, ztbLW2b], delay: 5.5, col: '4 / 7', row: '3 / 4' },
]

export default function GalaGallerySection() {
  return (
    <section id="past-galas" className="relative pb-24 overflow-hidden" style={{ paddingTop: 40 }}>
      <img src={galaBg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="absolute inset-0" style={{ background: 'rgba(231,220,203,0.78)' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-quiche text-4xl lg:text-5xl mb-6" style={{ color: ESPRESSO }}>
            A Look Back at Previous Galas
          </h2>
        </div>

        <div className="grid gap-2 mb-10" style={{ gridTemplateColumns: 'repeat(6, 1fr)', gridTemplateRows: 'repeat(3, 240px)' }}>
          <CarouselSlot pair={[pgL3, pgL9]} delay={0.0} col="1 / 4" row="1 / 2" objectPosition="center" />
          <VideoCarouselSlot thumbnail={pgVid1} name="2024 Gala Highlights" altImage={pgL8} col="4 / 6" row="1 / 2" delay={1.2} videoUrl="https://vimeo.com/1081180835/14f1115c37" />
          <CarouselSlot pair={[pgVert1, pgVert2]} delay={2.5} col="6 / 7" row="1 / 2" objectPosition="top" />
          <CarouselSlot pair={[pgVert3, pgVert4]} delay={1.0} col="1 / 2" row="2 / 3" objectPosition="top" />
          <VideoCarouselSlot thumbnail={pgVid2} name="2025 Gala Highlights" altImage={pgL4} col="2 / 4" row="2 / 3" delay={3.0} videoUrl={gala2025Recap} />
          <CarouselSlot pair={[pgVert5, pgVert6]} delay={2.0} col="4 / 5" row="2 / 3" objectPosition="top" />
          <CarouselSlot pair={[pgL7, pgL5]} delay={0.6} col="5 / 7" row="2 / 3" objectPosition="center" />
          <CarouselSlot pair={[pgL11, pgL20]} delay={3.0} col="1 / 3" row="3 / 4" objectPosition="top 15%" />
          <CarouselSlot pair={[pgL6, pgL18]} delay={1.5} col="3 / 4" row="3 / 4" objectPosition="center" />
          <CarouselSlot pair={[pgL2, pgL16]} delay={2.0} col="4 / 6" row="3 / 4" objectPosition="top 15%" />
          <CarouselSlot pair={[pgL13, pgL15]} delay={0.8} col="6 / 7" row="3 / 4" objectPosition="top 10%" />
        </div>
      </div>
    </section>
  )
}
