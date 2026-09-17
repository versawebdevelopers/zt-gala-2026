import partnerBg from '@/imports/742094b7-e142-4e6e-b856-88c021904120.png'
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

const GOLD = '#C6A261'

type SponsorEntry = { type: 'logo'; name: string; src: string } | { type: 'text'; name: string }

const SPONSOR_TIERS: { tier: string; logoHeight: number; entries: SponsorEntry[] }[] = [
  {
    tier: 'Visionary',
    logoHeight: 200,
    entries: [
      { type: 'logo', name: 'ZT Corporate', src: logoZTCorporate },
      { type: 'logo', name: 'Badar Family Office', src: logoBadarFam },
    ],
  },
  {
    tier: 'Innovator',
    logoHeight: 160,
    entries: [
      { type: 'logo', name: 'ACE Community Healthcare', src: logoACE },
      { type: 'logo', name: 'Capital One Hotel Group', src: logoCapitalOneHotel },
      { type: 'logo', name: 'City Ambulance Service', src: logoCityAmbulance },
      { type: 'logo', name: 'ZT Automotive', src: logoZTAutomotive },
    ],
  },
  {
    tier: 'Ambassador',
    logoHeight: 130,
    entries: [
      { type: 'logo', name: 'Pasha Law PC', src: logoPashaLaw },
      { type: 'logo', name: 'Janney', src: logoJanney },
      { type: 'logo', name: 'Arthur Lawrence', src: logoArthurLawrence },
      { type: 'logo', name: 'JKU Consultants', src: logoJKUConsultants },
    ],
  },
  {
    tier: 'Partner',
    logoHeight: 130,
    entries: [
      { type: 'logo', name: 'Qadeer Maudoodi & Mazhar PLLC', src: logoQadeer },
      { type: 'logo', name: 'HRSS LLP CPAs & Advisors', src: logoHRSS },
      { type: 'logo', name: 'Ethos Group', src: logoEthosGroup },
      { type: 'logo', name: 'BMO Harris Bank', src: logoBMOHarris },
      { type: 'logo', name: 'Mobiz', src: logoMobiz },
    ],
  },
  {
    tier: 'Advocate',
    logoHeight: 120,
    entries: [
      { type: 'logo', name: 'Higginbotham', src: logoHigginbotham },
      { type: 'logo', name: 'Farmers & Merchants Bank', src: logoFarmersMerch },
      { type: 'logo', name: 'Enterprise Bank & Trust', src: logoEnterpriseBank },
      { type: 'logo', name: 'Dave Cantin Group', src: logoDaveCantin },
      { type: 'logo', name: 'Chamberlain Hrdlicka', src: logoChamberlain },
      { type: 'logo', name: 'Arrowhead General Insurance Agency', src: logoArrowhead },
    ],
  },
  {
    tier: 'Collaborator',
    logoHeight: 115,
    entries: [
      { type: 'logo', name: 'Versa Creative', src: logoVersaCreative },
      { type: 'logo', name: 'ZT Payments', src: logoZTPayments },
      { type: 'logo', name: 'Surmount', src: logoSurmount },
      { type: 'logo', name: 'One Step Diagnostic', src: logoOneStepDiagnostics },
      { type: 'logo', name: 'Woodvale', src: logoWoodvale },
      { type: 'logo', name: 'ACE Altus Accountable Care Entity', src: logoACEAltus },
      { type: 'logo', name: 'Balance Companies', src: logoBalanceCompanies },
    ],
  },
  {
    tier: 'Supporter',
    logoHeight: 110,
    entries: [
      { type: 'text', name: 'Dallas Capital Bank' },
      { type: 'text', name: 'Texas Heritage Bank' },
      { type: 'text', name: 'Stellar Bank' },
      { type: 'text', name: 'Capital Automotive' },
      { type: 'text', name: 'Pierpoint' },
    ],
  },
]

export default function PartnerWallSection() {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      <img src={partnerBg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <h2 className="font-quiche text-4xl lg:text-5xl mb-3" style={{ color: '#4D310A' }}>
            Thank You
          </h2>
          <p className="text-[11px] tracking-[0.4em] uppercase" style={{ color: 'rgba(77,49,10,0.45)', fontWeight: 900 }}>
            to Our Sponsors for Your Support
          </p>
        </div>

        <div className="space-y-12">
          {SPONSOR_TIERS.map(({ tier, logoHeight, entries }) => (
            <div key={tier}>
              <div className="flex items-center justify-center gap-4 mb-10">
                <span className="flex-1 max-w-[120px]" style={{ height: 1, background: GOLD, opacity: 0.5 }} />
                <p className="text-[10px] tracking-[0.45em] uppercase font-medium" style={{ color: GOLD }}>
                  {tier}
                </p>
                <span className="flex-1 max-w-[120px]" style={{ height: 1, background: GOLD, opacity: 0.5 }} />
              </div>

              <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                {entries.map((entry) =>
                  entry.type === 'logo' ? (
                    <img
                      key={entry.name}
                      src={entry.src}
                      alt={entry.name}
                      style={{
                        height: logoHeight,
                        width: 'auto',
                        maxWidth: logoHeight * 3.2,
                        objectFit: 'contain',
                        mixBlendMode: 'multiply',
                        transition: 'opacity 0.2s',
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.75')}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
                    />
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
