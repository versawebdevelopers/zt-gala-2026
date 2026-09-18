import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'wouter'
import { VideoModal } from '@/components/landing/VideoModal'
import gala2025Recap from '@/imports/2025 post Gala recap video.mp4'

// ── Gala 2024 photos
import gala24Video  from '@/imports/2024_Gala_-_Video_Thumbnail.png'
import gala24L1     from '@/imports/2024_Gala_Photo_Collage-Landscape-1.png'
import gala24L2     from '@/imports/2024_Gala_Photo_Collage-Landscape-2.png'
import gala24L3     from '@/imports/2024_Gala_Photo_Collage-Landscape-3.png'
import gala24L4     from '@/imports/2024_Gala_Photo_Collage-Landscape-4.png'
import gala24L5     from '@/imports/2024_Gala_Photo_Collage-Landscape-5.png'
import gala24L6     from '@/imports/2024_Gala_Photo_Collage-Landscape-6.png'
import gala24L7     from '@/imports/2024_Gala_Photo_Collage-Landscape-7.png'
import gala24L8     from '@/imports/2024_Gala_Photo_Collage-Landscape-8.png'
import gala24L9     from '@/imports/2024_Gala_Photo_Collage-Landscape-9.png'
import gala24L51    from '@/imports/2024_Gala_Photo_Collage-Landscape-5-1.png'
import gala24V1     from '@/imports/2024_Gala_Photo_Collage-Vertical-1.png'
import gala24V2     from '@/imports/2024_Gala_Photo_Collage-Vertical-2.png'
import gala24V3     from '@/imports/2024_Gala_Photo_Collage-Vertical-3.png'
import ztLogoWhite  from '@/imports/ZT_Corporate_Logo_-_White.png'
import galaBg       from '@/imports/f696a615-47f2-4fb7-97bb-63945106d40b.png'

// ── Palette
const GOLD       = '#C6A261'
const GOLD_LIGHT = '#E2C98F'
const CREAM      = '#FCF9F4'
const DEEP       = '#2B1B0C'
const ESPRESSO   = '#4D310A'
const BRONZE     = '#7D5B24'

// ─── MosaicPlaceholder ────────────────────────────────────────────────────────
function MosaicPlaceholder({ label }: { label?: string }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3"
      style={{ background: 'rgba(43,27,12,0.55)' }}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(198,162,97,0.35)" strokeWidth="1">
        <rect x="3" y="3" width="18" height="18" rx="1" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      {label && (
        <p className="text-[9px] tracking-[0.3em] uppercase" style={{ color: 'rgba(198,162,97,0.35)' }}>{label}</p>
      )}
    </div>
  )
}

// ─── CarouselSlot ─────────────────────────────────────────────────────────────
function CarouselSlot({
  pair, delay, col, row, label,
}: {
  pair: [string | null, string | null]
  delay: number
  col: string
  row: string
  label?: string
}) {
  const bothReal = pair[0] !== null && pair[1] !== null
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const ms = useRef(5000 + Math.random() * 3000)

  const startCycle = useCallback(() => {
    if (!bothReal) return
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => setActive((p) => 1 - p), ms.current)
  }, [bothReal])

  useEffect(() => {
    const t = setTimeout(startCycle, delay * 1000)
    return () => { clearTimeout(t); if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [delay, startCycle])

  return (
    <div
      style={{ gridColumn: col, gridRow: row }}
      className="relative overflow-hidden bg-stone-950"
      onMouseEnter={() => { if (!bothReal) return; setPaused(true); if (intervalRef.current) clearInterval(intervalRef.current) }}
      onMouseLeave={() => { if (!bothReal) return; setPaused(false); startCycle() }}
    >
      {pair.map((src, i) => (
        <div key={i} className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: bothReal ? (i === active ? 1 : 0) : 1 }}>
          {src ? (
            <img src={src} alt="" className="w-full h-full object-cover" />
          ) : (
            <MosaicPlaceholder label={label} />
          )}
        </div>
      ))}
      {paused && (
        <div className="absolute bottom-2 left-2 z-10">
          <span className="text-white/60 text-[9px] tracking-widest uppercase px-2 py-1"
            style={{ background: 'rgba(0,0,0,0.55)' }}>Paused</span>
        </div>
      )}
    </div>
  )
}

// ─── VideoSlide ───────────────────────────────────────────────────────────────
function VideoSlide({ label, src, year, videoUrl }: { label: string; src?: string; year: string; videoUrl?: string }) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div
      className="relative overflow-hidden group cursor-pointer flex-shrink-0 w-full bg-stone-950"
      style={{ aspectRatio: '16 / 7' }}
      onClick={() => videoUrl && setModalOpen(true)}
    >
      {src ? (
        <img src={src} alt={label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
      ) : (
        <MosaicPlaceholder label={label} />
      )}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(43,27,12,0.75) 0%, transparent 60%)' }} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center justify-center transition-all duration-300 group-hover:scale-110"
          style={{ width: 72, height: 72, border: `2px solid ${GOLD}`, background: 'rgba(43,27,12,0.55)', backdropFilter: 'blur(6px)' }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill={GOLD}>
            <polygon points="5,2 20,11 5,20" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-5 left-6">
        <p className="text-[9px] tracking-[0.4em] uppercase mb-1" style={{ color: GOLD }}>{year} Recap</p>
        <p className="text-lg font-light tracking-wide" style={{ color: CREAM }}>{label}</p>
      </div>

      {modalOpen && videoUrl && <VideoModal url={videoUrl} onClose={() => setModalOpen(false)} />}
    </div>
  )
}

// Gala mosaic data — 3 rows, 6 columns
const GALA_2024_MOSAIC: { pair: [string | null, string | null]; delay: number; col: string; row: string; label?: string }[] = [
  // Row 1
  { pair: [gala24L3,  gala24L4 ], delay: 0.0, col: '1 / 4', row: '1 / 2' },
  { pair: [gala24L1,  gala24L2 ], delay: 1.6, col: '4 / 6', row: '1 / 2' },
  { pair: [gala24V1,  gala24V3 ], delay: 3.2, col: '6 / 7', row: '1 / 2' },
  // Row 2
  { pair: [gala24V2,  gala24L51], delay: 2.0, col: '1 / 2', row: '2 / 3' },
  { pair: [gala24L5,  gala24L9 ], delay: 0.8, col: '2 / 4', row: '2 / 3' },
  { pair: [gala24L6,  gala24L7 ], delay: 2.8, col: '4 / 6', row: '2 / 3' },
  { pair: [gala24L8,  null     ], delay: 0.0, col: '6 / 7', row: '2 / 3' },
  // Row 3 — placeholders for more 2024 content
  { pair: [null, null], delay: 0, col: '1 / 3', row: '3 / 4', label: '2024 Photo' },
  { pair: [null, null], delay: 0, col: '3 / 5', row: '3 / 4', label: '2024 Photo' },
  { pair: [null, null], delay: 0, col: '5 / 7', row: '3 / 4', label: '2024 Photo' },
]

const GALA_PLACEHOLDER_MOSAIC: { pair: [null, null]; delay: number; col: string; row: string; label: string }[] = [
  { pair: [null, null], delay: 0, col: '1 / 4', row: '1 / 2', label: 'Photo' },
  { pair: [null, null], delay: 0, col: '4 / 6', row: '1 / 2', label: 'Photo' },
  { pair: [null, null], delay: 0, col: '6 / 7', row: '1 / 2', label: 'Photo' },
  { pair: [null, null], delay: 0, col: '1 / 2', row: '2 / 3', label: 'Photo' },
  { pair: [null, null], delay: 0, col: '2 / 4', row: '2 / 3', label: 'Photo' },
  { pair: [null, null], delay: 0, col: '4 / 6', row: '2 / 3', label: 'Photo' },
  { pair: [null, null], delay: 0, col: '6 / 7', row: '2 / 3', label: 'Photo' },
  { pair: [null, null], delay: 0, col: '1 / 3', row: '3 / 4', label: 'Photo' },
  { pair: [null, null], delay: 0, col: '3 / 5', row: '3 / 4', label: 'Photo' },
  { pair: [null, null], delay: 0, col: '5 / 7', row: '3 / 4', label: 'Photo' },
]

const GALA_YEARS = [
  { year: '2025', label: 'Watch the 2025 Chairman\'s Gala Highlights', src: undefined, videoUrl: gala2025Recap },
  { year: '2024', label: 'Watch the 2024 Chairman\'s Gala Highlights', src: gala24Video, videoUrl: 'https://vimeo.com/1081180835/14f1115c37' },
  { year: '2023', label: 'Watch the 2023 Chairman\'s Gala Highlights', src: undefined },
  { year: '2022', label: 'Watch the 2022 Chairman\'s Gala Highlights', src: undefined },
]

type GalaYear = '2025' | '2024' | '2023' | '2022'

const YEAR_MOSAICS: Record<GalaYear, typeof GALA_2024_MOSAIC> = {
  '2025': GALA_PLACEHOLDER_MOSAIC,
  '2024': GALA_2024_MOSAIC,
  '2023': GALA_PLACEHOLDER_MOSAIC,
  '2022': GALA_PLACEHOLDER_MOSAIC,
}

// ─── Gallery Page ─────────────────────────────────────────────────────────────
export default function Gallery() {
  const [activeYear, setActiveYear] = useState<GalaYear>('2025')
  const [sliderIdx, setSliderIdx] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const goTo = (i: number) => {
    setSliderIdx(i)
    setActiveYear(GALA_YEARS[i].year as GalaYear)
  }
  const prev = () => goTo((sliderIdx - 1 + GALA_YEARS.length) % GALA_YEARS.length)
  const next = () => goTo((sliderIdx + 1) % GALA_YEARS.length)

  return (
    <div style={{ background: DEEP, minHeight: '100vh' }}>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
        style={{ background: 'rgba(43,27,12,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(198,162,97,0.12)' }}>
        <Link href="/">
          <img src={ztLogoWhite} alt="ZT Corporate" className="h-7 cursor-pointer" />
        </Link>
        <div className="flex items-center gap-8">
          <Link href="/">
            <span className="text-[10px] tracking-[0.3em] uppercase cursor-pointer transition-colors duration-200"
              style={{ color: 'rgba(252,249,244,0.55)' }}
              onMouseEnter={e => (e.currentTarget.style.color = GOLD)}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(252,249,244,0.55)')}>
              Home
            </span>
          </Link>
          <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: GOLD }}>Gallery</span>
        </div>
      </nav>

      {/* Hero header */}
      <div className="relative pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <p className="text-[10px] tracking-[0.45em] uppercase mb-4 font-light" style={{ color: GOLD }}>
          The Gala Legacy
        </p>
        <h1 className="font-quiche text-5xl lg:text-7xl leading-tight mb-6" style={{ color: CREAM }}>
          Chairman's Gala <em>Gallery</em>
        </h1>
        <div className="h-px w-24" style={{ background: `linear-gradient(to right, ${GOLD}, transparent)` }} />
      </div>

      {/* ── Video Recap Slider ─────────────────────────────────────────────── */}
      <div className="px-6 lg:px-12 max-w-7xl mx-auto mb-4">
        <div className="flex items-center justify-between mb-4">
          <p className="text-[9px] tracking-[0.4em] uppercase" style={{ color: 'rgba(198,162,97,0.6)' }}>
            Gala Recaps
          </p>
          <div className="flex gap-3">
            <button onClick={prev}
              className="flex items-center justify-center transition-colors duration-200"
              style={{ width: 36, height: 36, border: `1px solid rgba(198,162,97,0.3)`, color: GOLD }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = GOLD)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(198,162,97,0.3)')}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 2L4 7l5 5" />
              </svg>
            </button>
            <button onClick={next}
              className="flex items-center justify-center transition-colors duration-200"
              style={{ width: 36, height: 36, border: `1px solid rgba(198,162,97,0.3)`, color: GOLD }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = GOLD)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(198,162,97,0.3)')}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 2l5 5-5 5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Slider track */}
        <div ref={sliderRef} className="overflow-hidden">
          <div className="transition-transform duration-500 ease-in-out"
            style={{ display: 'flex', transform: `translateX(-${sliderIdx * 100}%)` }}>
            {GALA_YEARS.map((g) => (
              <div key={g.year} style={{ minWidth: '100%' }}>
                <VideoSlide label={g.label} src={g.src} year={g.year} videoUrl={g.videoUrl} />
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {GALA_YEARS.map((g, i) => (
            <button key={g.year} onClick={() => goTo(i)}
              className="transition-all duration-300"
              style={{
                width: i === sliderIdx ? 24 : 8,
                height: 8,
                background: i === sliderIdx ? GOLD : 'rgba(198,162,97,0.25)',
              }} />
          ))}
        </div>
      </div>

      {/* ── Photo Mosaic ──────────────────────────────────────────────────── */}
      <div className="px-6 lg:px-12 max-w-7xl mx-auto pb-24">

        {/* Year label */}
        <div className="flex items-center gap-6 mb-4 mt-10">
          <p className="text-[9px] tracking-[0.4em] uppercase" style={{ color: 'rgba(198,162,97,0.6)' }}>
            {activeYear} Photos
          </p>
          <div className="flex-1 h-px" style={{ background: 'rgba(198,162,97,0.12)' }} />
          <div className="flex gap-2">
            {(['2025', '2024', '2023', '2022'] as GalaYear[]).map((y) => (
              <button key={y} onClick={() => setActiveYear(y)}
                className="text-[9px] tracking-[0.25em] uppercase px-3 py-1.5 transition-all duration-200"
                style={activeYear === y
                  ? { background: GOLD, color: DEEP }
                  : { color: 'rgba(198,162,97,0.55)', border: '1px solid rgba(198,162,97,0.2)' }}>
                {y}
              </button>
            ))}
          </div>
        </div>

        {/* 3-row mosaic */}
        <div className="grid gap-2"
          style={{ gridTemplateColumns: 'repeat(6, 1fr)', gridTemplateRows: 'repeat(3, 260px)' }}>
          {YEAR_MOSAICS[activeYear].map((slot, i) => (
            <CarouselSlot
              key={`${activeYear}-${i}`}
              pair={slot.pair}
              delay={slot.delay}
              col={slot.col}
              row={slot.row}
              label={slot.label}
            />
          ))}
        </div>
      </div>

    </div>
  )
}
