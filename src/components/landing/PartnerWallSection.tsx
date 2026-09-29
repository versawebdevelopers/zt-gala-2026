import partnerBg from '@/imports/742094b7-e142-4e6e-b856-88c021904120.png'
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

const GOLD = '#C6A261'

type SponsorEntry = { type: 'logo'; name: string; src: string; href: string } | { type: 'text'; name: string }

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
    logoHeight: 160,
    entries: [
      { type: 'logo', name: 'Arthur Lawrence', src: logoArthurLawrence100k, href: 'https://www.arthurlawrence.net/' },
    ],
  },
  {
    tier: 'Advocate',
    logoHeight: 120,
    entries: [
      { type: 'logo', name: 'Chamberlain Hrdlicka', src: logoChamberlain15k, href: 'https://www.chamberlainlaw.com/' },
    ],
  },
]

export default function PartnerWallSection() {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      <img src={partnerBg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center" />
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
                {entries.map((entry) =>
                  entry.type === 'logo' ? (
                    <a key={entry.name} href={entry.href} target="_blank" rel="noreferrer" aria-label={`Visit ${entry.name}`}>
                      <img
                      key={entry.name}
                      src={entry.src}
                      alt={entry.name}
                      className="max-w-full"
                      style={{
                        height: `clamp(${Math.min(150, logoHeight * 0.75)}px, 40vw, ${logoHeight}px)`,
                        width: 'auto',
                        objectFit: 'contain',
                        mixBlendMode: 'multiply',
                        transition: 'opacity 0.2s',
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.75')}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
                      />
                    </a>
                  ) : (
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
