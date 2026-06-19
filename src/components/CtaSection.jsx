import { ArrowRight } from './Icons.jsx'
import Reveal from './Reveal.jsx'

export default function CtaSection() {
  return (
    <section
      id="signin"
      className="relative overflow-hidden bg-[#f0f4ff] md:h-[626px] md:[content-visibility:auto] md:[contain-intrinsic-size:626px]"
      aria-labelledby="cta-title"
    >
      <img
        src="/assets/cta-left.webp"
        width="1440"
        height="610"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="hidden md:absolute md:inset-0 md:block md:h-full md:w-full md:object-fill"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-5 py-14 sm:px-8 md:block md:h-full md:p-0">
        <Reveal
          className="mx-auto w-full max-w-[430px] md:absolute md:left-[52%] md:top-[160px] md:mx-0 md:w-[390px] lg:left-[calc(50%+74px)] lg:top-[198px] lg:w-[430px]"
          delay={80}
        >
          <span className="mb-4 block select-text text-[15px] font-bold leading-6 tracking-[0.2px] text-[#173d86] sm:text-[17px] lg:mb-5 lg:text-[19px]">
            Are you ready?
          </span>
          <h2
            id="cta-title"
            className="mb-5 select-text text-[30px] font-semibold leading-[38px] tracking-normal text-rr-navy sm:text-[34px] sm:leading-[44px] md:text-[38px] md:leading-[48px] lg:mb-6 lg:text-[44px] lg:leading-[57px]"
          >
            Help is only a few<br />clicks away!
          </h2>
          <p className="mb-7 select-text text-[15px] font-normal leading-7 text-[#81808f] sm:text-[16px] md:text-[18px] md:leading-[30px] lg:mb-9 lg:text-[20px] lg:leading-[34px]">
            Click Below to get set up super<br />quickly and find help now!
          </p>
          <a
            href="#pricing"
            className="inline-flex h-[58px] w-[172px] items-center gap-3 rounded-full bg-[#c8e8ff] py-0 pl-2 pr-5 text-[16px] font-semibold leading-none text-[#17478d] hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(48,111,177,.18)] md:h-[62px] md:w-[180px] md:gap-[15px] md:pl-3 md:pr-6 md:text-[17px]"
          >
            <span className="grid h-[46px] w-[46px] shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#55c3e5] to-[#2e6ead] text-white md:h-[50px] md:w-[50px]">
              <ArrowRight />
            </span>
            Get Started
          </a>
        </Reveal>

        <Reveal className="relative mx-auto w-full max-w-[690px] overflow-hidden rounded-[24px] bg-white/35 shadow-[0_18px_40px_rgba(36,74,147,.08)] md:hidden" delay={120}>
          <img
            src="/assets/cta-left.webp"
            width="1440"
            height="610"
            alt="RemoteRecruit dashboard preview"
            loading="lazy"
            decoding="async"
            className="h-auto w-full object-contain"
          />
        </Reveal>
      </div>
    </section>
  )
}
