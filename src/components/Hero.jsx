import Header from './Header.jsx'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative h-[560px] overflow-hidden bg-[#285b9c] sm:h-[620px] lg:h-[704px]"
      aria-labelledby="hero-title"
    >
      <img
        src="/assets/hero-bg-clean.webp"
        width="1440"
        height="704"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-fill"
        decoding="async"
        fetchPriority="high"
      />

      <Header />

      <div className="relative z-10 mx-auto w-[min(calc(100%-40px),1040px)] pt-[150px] text-center text-white sm:pt-[170px] lg:pt-[205px]">
        <h1
          id="hero-title"
          className="mx-auto mb-4 max-w-[1040px] select-text text-[34px] font-bold leading-[1.18] tracking-normal sm:text-[46px] lg:text-[53px] lg:leading-[68px]"
        >
          RemoteRecruit’s Difference
        </h1>
        <p className="mx-auto max-w-[800px] select-text text-sm font-medium leading-7 text-white/90 sm:text-[18px] sm:leading-[30px] lg:text-[20px] lg:leading-[32px]">
          RemoteRecruit is connecting the world with an easy-to-use platform that lets
          full-time, part-time, and freelance workers showcase their talents to
          businesses that need them. With no paywalls, no fees, and no barriers, there’s
          nothing but you, your talents, and the next step in your career.
        </p>
      </div>
    </section>
  )
}
