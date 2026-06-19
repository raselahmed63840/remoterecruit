import Reveal from './Reveal.jsx'
import { plans } from '../data/content.js'
import { CheckIcon, DiamondIcon } from './Icons.jsx'

function PlanCard({ plan, index }) {
  return (
    <Reveal className="min-h-[343px] rounded-[29px] bg-white p-[32px] shadow-rrCard max-md:p-6" delay={index * 100}>
      <div className="grid grid-cols-[160px_1fr] items-start gap-[33px] max-sm:grid-cols-1">
        <div className="relative grid min-h-[180px] place-items-center content-center rounded-2xl bg-rr-soft text-center max-sm:mx-auto max-sm:w-[180px]">
          {plan.featured ? (
            <>
              <span className="absolute -top-[22px] left-[11px] flex h-12 min-w-[157px] items-center gap-[13px] rounded-full bg-[#c5efff] py-0 pl-[15px] pr-[21px] text-[19px] font-extrabold text-rr-navy shadow-[0_12px_18px_rgba(36,74,147,.2)] max-sm:left-1/2 max-sm:-translate-x-1/2">
                <DiamondIcon />
                Premium
              </span>
              <strong className="mt-1 block select-text text-[39px] font-bold leading-[1.1] text-[#3987c4]">{plan.price}</strong>
              <small className="block select-text text-[20px] font-medium leading-[1.45] text-[#8f94a8]">{plan.subtitle}</small>
            </>
          ) : (
            <>
              <strong className="block select-text text-[40px] font-bold leading-[1.2] text-rr-sky">{plan.name}</strong>
              <small className="block select-text text-[20px] font-medium leading-[1.45] text-[#8f94a8]">{plan.subtitle}</small>
            </>
          )}
        </div>

        <ul className="mt-2 grid list-none gap-[23px] p-0">
          {plan.items.map((item) => (
            <li key={item.text} className="flex items-start gap-[14px] text-[17px] font-medium leading-[1.45] text-[#24263d] max-md:text-[16px]">
              <CheckIcon ok={item.ok} />
              <span className="select-text">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <a href="#signup" className={`mt-7 flex h-[72px] items-center justify-center rounded-[20px] text-[18px] font-extrabold hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(36,74,147,.24)] ${plan.featured ? 'border-2 border-transparent bg-gradient-to-br from-[#3479b3] to-[#24458d] text-white' : 'border-2 border-[#2e91d4] bg-white text-[#173d86]'}`}>
        Get Started
      </a>
    </Reveal>
  )
}

export default function PricingFooter() {
  return (
    <section id="pricing" className="relative min-h-[895px] overflow-hidden bg-white [content-visibility:auto] [contain-intrinsic-size:895px] pt-[78px] max-lg:min-h-[760px] max-md:min-h-0" aria-labelledby="pricing-title">
      <span id="signup" className="absolute left-0 top-0 h-px w-px" aria-hidden="true" />

      <h2 id="pricing-title" className="relative z-20 mb-[60px] select-text text-center text-[40px] font-semibold leading-[52px] tracking-normal text-rr-navy max-md:mb-10 max-md:text-[32px]">
        Help Is One Click Away
      </h2>

      <div className="relative z-30 mx-auto grid w-[min(calc(100%-34px),1040px)] grid-cols-2 gap-10 max-lg:gap-6 max-md:max-w-[560px] max-md:grid-cols-1">
        {plans.map((plan, index) => (
          <PlanCard key={plan.name} plan={plan} index={index} />
        ))}
      </div>

      <footer className="absolute inset-x-0 bottom-0 top-[318px] z-10 overflow-hidden bg-transparent max-md:relative max-md:top-auto max-md:mt-[-130px] max-md:min-h-[430px] max-md:pt-[190px]" aria-label="Footer">
        <img
          src="/assets/footer-bg.webp"
          width="1280"
          height="505"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 z-0 h-full w-full object-fill"
        />
        <div className="relative z-20 mx-auto flex w-[min(calc(100%-48px),1040px)] items-start justify-between pt-[312px] max-md:flex-col max-md:items-center max-md:gap-10 max-md:pt-[170px]">
          <img src="/assets/remote-recruit-logo.webp" width="247" height="100" alt="RemoteRecruit" loading="lazy" decoding="async" className="h-auto w-[184px] max-md:w-[160px]" />

          <nav className="mt-2 flex items-center gap-[13px]" aria-label="Social links">
            {['f', '◎', '𝕏', '♥', 'in', '♟'].map((item) => (
              <a key={item} href="#social" aria-label={`Social link ${item}`} className="grid h-[31px] w-[31px] place-items-center rounded-full bg-white/15 text-[14px] font-bold text-white hover:-translate-y-1 hover:bg-white/25">
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-20 grid h-[74px] place-items-center border-t border-white/15">
          <img src="/assets/rr-sign.svg" width="39" height="31" alt="RemoteRecruit mark" loading="lazy" decoding="async" className="w-[39px]" />
        </div>
      </footer>
    </section>
  )
}
