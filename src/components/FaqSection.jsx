import Reveal from './Reveal.jsx'
import { faqs } from '../data/content.js'

export default function FaqSection() {
  return (
    <section className="flex min-h-[772px] items-start bg-white [content-visibility:auto] [contain-intrinsic-size:772px]" aria-labelledby="faq-title">
      <div className="mx-auto w-[min(calc(100%-48px),1040px)] pt-[126px] max-md:pt-20 max-md:pb-20">
        <Reveal>
          <h2 id="faq-title" className="mb-[71px] select-text text-[52px] font-medium leading-[1.05] tracking-[-0.035em] text-rr-navy max-md:mb-12 max-md:text-[38px]">
            Common Questions
          </h2>
        </Reveal>

        <div className="grid gap-[45px] max-md:gap-8">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 80}>
              <h3 className="mb-[14px] select-text text-[19px] font-medium leading-[35px] text-rr-navy max-md:text-[17px]">
                {faq.question}
              </h3>
              <p className="max-w-[890px] select-text text-[19px] font-normal leading-[35px] text-rr-muted max-md:text-[16px] max-md:leading-8">
                {faq.answer}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={240}>
          <a href="#more" className="mt-[73px] inline-flex h-[68px] min-w-[184px] items-center justify-center rounded-[15px] border-2 border-[#58bfe3] bg-white px-7 text-[16px] font-extrabold text-[#173d86] hover:-translate-y-1 hover:border-[#2f72b9] hover:bg-[#2f72b9] hover:text-white hover:shadow-[0_18px_38px_rgba(47,114,185,.2)] max-md:mt-12 max-md:w-full">
            More Questions
          </a>
        </Reveal>
      </div>
    </section>
  )
}
