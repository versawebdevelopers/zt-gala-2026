import partnerBg from '@/imports/742094b7-e142-4e6e-b856-88c021904120.png'
import OptimizedImage from '@/components/OptimizedImage'
import logoACE from '@/imports/ACE_Community_Healthcare_logo.png'
import logoCapitalOneHotel from '@/imports/Capital_One_Hotel_Group_logo.png'
import logoCityAmbulance from '@/imports/City_Ambulance_logo.png'
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
import logoZTAutomotive from '@/imports/200k-ZT Automotive.png'
import logoZTHealth from '@/imports/200k-ZT Health.png'
import logoBadarFam from '@/imports/200k-BadarFamilyOffice.png'
import logoZTCorporate from '@/imports/200k-zt corporate.png'
import logoArthurLawrence100k from '@/imports/100k-arthur lawrence.png'
import logoChamberlain15k from '@/imports/15k-chamberlain.png'
import logoPashaLaw50k from '@/imports/50k-pashaLaw.png'
import logoJanney50k from '@/imports/50k-janney.png'
import logoBMO50k from '@/imports/50k-BMO.png'
import logoCityAmbulance50k from '@/imports/50k-cityAmbulance.png'
import logoArrowhead25k from '@/imports/25k-arrowhead.png'
import logoMedicalCareCenter25k from '@/imports/25k-medicalCareCenter.png'
import logoQadeer25k from '@/imports/25k-Qadeer.png'
import logoGiorgioArmani25k from '@/imports/25k-GiorgieArmani.png'
import logoFarmerMerchant25k from '@/imports/25k-FarmerMerchant.png'
import logoEthosGroup25k from '@/imports/25k-EthosGroup.png'
import logoOmega25k from '@/imports/25k-OmegaAdvisors.png'
import logoEnterpriseBank25k from '@/imports/25k-enterpriseBank.png'
import logoHollandKnight10k from '@/imports/10k-Holland & Knight Law.png'
import logoTexasHeritage10k from '@/imports/10k-Texas Heritage Bank-Liberty Capital.png'
import logoUrbanArc10k from '@/imports/10k-Urban Arc Properties.png'
import logoHigginbotham15k from '@/imports/15k-Higginbotham.png'
import logoOneStep15k from '@/imports/15k-One Step Dianostic.png'
import logoWoodforest15k from '@/imports/15k-Woodforest Bank.png'

const GOLD = '#C6A261'

type SponsorEntry = { type: 'logo'; name: string; src: string; href?: string } | { type: 'text'; name: string }

const SPONSOR_TIERS: { tier: string; logoHeight: number; entries: SponsorEntry[] }[] = [
  {
    tier: 'Visionary',
    logoHeight: 250,
    entries: [
      { type: 'logo', name: 'ZT Corporate', src: logoZTCorporate, href: 'https://ztcorporate.com/' },
      { type: 'logo', name: 'Badar Family Office', src: logoBadarFam, href: 'http://badarfamilyoffice.com/' },
      { type: 'logo', name: 'ZT Automotive', src: logoZTAutomotive, href: 'https://www.ztautogroup.com/' },
      { type: 'logo', name: 'ZT Health', src: logoZTHealth, href: 'https://zthealth.com/' },
    ],
  },
  {
    tier: 'Innovator',
    logoHeight: 190,
    entries: [
      { type: 'logo', name: 'Arthur Lawrence', src: logoArthurLawrence100k, href: 'https://www.arthurlawrence.net/' },
    ],
  },
  {
    tier: 'Ambassador',
    logoHeight: 180,
    entries: [
      { type: 'logo', name: 'Pasha Law', src: logoPashaLaw50k, href: 'https://www.pashalaw.com/' },
      { type: 'logo', name: 'Janney', src: logoJanney50k, href: 'https://www.janney.com/' },
      { type: 'logo', name: 'BMO', src: logoBMO50k, href: 'https://www.bmo.com/en-us/main/personal/' },
      { type: 'logo', name: 'City Ambulance', src: logoCityAmbulance50k, href: 'https://cityambu.com/' },
    ],
  },
  {
    tier: 'Partner',
    logoHeight: 150,
    entries: [
      { type: 'logo', name: 'Arrowhead', src: logoArrowhead25k, href: 'https://www.arrowheadgrp.com/' },
      { type: 'logo', name: 'Medical Care Center', src: logoMedicalCareCenter25k, href: 'https://medicalcarecenter.com/' },
      { type: 'logo', name: 'Qadeer', src: logoQadeer25k, href: 'https://qadeerlaw.com/' },
      { type: 'logo', name: 'Giorgio Armani', src: logoGiorgioArmani25k, href: 'https://www.armani.com/en-us/giorgio-armani/experience/' },
      { type: 'logo', name: 'Farmer and Merchant', src: logoFarmerMerchant25k, href: 'https://www.fmb.com/' },
      { type: 'logo', name: 'Ethos Group', src: logoEthosGroup25k, href: 'https://www.ethosgroup.com/' },
      { type: 'logo', name: 'Omega', src: logoOmega25k, href: 'https://omegadvisors.com/' },
      { type: 'logo', name: 'Enterprise Bank', src: logoEnterpriseBank25k, href: 'https://www.enterprisebank.com/' },
    ],
  },
  {
    tier: 'Advocate',
    logoHeight: 125,
    entries: [
      { type: 'logo', name: 'Chamberlain Hrdlicka', src: logoChamberlain15k, href: 'https://www.chamberlainlaw.com/' },
      { type: 'logo', name: 'Higginbotham', src: logoHigginbotham15k, href: 'https://www.higginbotham.com/' },
      { type: 'logo', name: 'One Step Diagnostic', src: logoOneStep15k, href: 'https://www.onestepdiagnostic.com/' },
      { type: 'logo', name: 'Woodforest Bank', src: logoWoodforest15k, href: 'https://www.woodforest.com/' },
    ],
  },
  {
    tier: 'Collaborator',
    logoHeight: 100,
    entries: [
      { type: 'logo', name: 'Holland & Knight', src: logoHollandKnight10k, href: 'https://www.hklaw.com/en' },
      { type: 'logo', name: 'Texas Heritage Bank - Liberty Capital', src: logoTexasHeritage10k, href: 'https://www.texasheritage.bank/' },
      { type: 'logo', name: 'Urban Arc Properties', src: logoUrbanArc10k, href: 'https://urbanarcproperties.com/' },
    ],
  },
]

export default function PartnerWallSection() {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      <OptimizedImage src={partnerBg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="relative z-10 max-w-[90rem] mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-quiche text-4xl lg:text-5xl mb-3" style={{ color: '#4D310A' }}>
            Thank You
          </h2>
          <p className="text-[13px] tracking-[0.4em] uppercase" style={{ color: 'rgba(77,49,10,0.45)', fontWeight: 900 }}>
            to Our Sponsors for Your Support
          </p>
        </div>

        <div className="space-y-12">
          {SPONSOR_TIERS.map(({ tier, logoHeight, entries }) => (
            <div key={tier}>
              <div className="flex items-center justify-center gap-4 mb-10">
                <span className="flex-1 max-w-[120px]" style={{ height: 1, background: GOLD, opacity: 0.5 }} />
                <p className="text-[12px] tracking-[0.45em] uppercase font-medium" style={{ color: GOLD }}>
                  {tier}
                </p>
                <span className="flex-1 max-w-[120px]" style={{ height: 1, background: GOLD, opacity: 0.5 }} />
              </div>

              <div className={tier === 'Visionary' ? 'grid grid-cols-1 lg:grid-cols-4 justify-items-center items-center gap-x-6 gap-y-8 -mx-4 lg:mx-0' : 'flex flex-wrap justify-center items-center gap-x-6 gap-y-8 -mx-4 lg:mx-0'}>
                {entries.map((entry) => {
                  if (entry.type === 'logo') {
                    const logo = (
                      <OptimizedImage
                        src={entry.src}
                        alt={entry.name}
                        sizes="(min-width: 1024px) 360px, 100vw"
                        maxWidth={1920}
                        className="max-w-full"
                        style={{
                          height: `clamp(${logoHeight * 0.6}px, ${(logoHeight / 250) * 40}vw, ${logoHeight}px)`,
                          width: 'auto',
                          objectFit: 'contain',
                          mixBlendMode: 'multiply',
                          transition: 'opacity 0.2s',
                        }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.75')}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
                      />
                    )

                    return entry.href ? (
                      <a key={entry.name} href={entry.href} target="_blank" rel="noreferrer" aria-label={`Visit ${entry.name}`}>
                        {logo}
                      </a>
                    ) : (
                      <div key={entry.name}>{logo}</div>
                    )
                  }

                  return (
                    <p
                      key={entry.name}
                      className="font-medium tracking-wide text-center leading-snug"
                      style={{
                        color: '#4D310A',
                        fontSize: tier === 'Supporter' ? 15 : logoHeight * 0.12,
                        maxWidth: tier === 'Supporter' ? 180 : 200,
                      }}
                    >
                      {entry.name}
                    </p>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
