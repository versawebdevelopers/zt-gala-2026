import React, { useState, useEffect, useRef, useCallback } from 'react'

import heroBackground from '@/imports/Hero_background.png'
import ztIconHeadline from '@/imports/heading-v2.png'
import ztwayLogo from '@/imports/ZTWAY_Logo.png'
import chesterPitts from '@/imports/Chester_Pitts-portrait-1.png'
import foundationHero from '@/imports/ZTA-Background-image.png'
import ztaWordMarkIcon from '@/imports/ZT_Athletics_Word_Mark_Icon.png'
import ztaWordMark from '@/imports/ZT_Athletics_Word_Mark-2.png'
import leAnnRimes from '@/imports/LAR_High-Res-jpgLR_SB_PC_S7_1235_r_copy.jpg'
import footerBg from '@/imports/Footer-1.png'
import ztcWordmark from '@/imports/ZTC-Wordmark.png'
import leAnnLogo from '@/imports/LeAnnRimes_2024_LOGO-2.png'

import gala24Video from '@/imports/2024_Gala_-_Video_Thumbnail.png'
import gala24L1 from '@/imports/2024_Gala_Photo_Collage-Landscape-1.png'
import gala24L2 from '@/imports/2024_Gala_Photo_Collage-Landscape-2.png'
import gala24L3 from '@/imports/2024_Gala_Photo_Collage-Landscape-3.png'
import gala24L4 from '@/imports/2024_Gala_Photo_Collage-Landscape-4.png'
import gala24L5 from '@/imports/2024_Gala_Photo_Collage-Landscape-5.png'
import gala24L9 from '@/imports/2024_Gala_Photo_Collage-Landscape-9.png'
import gala24V1 from '@/imports/2024_Gala_Photo_Collage-Vertical-1.png'
import gala24V2 from '@/imports/2024_Gala_Photo_Collage-Vertical-2.png'
import gala24V3 from '@/imports/2024_Gala_Photo_Collage-Vertical-3.png'
import gala24L51 from '@/imports/2024_Gala_Photo_Collage-Landscape-5-1.png'
import gala24L6 from '@/imports/2024_Gala_Photo_Collage-Landscape-6.png'
import gala24L7 from '@/imports/2024_Gala_Photo_Collage-Landscape-7.png'
import gala24L8 from '@/imports/2024_Gala_Photo_Collage-Landscape-8.png'

import pgVid1 from '@/imports/2024_Gala_-_Video_Thumbnail-1.png'
import pgL1 from '@/imports/2024_Gala_Photo_Collage-Landscape-1-1.png'
import pgL2 from '@/imports/2024_Gala_Photo_Collage-Landscape-2-1.png'
import pgL3 from '@/imports/2024_Gala_Photo_Collage-Landscape-3-1.png'
import pgL4 from '@/imports/2024_Gala_Photo_Collage-Landscape-4-1.png'
import pgL5 from '@/imports/2024_Gala_Photo_Collage-Landscape-5-2.png'
import pgL6 from '@/imports/2024_Gala_Photo_Collage-Landscape-6-1.png'
import pgL7 from '@/imports/2024_Gala_Photo_Collage-Landscape-7-1.png'
import pgL8 from '@/imports/2024_Gala_Photo_Collage-Landscape-8-1.png'
import pgVid2 from '@/imports/2025_Gala_-_Video_Thumbnail.png'
import pgL9 from '@/imports/2024_Gala_Photo_Collage-Landscape-9-1.png'
import pgL10 from '@/imports/2024_Gala_Photo_Collage-Landscape-10.png'
import pgL11 from '@/imports/2024_Gala_Photo_Collage-Landscape-11.png'
import pgL12 from '@/imports/2024_Gala_Photo_Collage-Landscape-12.png'
import pgL13 from '@/imports/2024_Gala_Photo_Collage-Landscape-13.png'
import pgL14 from '@/imports/2024_Gala_Photo_Collage-Landscape-14.png'
import pgL15 from '@/imports/2024_Gala_Photo_Collage-Landscape-15.png'
import pgL16 from '@/imports/2024_Gala_Photo_Collage-Landscape-16.png'
import pgL17 from '@/imports/2024_Gala_Photo_Collage-Landscape-17.png'
import pgL18 from '@/imports/2024_Gala_Photo_Collage-Landscape-18.png'
import pgL19 from '@/imports/2024_Gala_Photo_Collage-Landscape-19.png'
import pgL20 from '@/imports/2024_Gala_Photo_Collage-Landscape-20.png'
import pgL21 from '@/imports/2024_Gala_Photo_Collage-Landscape-21.png'
import pgL22 from '@/imports/2024_Gala_Photo_Collage-Landscape-22.png'
import pgL23 from '@/imports/2024_Gala_Photo_Collage-Landscape-23.png'
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
import ztbL3 from '@/imports/ZTB_Photo_Collage-Landscape-3.png'
import ztbL4 from '@/imports/ZTB_Photo_Collage-Landscape-4.png'
import ztbL5 from '@/imports/ZTB_Photo_Collage-Landscape-5.png'
import ztbL6 from '@/imports/ZTB_Photo_Collage-Landscape-6.png'
import ztbL7 from '@/imports/ZTB_Photo_Collage-Landscape-7.png'
import ztbL8 from '@/imports/ZTB_Photo_Collage-Landscape-8.png'

import logoZTCorporate from '@/imports/ZT_Corporate_logo.png'
import logoBadarFam from '@/imports/Badar_Fam_logo.png'
import logoACE from '@/imports/ACE_Community_Healthcare_logo.png'
import logoCapitalOneHotel from '@/imports/Capital_One_Hotel_Group_logo.png'
import logoCityAmbulance from '@/imports/City_Ambulance_logo.png'
import logoZTAutomotive from '@/imports/ZT_Automotive_logo.png'
import logoPashaLaw from '@/imports/Pasha_Law_logo.png'
import logoJanney from '@/imports/Janney_logo.png'
import logoArthurLawrence from '@/imports/Arthur_Lawrence_logo.png'
import logoJKUConsultants from '@/imports/JKU_Consultants_logo.png'
import logoQadeer from '@/imports/Qadeer_logo.png'
import logoHRSS from '@/imports/HRSS_logo.png'
import logoEthosGroup from '@/imports/Ethos_Group_logo.png'
import logoBMOHarris from '@/imports/BMO_Harris_Bank_logo.png'
import logoMobiz from '@/imports/Mobiz_logo.png'
import logoHigginbotham from '@/imports/Higginbotham_logo.png'
import logoFarmersMerch from '@/imports/Farmers_Merch_Bank_logo.png'
import logoEnterpriseBank from '@/imports/Enterprise_Bank_logo.png'
import logoDaveCantin from '@/imports/Dave_Cantin_Group_logo.png'
import logoChamberlain from '@/imports/Chamberlain_logo.png'
import logoArrowhead from '@/imports/Arrowhead_logo.png'
import logoVersaCreative from '@/imports/Versa_Creative_logo.png'
import logoZTPayments from '@/imports/ZT_Payments_logo.png'
import logoSurmount from '@/imports/Surmount_logo.png'
import logoOneStepDiagnostics from '@/imports/One_Step_Diagnostics_logo.png'
import logoWoodvale from '@/imports/Woodvale_logo.png'
import logoACEAltus from '@/imports/ACE_Altus_Accountable_Care_Entity.png'
import logoBalanceCompanies from '@/imports/Balance_Companies_logo.png'

import testimonial1 from '@/imports/ZTB_Testimonial_Thumbnail-1b.png'
import testimonial2 from '@/imports/ZTB_Testimonial_Thumbnail-2b.png'
import testimonial3 from '@/imports/ZTB_Testimonial_Thumbnail-3b.png'
import testimonial4 from '@/imports/ZTB_Testimonial_Thumbnail-4b.png'
import sponsorshipBg from '@/imports/ChatGPT_Image_Aug_14__2026__03_09_52_PM.png'
import galaBg from '@/imports/f696a615-47f2-4fb7-97bb-63945106d40b.png'
import partnerBg from '@/imports/742094b7-e142-4e6e-b856-88c021904120.png'

const ESPRESSO = '#4D310A'
const BRONZE = '#7D5B24'
const DEEP = '#2B1B0C'
const OBSIDIAN = '#2B1B0C'
const GOLD = '#C6A261'
const GOLD_LIGHT = '#E2C98F'
const GOLD_DIM = 'rgba(198,162,97,0.28)'
const CREAM = '#FCF9F4'
const LUX_GOLD = '#C6A261'
const LUX_GOLD_DIM = 'rgba(198,162,97,0.32)'
const LUX_MUTED = 'rgba(252,249,244,0.42)'
const LUX_CARD_BG = 'rgba(198,162,97,0.04)'

const NAV_LINKS: { label: string; href: string | null }[] = [
  { label: 'Sponsorship', href: '#sponsorships' },
  { label: 'ZT Corporate', href: null },
]

const MOSAIC: { pair: [string, string]; delay: number; col: string; row: string }[] = [
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

type SponsorEntry = { type: 'logo'; name: string; src: string } | { type: 'text'; name: string }

const SPONSOR_TIERS: { tier: string; logoHeight: number; entries: SponsorEntry[] }[] = [
  { tier: 'Visionary', logoHeight: 200, entries: [{ type: 'logo', name: 'ZT Corporate', src: logoZTCorporate }, { type: 'logo', name: 'Badar Family Office', src: logoBadarFam }], },
  { tier: 'Innovator', logoHeight: 160, entries: [{ type: 'logo', name: 'ACE Community Healthcare', src: logoACE }, { type: 'logo', name: 'Capital One Hotel Group', src: logoCapitalOneHotel }, { type: 'logo', name: 'City Ambulance Service', src: logoCityAmbulance }, { type: 'logo', name: 'ZT Automotive', src: logoZTAutomotive }], },
  { tier: 'Ambassador', logoHeight: 130, entries: [{ type: 'logo', name: 'Pasha Law PC', src: logoPashaLaw }, { type: 'logo', name: 'Janney', src: logoJanney }, { type: 'logo', name: 'Arthur Lawrence', src: logoArthurLawrence }, { type: 'logo', name: 'JKU Consultants', src: logoJKUConsultants }], },
  { tier: 'Partner', logoHeight: 130, entries: [{ type: 'logo', name: 'Qadeer Maudoodi & Mazhar PLLC', src: logoQadeer }, { type: 'logo', name: 'HRSS LLP CPAs & Advisors', src: logoHRSS }, { type: 'logo', name: 'Ethos Group', src: logoEthosGroup }, { type: 'logo', name: 'BMO Harris Bank', src: logoBMOHarris }, { type: 'logo', name: 'Mobiz', src: logoMobiz }], },
  { tier: 'Advocate', logoHeight: 120, entries: [{ type: 'logo', name: 'Higginbotham', src: logoHigginbotham }, { type: 'logo', name: 'Farmers & Merchants Bank', src: logoFarmersMerch }, { type: 'logo', name: 'Enterprise Bank & Trust', src: logoEnterpriseBank }, { type: 'logo', name: 'Dave Cantin Group', src: logoDaveCantin }, { type: 'logo', name: 'Chamberlain Hrdlicka', src: logoChamberlain }, { type: 'logo', name: 'Arrowhead General Insurance Agency', src: logoArrowhead }], },
  { tier: 'Collaborator', logoHeight: 115, entries: [{ type: 'logo', name: 'Versa Creative', src: logoVersaCreative }, { type: 'logo', name: 'ZT Payments', src: logoZTPayments }, { type: 'logo', name: 'Surmount', src: logoSurmount }, { type: 'logo', name: 'One Step Diagnostic', src: logoOneStepDiagnostics }, { type: 'logo', name: 'Woodvale', src: logoWoodvale }, { type: 'logo', name: 'ACE Altus Accountable Care Entity', src: logoACEAltus }, { type: 'logo', name: 'Balance Companies', src: logoBalanceCompanies }], },
  { tier: 'Supporter', logoHeight: 110, entries: [{ type: 'text', name: 'Dallas Capital Bank' }, { type: 'text', name: 'Texas Heritage Bank' }, { type: 'text', name: 'Stellar Bank' }, { type: 'text', name: 'Capital Automotive' }, { type: 'text', name: 'Pierpoint' }], },
]

const TESTIMONIALS = [
  { name: 'Angel Gonzalez', thumbnail: testimonial1 },
  { name: 'Earon Ramirez', thumbnail: testimonial2 },
  { name: 'Jael Santos', thumbnail: testimonial3 },
  { name: 'Lennex Minor', thumbnail: testimonial4 },
]

const TIERS = [
  { name: 'VISIONARY', price: '$200K', badge: '', badgeGold: true, featured: true, perks: ['Hyperlinked Logo Placed on Website', 'VVIP Tables', 'Company Logo Included in AV Sponsor Presentation', 'Company Logo on Step & Repeat', 'Special Recognition on Stage During Gala', 'Company Logo on Hotel Key', 'Stage Presence During Gala'] },
  { name: 'INNOVATOR', price: '$100K', badge: '', badgeGold: false, featured: false, perks: ['Hyperlinked Logo Placed on Website', 'VVIP Tables', 'Company Logo Included in AV Sponsor Presentation', 'Company Logo on Step & Repeat', 'Special Recognition on Stage During Gala', 'Company Logo on Hotel Key'] },
  { name: 'AMBASSADOR', price: '$50K', badge: '', badgeGold: false, featured: false, perks: ['Hyperlinked Logo Placed on Website', 'VVIP Tables', 'Company Logo Included in AV Sponsor Presentation', 'Company Logo on Step & Repeat', 'Special Recognition on Stage During Gala'] },
  { name: 'PARTNER', price: '$25K', badge: '', badgeGold: true, featured: false, perks: ['Hyperlinked Logo Placed on Website', '12 Seats', 'Company Logo Included in AV Sponsor Presentation'] },
  { name: 'ADVOCATE', price: '$15K', badge: '', badgeGold: false, featured: false, perks: ['Hyperlinked Logo Placed on Website', '6 Seats', 'Company Logo Included in AV Sponsor Presentation'] },
  { name: 'COLLABORATOR', price: '$10K', badge: '', badgeGold: false, featured: false, perks: ['Hyperlinked Logo Placed on Website', '2 Seats', 'Company Logo Included in AV Sponsor Presentation'] },
]

function MosaicPlaceholder({ label }: { label?: string }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3" style={{ background: 'linear-gradient(135deg, #111009 0%, #1c180e 50%, #0f0d09 100%)' }}>
      <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #C6A261 0px, #C6A261 1px, transparent 1px, transparent 18px)' }} />
      <svg width="26" height="26" viewBox="0 0 26 26" style={{ opacity: 0.22 }}>
        <polygon points="13,1 25,13 13,25 1,13" fill="none" stroke="#C6A261" strokeWidth="1.5" />
        <polygon points="13,7 19,13 13,19 7,13" fill="rgba(198,162,97,0.22)" stroke="#C6A261" strokeWidth="0.7" />
      </svg>
      <p className="text-[9px] tracking-[0.28em] uppercase text-center px-3 leading-5 relative" style={{ color: 'rgba(198,162,97,0.35)' }}>{label ?? 'Foundation Photo'}</p>
    </div>
  )
}

function CarouselSlot({ pair, delay, col, row, label, objectPosition = 'center' }: { pair: [string | null, string | null]; delay: number; col: string; row: string; label?: string; objectPosition?: string }) {
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
    <div style={{ gridColumn: col, gridRow: row }} className="relative overflow-hidden bg-stone-950" onMouseEnter={handlePause} onMouseLeave={handleResume}>
      {pair.map((src, i) => (
        <div key={i} className="absolute inset-0 transition-opacity duration-1000 ease-in-out" style={{ opacity: bothReal ? (i === active ? 1 : 0) : 1 }}>
          {src ? <img src={src} alt="ZT Baseball Foundation" className="w-full h-full object-cover" style={{ objectPosition }} /> : <MosaicPlaceholder label={label} />}
        </div>
      ))}

      {paused && (
        <div className="absolute bottom-2 left-2 z-10">
          <span className="text-white/60 text-[9px] tracking-widest uppercase px-2 py-1" style={{ background: 'rgba(0,0,0,0.55)' }}>Paused</span>
        </div>
      )}
    </div>
  )
}

function VideoCarouselSlot({ thumbnail, name, altImage, col, row, delay }: { thumbnail: string; name: string; altImage: string; col: string; row: string; delay: number }) {
  const [active, setActive] = useState(0)
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
    <div style={{ gridColumn: col, gridRow: row }} className="relative overflow-hidden bg-stone-950 group cursor-pointer">
      <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out" style={{ opacity: active === 0 ? 1 : 0 }}>
        <img src={thumbnail} alt={`${name} testimonial`} className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(43,27,12,0.75) 0%, rgba(43,27,12,0.12) 55%, transparent 100%)' }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ width: 44, height: 44, border: `1.5px solid rgba(198,162,97,0.9)`, background: 'rgba(43,27,12,0.55)', backdropFilter: 'blur(4px)' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="rgba(198,162,97,0.9)"><polygon points="3,1 13,7 3,13" /></svg>
          </div>
        </div>
        <p className="absolute bottom-3 left-4 text-[11px] tracking-[0.2em] uppercase font-light" style={{ color: 'rgba(252,249,244,0.85)' }}>{name}</p>
      </div>

      <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out" style={{ opacity: active === 1 ? 1 : 0 }}>
        <img src={altImage} alt="ZT Baseball Foundation" className="w-full h-full object-cover" />
      </div>
    </div>
  )
}

const GALA_24_MOSAIC: { pair: [string, string | null]; delay: number; col: string; row: string }[] = [
  { pair: [gala24L3, gala24L4], delay: 0.0, col: '1 / 4', row: '1 / 2' },
  { pair: [gala24L1, gala24L2], delay: 1.6, col: '4 / 6', row: '1 / 2' },
  { pair: [gala24V1, gala24V3], delay: 3.2, col: '6 / 7', row: '1 / 2' },
  { pair: [gala24V2, gala24L51], delay: 2.0, col: '1 / 2', row: '2 / 3' },
  { pair: [gala24L5, gala24L9], delay: 0.8, col: '2 / 4', row: '2 / 3' },
  { pair: [gala24L6, gala24L7], delay: 2.8, col: '4 / 6', row: '2 / 3' },
  { pair: [gala24L8, null], delay: 0.0, col: '6 / 7', row: '2 / 3' },
]

export function Navigation({ scrolled }: { scrolled: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500" style={scrolled ? { background: 'rgba(43,27,12,0.96)', backdropFilter: 'blur(12px)', borderBottom: `1px solid rgba(198,162,97,0.55)`, paddingTop: '12px', paddingBottom: '12px' } : { background: 'rgba(27,14,4,0.85)', paddingTop: '20px', paddingBottom: '20px' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center flex-shrink-0">
          <img src={ztwayLogo} alt="ZTWAY" className="h-10 w-auto object-contain" />
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) =>
            link.href ? (
              <a key={link.label} href={link.href} className="text-[11px] tracking-[0.2em] uppercase font-light transition-colors duration-200" style={{ color: 'rgba(252,249,244,0.62)' }} onMouseEnter={(e) => ((e.target as HTMLElement).style.color = GOLD)} onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(252,249,244,0.62)')}>
                {link.label}
              </a>
            ) : (
              <span key={link.label} className="text-[11px] tracking-[0.2em] uppercase font-light" style={{ color: 'rgba(252,249,244,0.62)', cursor: 'default' }}>{link.label}</span>
            ),
          )}
        </div>

        <div className="hidden lg:flex items-start gap-4">
          <span className="px-6 py-2.5 text-[11px] tracking-[0.25em] uppercase font-medium" style={{ background: GOLD, color: OBSIDIAN, cursor: 'default' }}>RSVP</span>
          <span className="block px-5 py-2.5 text-[11px] tracking-[0.2em] uppercase font-light" style={{ border: `1px solid ${GOLD_DIM}`, color: GOLD, cursor: 'default' }}><strong>Book Hotel Room</strong></span>
        </div>

        <button className="lg:hidden p-2 flex flex-col gap-1.5" onClick={() => setMobileMenuOpen((v) => !v)} aria-label="Toggle menu">
          {[0, 1, 2].map((i) => (<span key={i} className="block w-6 h-px transition-all duration-200" style={{ background: CREAM }} />))}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden px-6 py-6" style={{ background: 'rgba(43,27,12,0.98)', borderTop: `1px solid ${GOLD_DIM}` }}>
          {NAV_LINKS.map((link) =>
            link.href ? (
              <a key={link.label} href={link.href} className="block py-3 text-[11px] tracking-[0.25em] uppercase" style={{ color: 'rgba(252,249,244,0.62)', borderBottom: '1px solid rgba(198,162,97,0.10)' }} onClick={() => setMobileMenuOpen(false)}>{link.label}</a>
            ) : (
              <span key={link.label} className="block py-3 text-[11px] tracking-[0.25em] uppercase" style={{ color: 'rgba(252,249,244,0.62)', borderBottom: '1px solid rgba(198,162,97,0.10)', cursor: 'default' }}>{link.label}</span>
            ),
          )}
          <div className="flex gap-3 mt-6 items-start">
            <span className="flex-1 text-center py-3 text-[11px] tracking-widest uppercase" style={{ background: GOLD, color: OBSIDIAN, cursor: 'default' }}>RSVP</span>
          </div>
        </div>
      )}
    </nav>
  )
}

export function HeroSection() {
  return (
    <section id="details" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBackground} alt="" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-x-0 bottom-0" style={{ height: '58%', background: 'linear-gradient(to top, rgba(27,14,4,1) 0%, rgba(27,14,4,0.95) 28%, rgba(27,14,4,0.70) 52%, rgba(27,14,4,0.30) 72%, rgba(27,14,4,0.10) 88%, rgba(27,14,4,0.03) 95%, transparent 100%)' }} />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-48 pb-20">
        <img src={ztcWordmark} alt="ZT Corporate" className="h-auto object-contain mb-4" style={{ width: 260, mixBlendMode: 'screen' }} />
        <img src={ztIconHeadline} alt="ZT Corporate Chairman's Gala" className="w-full max-w-xs sm:max-w-md lg:max-w-xl xl:max-w-2xl h-auto object-contain mb-10" />

        <div className="flex items-center gap-4 mb-10" style={{ opacity: 0 }}>
          <div className="h-px w-36" style={{ background: `linear-gradient(to right, transparent, ${GOLD_LIGHT})` }} />
          <div style={{ filter: `drop-shadow(0 0 6px ${GOLD})` }}>
            <svg width="10" height="10" viewBox="0 0 8 8" fill={GOLD_LIGHT}><polygon points="4,0 8,4 4,8 0,4" /></svg>
          </div>
          <div className="h-px w-36" style={{ background: `linear-gradient(to left, transparent, ${GOLD_LIGHT})` }} />
        </div>

        <div className="flex flex-col sm:flex-row items-stretch gap-8 sm:gap-0 mb-14">
          {[
            { label: 'Date', lines: ['December 5th'] },
            { label: 'Venue', lines: ['Hilton Americas Hotel', 'On Lamar St, Houston'] },
            { label: 'Time', lines: ['6:30 PM'] },
          ].map((item, i, arr) => (
            <div key={item.label} className="flex-1 flex flex-col justify-start" style={i < arr.length - 1 ? { paddingRight: '2.5rem', borderRight: '1px solid rgba(198,162,97,0.18)', marginRight: '2.5rem' } : {}}>
              <p className="text-[8px] tracking-[0.5em] uppercase mb-3" style={{ color: GOLD, opacity: 0.75 }}>{item.label}</p>
              {item.lines.map((line, j) => (
                <p key={j} className="font-quiche leading-snug" style={{ color: j === 0 ? CREAM : 'rgba(252,249,244,0.45)', fontSize: j === 0 ? 'clamp(1.15rem, 2vw, 1.5rem)' : 'clamp(0.85rem, 1.4vw, 1.05rem)', marginBottom: j < item.lines.length - 1 ? '0.1rem' : 0, whiteSpace: 'nowrap' }}>{line}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <a href="#rsvp" className="px-12 py-4 text-sm tracking-[0.3em] uppercase font-medium transition-colors duration-300" style={{ background: GOLD, color: OBSIDIAN }} onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = GOLD_LIGHT)} onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = GOLD)}>Reserve Your Seat</a>
          <div className="relative">
            <a href="https://passkey.com" target="_blank" rel="noopener noreferrer" className="block px-12 py-4 text-sm tracking-[0.3em] uppercase font-light transition-all duration-300" style={{ border: `1px solid ${GOLD_DIM}`, color: GOLD }} onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(198,162,97,0.10)'; el.style.borderColor = GOLD }} onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = 'transparent'; el.style.borderColor = GOLD_DIM }}><strong>Book Hotel Room</strong></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function PerformersSection() {
  return (
    <section id="performers" style={{ background: DEEP, position: 'relative', overflow: 'hidden' }} className="pb-24 pt-5 px-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-12" style={{ position: 'relative', zIndex: 1 }}>
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[0.4em] uppercase mb-4 font-light" style={{ color: GOLD }}>An Evening of Excellence</p>
        </div>

        <div className="mb-16">
          <p className="text-[10px] tracking-[0.35em] uppercase mb-4" style={{ color: GOLD }}>A Special Performance By</p>
          <div className="flex flex-col lg:flex-row overflow-hidden" style={{ border: `1px solid ${GOLD}`, boxShadow: `0 0 0 1px rgba(198,162,97,0.18), 0 0 40px rgba(198,162,97,0.12), inset 0 0 60px rgba(198,162,97,0.03)`, background: 'rgba(125,91,36,0.06)' }}>
            <div className="relative flex-shrink-0 lg:w-[45%] overflow-hidden" style={{ minHeight: 480 }}>
              <img src={leAnnRimes} alt="LeAnn Rimes — Headlining Artist" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: '65% 20%', transform: 'scale(1.55)', transformOrigin: '65% 25%' }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 70%, rgba(27,14,4,0.85) 100%)' }} />
            </div>

            <div className="flex flex-col justify-center p-10 lg:p-14 flex-1">
              <img src={leAnnLogo} alt="LeAnn Rimes" className="mb-6" style={{ width: 260, mixBlendMode: 'screen' }} />
              <p className="text-[9px] tracking-[0.35em] uppercase mb-5" style={{ color: GOLD }}>Bio</p>
              <p className="text-sm leading-7 mb-5" style={{ color: 'rgba(252,249,244,0.68)' }}>LeAnn Rimes is an internationally acclaimed, multi-platinum-selling artist whose genre-defying career has spanned nearly three decades. She has released 21 albums and 71 singles to radio worldwide. Rimes has sold over 48 million records globally, earned eight Grammy® nominations and two wins, and made history as the youngest solo artist ever to receive a Grammy.</p>
              <p className="text-sm leading-7 mb-5" style={{ color: 'rgba(252,249,244,0.68)' }}>Beyond her recording and performance career, Rimes continues to use her platform to advocate for mental health awareness, LGBTQ+ rights, anti-bullying, and chronic illness visibility.</p>
              <p className="text-sm leading-7" style={{ color: 'rgba(252,249,244,0.68)' }}>With a voice that has defined an era and a spirit that continues to evolve, LeAnn Rimes remains a singular force, bridging genres, generations, and global audiences with every new chapter.</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="flex items-stretch overflow-hidden" style={{ borderTop: `1px solid rgba(226,201,143,0.70)`, borderRight: `1px solid rgba(198,162,97,0.28)`, borderBottom: `1px solid rgba(198,162,97,0.28)`, borderLeft: `1px solid rgba(198,162,97,0.28)`, background: DEEP, boxShadow: `0 -1px 0 0 rgba(226,201,143,0.35), 0 4px 24px rgba(198,162,97,0.07)` }}>
            <div className="flex flex-col justify-center p-5 min-w-0" style={{ minWidth: '180px' }}>
              <p className="font-quiche text-lg mb-1 text-right" style={{ color: CREAM }}>Chester Pitts</p>
              <p className="text-[10px] tracking-[0.25em] uppercase mb-1 text-right" style={{ color: GOLD }}>Host</p>
              <p className="text-[10px] leading-relaxed text-right" style={{ color: 'rgba(252,249,244,0.40)' }}>NFL Pro Bowl Offensive Lineman</p>
            </div>
            <div className="flex-shrink-0 w-72 overflow-hidden" style={{ minHeight: '320px' }}>
              <img src={chesterPitts} alt="Chester Pitts" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </div>
      </div>

      <div aria-hidden="true" style={{ position: 'absolute', bottom: '-8%', left: 0, width: '100%', height: '55%', pointerEvents: 'none', backgroundImage: `url(${sponsorshipBg})`, backgroundSize: 'cover', backgroundPosition: 'center bottom', maskImage: 'linear-gradient(to bottom, transparent 0%, black 12%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 12%)', zIndex: 0 }} />
    </section>
  )
}

export function GalaGallery() {
  return (
    <section id="past-galas" className="relative pb-24 overflow-hidden" style={{ paddingTop: 40 }}>
      <img src={galaBg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="absolute inset-0" style={{ background: 'rgba(231,220,203,0.78)' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-quiche text-4xl lg:text-5xl mb-6" style={{ color: ESPRESSO }}>A Look Back at Previous Galas</h2>
        </div>

        <div className="grid gap-2 mb-10" style={{ gridTemplateColumns: 'repeat(6, 1fr)', gridTemplateRows: 'repeat(3, 240px)' }}>
          <CarouselSlot pair={[pgL3, pgL9]} delay={0.0} col="1 / 4" row="1 / 2" objectPosition="center" />
          <VideoCarouselSlot thumbnail={pgVid1} name="2024 Gala Highlights" altImage={pgL8} col="4 / 6" row="1 / 2" delay={1.2} />
          <CarouselSlot pair={[pgVert1, pgVert2]} delay={2.5} col="6 / 7" row="1 / 2" objectPosition="top" />
          <CarouselSlot pair={[pgVert3, pgVert4]} delay={1.0} col="1 / 2" row="2 / 3" objectPosition="top" />
          <VideoCarouselSlot thumbnail={pgVid2} name="2025 Gala Highlights" altImage={pgL4} col="2 / 4" row="2 / 3" delay={3.0} />
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

export function FoundationSection() {
  return (
    <section id="foundation" style={{ background: OBSIDIAN }} className="relative py-24 overflow-hidden">
      <img src={ztaWordMarkIcon} aria-hidden="true" className="absolute pointer-events-none select-none" style={{ left: '-8%', top: '50%', transform: 'translateY(-50%)', width: 560, opacity: 0.12 }} />
      <div className="absolute inset-y-0 right-0 pointer-events-none" style={{ width: '52%' }}>
        <img src={foundationHero} alt="" aria-hidden="true" className="w-full h-full object-cover" style={{ objectPosition: '18% center', imageRendering: 'auto', WebkitBackfaceVisibility: 'hidden' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(43,27,12,1) 0%, rgba(43,27,12,0.80) 18%, rgba(43,27,12,0.20) 55%, transparent 100%)' }} />
        <div className="absolute inset-x-0 top-0" style={{ height: '35%', background: 'linear-gradient(to bottom, rgba(43,27,12,0.85) 0%, transparent 100%)' }} />
        <div className="absolute inset-x-0 bottom-0" style={{ height: '35%', background: 'linear-gradient(to top, rgba(43,27,12,0.85) 0%, transparent 100%)' }} />
      </div>

      <div className="absolute bottom-0 left-0 pointer-events-none" style={{ width: '45%', height: '45%', background: 'radial-gradient(ellipse at 0% 100%, rgba(198,162,97,0.55) 0%, rgba(198,162,97,0.30) 30%, rgba(198,162,97,0.10) 55%, transparent 72%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <p className="text-[11px] tracking-[0.4em] uppercase mb-5 font-light" style={{ color: GOLD }}>Giving Back</p>
            <h2 className="font-quiche text-4xl lg:text-5xl leading-tight mb-6" style={{ color: CREAM }}>Supporting the</h2>
            <img src={ztaWordMark} alt="ZT Athletics Foundation" className="mb-8" style={{ width: 320, mixBlendMode: 'screen' }} />
            <p className="text-sm leading-8 mb-6" style={{ color: 'rgba(252,249,244,0.60)' }}>The ZT Athletics Foundation fosters youth development and community engagement through sports, integrating teamwork and discipline into young athletes' lives while promoting physical fitness and personal growth. It offers various programs and clinics, connecting communities with opportunities for skill development and character building.</p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { num: '1,200+', label: 'Youth Served' },
                { num: '48', label: 'Partner Schools' },
                { num: '$2.1M', label: 'Raised to Date' },
              ].map((stat) => (
                <div key={stat.label} className="p-5 text-center" style={{ border: 'none' }}>
                  <p className="font-quiche text-2xl lg:text-3xl mb-1" style={{ color: GOLD }}>{stat.num}</p>
                  <p className="text-[9px] tracking-[0.2em] uppercase" style={{ color: 'rgba(252,249,244,0.45)' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:self-center p-10 lg:p-14" style={{ background: 'rgba(125,91,36,0.05)', borderTop: `1px solid rgba(198,162,97,0.18)`, borderRight: `1px solid rgba(198,162,97,0.18)`, borderBottom: `1px solid rgba(198,162,97,0.18)`, borderLeft: `3px solid ${GOLD}` }}>
            <p className="font-quiche text-2xl lg:text-3xl leading-relaxed mb-6" style={{ color: CREAM }}>"We're building more than ballplayers, we're building young leaders for the future."</p>
            <p className="text-[10px] tracking-[0.3em] uppercase" style={{ color: GOLD }}>— <strong>Taseer Badar, Founder</strong></p>
          </div>
        </div>

        <div className="grid gap-2" style={{ gridTemplateColumns: 'repeat(6, 1fr)', gridTemplateRows: 'repeat(3, 240px)' }}>
          <CarouselSlot pair={MOSAIC[0].pair} delay={MOSAIC[0].delay} col="1 / 4" row="1 / 2" />
          <VideoCarouselSlot thumbnail={TESTIMONIALS[2].thumbnail} name={TESTIMONIALS[2].name} altImage={ztbLL1} col="4 / 6" row="1 / 2" delay={1.2} />
          <CarouselSlot pair={MOSAIC[2].pair} delay={MOSAIC[2].delay} col="6 / 7" row="1 / 2" />
          <CarouselSlot pair={MOSAIC[3].pair} delay={MOSAIC[3].delay} col="1 / 2" row="2 / 3" />
          <VideoCarouselSlot thumbnail={TESTIMONIALS[0].thumbnail} name={TESTIMONIALS[0].name} altImage={ztbL2} col="2 / 4" row="2 / 3" delay={3.0} />
          <CarouselSlot pair={[ztbL4, ztbL1]} delay={2.5} col="4 / 5" row="2 / 3" />
          <VideoCarouselSlot thumbnail={TESTIMONIALS[3].thumbnail} name={TESTIMONIALS[3].name} altImage={ztbL6} col="5 / 7" row="2 / 3" delay={0.6} />
          <CarouselSlot pair={MOSAIC[6].pair} delay={MOSAIC[6].delay} col="1 / 3" row="3 / 4" />
          <CarouselSlot pair={MOSAIC[7].pair} delay={MOSAIC[7].delay} col="3 / 4" row="3 / 4" />
          <VideoCarouselSlot thumbnail={TESTIMONIALS[1].thumbnail} name={TESTIMONIALS[1].name} altImage={ztbLW2} col="4 / 6" row="3 / 4" delay={4.5} />
          <CarouselSlot pair={[ztbL8, ztbL5]} delay={1.8} col="6 / 7" row="3 / 4" />
        </div>
      </div>
    </section>
  )
}

export function SponsorshipSection() {
  return (
    <section id="sponsorships" className="relative py-24 overflow-hidden">
      <img src={sponsorshipBg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="absolute inset-0" style={{ background: 'rgba(27,14,4,0.62)' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-quiche text-4xl lg:text-5xl mb-4" style={{ color: CREAM }}>Sponsorship</h2>
          <p className="text-[10px] tracking-[0.3em] uppercase font-light" style={{ color: 'rgba(198,162,97,0.70)' }}>For more information, please contact Thuylan Chang at <a href="mailto:thuylan@ztcorporate.com" style={{ color: GOLD }} onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.75')} onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}>thuylan@ztcorporate.com</a></p>
        </div>

        <div className="mb-20" style={{ position: 'relative', left: '50%', transform: 'translateX(-50%)', width: '100vw', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12, paddingLeft: 24, paddingRight: 24, boxSizing: 'border-box' }}>
          {TIERS.map((tier) => {
            const priceColor = LUX_GOLD
            return (
              <div key={tier.name} className="pricing-card relative flex flex-col p-8 group" style={{ background: tier.name === 'VISIONARY' ? 'rgba(198,162,97,0.04)' : tier.featured ? 'rgba(198,162,97,0.08)' : LUX_CARD_BG, boxShadow: `0 0 12px rgba(198,162,97,0.06)` }}>
                <div className="pricing-card__accent absolute top-0 left-0 right-0 h-[2px]" />
                {tier.badge && <p className="text-[9px] tracking-[0.4em] uppercase mb-5 font-medium" style={{ color: tier.badgeGold ? LUX_GOLD : LUX_MUTED }}>{tier.badge}</p>}
                <h3 className="font-quiche text-lg mb-3 uppercase tracking-wide" style={{ color: '#ffffff' }}>{tier.name}</h3>
                <p className="font-quiche text-4xl mb-6" style={{ color: priceColor }}>{tier.price}</p>
                <div className="h-px mb-6" style={{ background: GOLD, opacity: 0.45 }} />
                <ul className="space-y-3 flex-grow">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-3 text-[13px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.62)' }}>
                      <span className="flex-shrink-0 mt-[3px] text-[8px]" style={{ color: LUX_GOLD }}>◆</span>
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function PartnerWallSection() {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      <img src={partnerBg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <h2 className="font-quiche text-4xl lg:text-5xl mb-3" style={{ color: '#4D310A' }}>Thank You</h2>
          <p className="text-[11px] tracking-[0.4em] uppercase" style={{ color: 'rgba(77,49,10,0.45)', fontWeight: 900 }}>to Our Sponsors for Your Support</p>
        </div>

        <div className="space-y-12">
          {SPONSOR_TIERS.map(({ tier, logoHeight, entries }) => (
            <div key={tier}>
              <div className="flex items-center justify-center gap-4 mb-10">
                <span className="flex-1 max-w-[120px]" style={{ height: 1, background: GOLD, opacity: 0.5 }} />
                <p className="text-[10px] tracking-[0.45em] uppercase font-medium" style={{ color: GOLD }}>{tier}</p>
                <span className="flex-1 max-w-[120px]" style={{ height: 1, background: GOLD, opacity: 0.5 }} />
              </div>

              <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                {entries.map((entry) =>
                  entry.type === 'logo' ? (
                    <img key={entry.name} src={entry.src} alt={entry.name} style={{ height: logoHeight, width: 'auto', maxWidth: logoHeight * 3.2, objectFit: 'contain', mixBlendMode: 'multiply', transition: 'opacity 0.2s' }} onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.75')} onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')} />
                  ) : (
                    <p key={entry.name} className="font-medium tracking-wide text-center leading-snug" style={{ color: '#4D310A', fontSize: tier === 'Supporter' ? 15 : logoHeight * 0.12, maxWidth: tier === 'Supporter' ? 180 : 200 }}>{entry.name}</p>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <img src={footerBg} aria-hidden="true" className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none" style={{ objectPosition: '30% center' }} />
      <div className="relative z-10 max-w-2xl mx-auto px-6 lg:px-12">
        <div className="text-center">
          <h2 className="font-quiche text-4xl lg:text-5xl mb-5" style={{ color: CREAM }}>Have Questions?</h2>
          <p className="text-sm tracking-[0.05em] uppercase" style={{ color: 'rgba(252,249,244,0.48)' }}>Feel free to reach out to us at <a href="mailto:rsvp@ztcorporate.com" style={{ color: GOLD }} onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.75')} onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}>rsvp@ztcorporate.com</a></p>
          <div className="w-16 h-px mx-auto mt-8" style={{ background: GOLD_DIM }} />
        </div>
      </div>
    </section>
  )
}

export function LandingPage({ scrolled }: { scrolled: boolean }) {
  return (
    <>
      <Navigation scrolled={scrolled} />
      <HeroSection />
      <PerformersSection />
      <GalaGallery />
      <FoundationSection />
      <SponsorshipSection />
      <PartnerWallSection />
      <ContactSection />
    </>
  )
}
