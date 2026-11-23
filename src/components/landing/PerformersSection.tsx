import chesterPitts from "@/imports/Chester_Pitts-portrait-1.png"

import brookeBurke from "@/imports/BrookeBurke-portrait.webp"

import leAnnRimes from "@/imports/LAR_High-Res-jpgLR_SB_PC_S7_1235_r_copy.jpg"

import leAnnLogo from "@/imports/LeAnnRimes_2024_LOGO-2.png"

import kimLogo from "@/imports/DJ Kim Lee Gold Logo.png"

import kimLee from "@/imports/DJ (1).png"

import sponsorshipBg from "@/imports/ChatGPT_Image_Aug_14__2026__03_09_52_PM.png"

import OptimizedImage from "@/components/OptimizedImage"

const DEEP = "#2B1B0C"

const GOLD = "#C6A261"

const CREAM = "#FCF9F4"

export default function PerformersSection() {
  return (
    <section
      id="performers"
      style={{ background: DEEP, position: "relative", overflow: "hidden" }}
      className="pb-24 pt-0 sm:pt-5 px-0"
    >
      <div
        className="max-w-7xl mx-auto px-6 lg:px-12"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div>
          <h2
            className="font-quiche text-center text-3xl sm:text-4xl lg:text-5xl mb-12 pt-12 sm:pt-7"
            style={{
              color: GOLD,
              WebkitTextStroke: "0.75px #1C1209",
              paintOrder: "stroke fill",
              textShadow: "0 2px 4px rgba(20, 10, 3, 0.9)",
            }}
          >
            The Hosts
          </h2>
          <div className="flex flex-col items-center justify-center gap-4 xl:flex-row xl:items-stretch">
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
              <div
                className="order-2 flex min-w-0 flex-col justify-center p-5 text-center sm:order-1 sm:text-right"
                style={{ minWidth: "180px" }}
              >
                <p
                  className="font-quiche text-2xl sm:text-xl mb-1"
                  style={{ color: CREAM }}
                >
                  Chester Pitts
                </p>
                <p
                  className="text-base sm:text-sm leading-relaxed"
                  style={{ color: "rgba(252,249,244,0.40)" }}
                >
                  Original Houston Texan
                </p>
              </div>
              <div
                className="order-1 h-[300px] w-full flex-shrink-0 overflow-hidden sm:order-2 sm:h-auto sm:w-72"
                style={{ minHeight: "320px" }}
              >
                <OptimizedImage
                  src={chesterPitts}
                  alt="Chester Pitts"
                  sizes="320px"
                  maxWidth={960}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
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
              <div
                className="order-1 h-[300px] w-full flex-shrink-0 overflow-hidden sm:order-2 sm:h-auto sm:w-72"
                style={{ minHeight: "320px" }}
              >
                <OptimizedImage
                  src={brookeBurke}
                  alt="Brooke Burke"
                  sizes="320px"
                  maxWidth={960}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div
                className="order-2 flex min-w-0 flex-col justify-center p-5 text-center sm:order-1 sm:text-right"
                style={{ minWidth: "180px" }}
              >
                <p
                  className="font-quiche text-2xl sm:text-xl mb-1"
                  style={{ color: CREAM }}
                >
                  Brooke Burke
                </p>
                <p
                  className="text-base sm:text-sm leading-relaxed"
                  style={{ color: "rgba(252,249,244,0.40)" }}
                >
                  American TV Personality and Model
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2
          className="font-quiche text-center text-3xl sm:text-4xl lg:text-5xl mb-12 pt-20"
          style={{ color: GOLD }}
        >
          Special Performances
        </h2>

        <div className="mb-16">
          <div
            className="flex flex-col lg:flex-row overflow-hidden"
            style={{
              border: `1px solid ${GOLD}`,

              boxShadow: `0 0 0 1px rgba(198,162,97,0.18), 0 0 40px rgba(198,162,97,0.12), inset 0 0 60px rgba(198,162,97,0.03)`,

              background: "rgba(125,91,36,0.06)",
            }}
          >
            <div
              className="relative flex-shrink-0 lg:w-[45%] overflow-hidden"
              style={{ minHeight: 480 }}
            >
              <OptimizedImage
                src={leAnnRimes}
                alt="LeAnn Rimes — Headlining Artist"
                sizes="(min-width: 1280px) 830px, (min-width: 1024px) 70vw, 155vw"
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  objectPosition: "65% 20%",
                  transform: "scale(1.55)",
                  transformOrigin: "65% 25%",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, transparent 70%, rgba(27,14,4,0.85) 100%)",
                }}
              />
            </div>

            <div className="flex flex-col justify-center p-10 lg:p-14 flex-1">
              <div className="-mx-4 mb-6 lg:-mx-6">
                <OptimizedImage
                  src={leAnnLogo}
                  alt="LeAnn Rimes"
                  sizes="480px"
                  maxWidth={960}
                  style={{ width: 480, maxWidth: "100%", mixBlendMode: "screen" }}
                />
              </div>
              <p
                className="text-[11px] tracking-[0.35em] uppercase mb-5"
                style={{ color: GOLD }}
              >
                Bio
              </p>
              <p
                className="text-base leading-7 mb-5 sm:text-sm"
                style={{ color: "rgba(252,249,244,0.68)" }}
              >
                LeAnn Rimes is an internationally acclaimed,
                multi-platinum-selling artist whose genre-defying career has
                spanned nearly three decades. She has released 21 albums and 71
                singles to radio worldwide. Rimes has sold over 48 million
                records globally, earned eight Grammy® nominations and two wins,
                and made history as the youngest solo artist ever to receive a
                Grammy.
              </p>
              <p
                className="text-base leading-7 mb-5 sm:text-sm"
                style={{ color: "rgba(252,249,244,0.68)" }}
              >
                Beyond her recording and performance career, Rimes continues to
                use her platform to advocate for mental health awareness, LGBTQ+
                rights, anti-bullying, and chronic illness visibility.
              </p>
              <p
                className="text-base leading-7 sm:text-sm"
                style={{ color: "rgba(252,249,244,0.68)" }}
              >
                With a voice that has defined an era and a spirit that continues
                to evolve, LeAnn Rimes remains a singular force, bridging
                genres, generations, and global audiences with every new
                chapter.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div
            className="flex flex-col overflow-hidden lg:flex-row"
            style={{
              border: `1px solid ${GOLD}`,

              boxShadow: `0 0 0 1px rgba(198,162,97,0.18), 0 0 40px rgba(198,162,97,0.12), inset 0 0 60px rgba(198,162,97,0.03)`,

              background: "rgba(125,91,36,0.06)",
            }}
          >
            <div className="relative aspect-[1060/1100] flex-shrink-0 overflow-hidden lg:aspect-auto lg:min-h-[480px] lg:w-[45%]">
              <OptimizedImage
                src={kimLee}
                alt="Kim Lee"
                sizes="(min-width: 1280px) 830px, (min-width: 1024px) 70vw, 155vw"
                className="absolute inset-0 h-full w-full object-cover object-left"
                style={{ objectPosition: "left top" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, transparent 70%, rgba(27,14,4,0.85) 100%)",
                }}
              />
            </div>

            <div
              className="flex flex-1 flex-col justify-center p-10 lg:p-14"
              style={{ background: "#1C1209" }}
            >
              <div className="-mx-4 mb-6 lg:-mx-6">
                <OptimizedImage
                  src={kimLogo}
                  alt="Kim Lee"
                  sizes="480px"
                  maxWidth={960}
                  style={{ width: 480, maxWidth: "100%", mixBlendMode: "screen" }}
                />
              </div>
              <p
                className="mb-5 text-[11px] tracking-[0.35em] uppercase"
                style={{ color: GOLD }}
              >
                Bio
              </p>
              <p
                className="text-base leading-7 sm:text-sm"
                style={{ color: "rgba(252,249,244,0.68)" }}
              >
                Los Angeles native, Kim Lee has become one of the most sought
                after DJ/ Producer / Actress in the business. Kim graduated from
                Scratch Academy in Los Angeles. From the support and
                encouragement from Apl De Ap from The Black Eyed Peas, Kim
                quickly start touring the world from the U.S to Asia and
                becoming one of the biggest DJ’s in the industry. She has toured
                and done shows with Steve Aoki, Martin Garrix, Diplo, and
                Skrillex. Kim also performed along with Cardi B, YG, and Tyga at
                Fashion Nova Event, 2021 MTV Movie & TV awards, Anastasia
                Beverly Hills Halloween Party, Budweiser, Johnny Walker,
                Hennessy, Ultra Japan, Ultra China, Ultra Korea, Life in Color
                Korea, Mad Decent Boat Party, It’s The Ship, EDC New York,
                Drai’s in Las Vegas, Marquee Vegas, Tao Las Vegas, Eleven in
                Miami, and Pacha NYC. Kim is now a residency at the world famous
                Wynn Nightlife, performing both at Encore Beach Club and XS.
              </p>
            </div>
          </div>
        </div>
      </div>

      <OptimizedImage
        src={sponsorshipBg}
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",

          top: "-8%",

          left: 0,

          width: "100%",

          height: "55%",

          pointerEvents: "none",

          objectFit: "cover",

          objectPosition: "center center",

          maskImage: "linear-gradient(to bottom, black 0%, transparent 88%)",

          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 88%)",

          zIndex: 0,
        }}
      />
    </section>
  )
}
