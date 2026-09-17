import sponsorshipBg from '@/imports/ChatGPT_Image_Aug_14__2026__03_09_52_PM.png'

const LUX_GOLD = '#C6A261'
const LUX_MUTED = 'rgba(252,249,244,0.42)'
const LUX_CARD_BG = 'rgba(198,162,97,0.04)'
const GOLD = '#C6A261'

const TIERS = [
  {
    name: 'VISIONARY',
    price: '$200K',
    badge: '',
    badgeGold: true,
    featured: true,
    perks: [
      'Hyperlinked Logo Placed on Website',
      'VVIP Tables',
      'Company Logo Included in AV Sponsor Presentation',
      'Company Logo on Step & Repeat',
      'Special Recognition on Stage During Gala',
      'Company Logo on Hotel Key',
      'Stage Presence During Gala',
    ],
  },
  {
    name: 'INNOVATOR',
    price: '$100K',
    badge: '',
    badgeGold: false,
    featured: false,
    perks: [
      'Hyperlinked Logo Placed on Website',
      'VVIP Tables',
      'Company Logo Included in AV Sponsor Presentation',
      'Company Logo on Step & Repeat',
      'Special Recognition on Stage During Gala',
      'Company Logo on Hotel Key',
    ],
  },
  {
    name: 'AMBASSADOR',
    price: '$50K',
    badge: '',
    badgeGold: false,
    featured: false,
    perks: [
      'Hyperlinked Logo Placed on Website',
      'VVIP Tables',
      'Company Logo Included in AV Sponsor Presentation',
      'Company Logo on Step & Repeat',
      'Special Recognition on Stage During Gala',
    ],
  },
  {
    name: 'PARTNER',
    price: '$25K',
    badge: '',
    badgeGold: true,
    featured: false,
    perks: [
      'Hyperlinked Logo Placed on Website',
      '12 Seats',
      'Company Logo Included in AV Sponsor Presentation',
    ],
  },
  {
    name: 'ADVOCATE',
    price: '$15K',
    badge: '',
    badgeGold: false,
    featured: false,
    perks: [
      'Hyperlinked Logo Placed on Website',
      '6 Seats',
      'Company Logo Included in AV Sponsor Presentation',
    ],
  },
  {
    name: 'COLLABORATOR',
    price: '$10K',
    badge: '',
    badgeGold: false,
    featured: false,
    perks: [
      'Hyperlinked Logo Placed on Website',
      '2 Seats',
      'Company Logo Included in AV Sponsor Presentation',
    ],
  },
]

export default function SponsorshipSection() {
  return (
    <section id="sponsorships" className="relative py-24 overflow-hidden">
      <style>{`
        .pricing-card {
          border: 1px solid rgba(198,162,97,0.18);
          transition: border-color 0.35s ease, box-shadow 0.35s ease, transform 0.3s ease;
        }
        .pricing-card:hover {
          border-color: rgba(198,162,97,1);
          box-shadow: 0 0 28px rgba(198,162,97,0.22), inset 0 0 16px rgba(198,162,97,0.05);
          transform: translateY(-2px);
        }
        .pricing-card__accent {
          background: linear-gradient(to right, transparent, rgba(198,162,97,0.35), transparent);
          transition: background 0.35s ease, filter 0.35s ease;
        }
        .pricing-card:hover .pricing-card__accent {
          background: linear-gradient(to right, transparent, rgba(226,201,143,0.95), transparent);
          filter: drop-shadow(0 0 5px rgba(198,162,97,0.7));
        }
      `}</style>

      <img src={sponsorshipBg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="absolute inset-0" style={{ background: 'rgba(27,14,4,0.62)' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-quiche text-4xl lg:text-5xl mb-4" style={{ color: '#FCF9F4' }}>
            Sponsorship
          </h2>
          <p className="text-[10px] tracking-[0.3em] uppercase font-light" style={{ color: 'rgba(198,162,97,0.70)' }}>
            For more information, please contact Thuylan Chang at{' '}
            <a
              href="mailto:thuylan@ztcorporate.com"
              style={{ color: GOLD }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.75')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
            >
              thuylan@ztcorporate.com
            </a>
          </p>
        </div>

        <div className="mb-20" style={{ position: 'relative', left: '50%', transform: 'translateX(-50%)', width: '100vw', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12, paddingLeft: 24, paddingRight: 24, boxSizing: 'border-box' }}>
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className="pricing-card relative flex flex-col p-8 group"
              style={{
                background: tier.name === 'VISIONARY' ? 'rgba(198,162,97,0.04)' : tier.featured ? 'rgba(198,162,97,0.08)' : LUX_CARD_BG,
                boxShadow: `0 0 12px rgba(198,162,97,0.06)`,
              }}
            >
              <div className="pricing-card__accent absolute top-0 left-0 right-0 h-[2px]" />

              {tier.badge && (
                <p className="text-[9px] tracking-[0.4em] uppercase mb-5 font-medium" style={{ color: tier.badgeGold ? LUX_GOLD : LUX_MUTED }}>
                  {tier.badge}
                </p>
              )}

              <h3 className="font-quiche text-lg mb-3 uppercase tracking-wide" style={{ color: '#ffffff' }}>
                {tier.name}
              </h3>

              <p className="font-quiche text-4xl mb-6" style={{ color: LUX_GOLD }}>
                {tier.price}
              </p>

              <div className="h-px mb-6" style={{ background: GOLD, opacity: 0.45 }} />

              <ul className="space-y-3 flex-grow">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3 text-[13px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.62)' }}>
                    <span className="flex-shrink-0 mt-[3px] text-[8px]" style={{ color: LUX_GOLD }}>
                      ◆
                    </span>
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
