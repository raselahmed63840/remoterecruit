export default function Header() {
  return (
    <header
      className="absolute left-[22px] right-[22px] top-[26px] z-50 flex items-start justify-between sm:left-[54px] sm:right-[54px] sm:top-[42px] md:left-[84px] md:right-[84px] lg:left-[54px] lg:right-[54px]"
      aria-label="Site header"
    >
      <a href="#top" className="inline-flex shrink-0 hover:-translate-y-0.5" aria-label="RemoteRecruit home">
        <img
          src="/assets/remote-recruit-logo.webp"
          width="247"
          height="100"
          alt="RemoteRecruit"
          className="h-auto w-[106px] max-w-none object-contain sm:w-[144px] lg:w-[151px]"
          decoding="async"
          fetchPriority="high"
        />
      </a>

      <nav
        className="flex items-center gap-3 text-[12px] font-semibold leading-[18px] tracking-[0.4px] text-white sm:gap-[34px] sm:text-[14px]"
        aria-label="Main navigation"
      >
        <a href="#signin" className="text-white hover:text-[#c8f0ff]">
          Sign In
        </a>
        <a
          href="#signup"
          className="grid h-9 min-w-[74px] place-items-center rounded-[15px] bg-[#54bde1] px-4 text-white shadow-[0_15px_30px_rgba(44,121,181,.16)] hover:-translate-y-0.5 hover:bg-[#63c8ea] sm:h-[41px] sm:min-w-[84px] sm:rounded-[16px] sm:px-[22px]"
        >
          Sign Up
        </a>
      </nav>
    </header>
  )
}
