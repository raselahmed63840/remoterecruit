import Reveal from './Reveal.jsx'

export default function FeatureBlock({ eyebrow, title, body, image, alt, reverse = false, index = 0 }) {
  return (
    <section className={`relative flex min-h-[672px] items-center bg-white [content-visibility:auto] [contain-intrinsic-size:672px] ${index === 1 ? 'min-h-[690px]' : ''} ${index === 2 ? 'min-h-[710px]' : ''} max-md:min-h-0 max-md:py-16`}>
      <div className="mx-auto grid w-[min(calc(100%-48px),1040px)] grid-cols-2 items-center gap-[70px] max-md:grid-cols-1 max-md:gap-8">
        <Reveal className={`${reverse ? 'order-2 max-md:order-1' : ''} max-w-[510px]`} delay={80}>
          <span className="mb-[42px] inline-flex h-9 min-w-[128px] items-center justify-center rounded-full bg-[#c6efff] px-6 text-[13px] font-bold leading-none text-[#2b435d] max-md:mb-7">
            {eyebrow}
          </span>
          <h2 className="mb-[35px] select-text text-[43px] font-medium leading-[1.24] tracking-[-0.03em] text-rr-navy max-lg:text-[36px] max-md:mb-5 max-md:text-[31px]">
            {title}
          </h2>
          <p className="max-w-[514px] select-text text-[19px] font-normal leading-[1.72] text-rr-muted max-lg:text-[17px] max-md:text-[15px]">
            {body}
          </p>
        </Reveal>

        <Reveal className={`relative flex justify-center ${reverse ? 'order-1 max-md:order-2' : ''}`} delay={160}>
          <span className="absolute left-[6px] top-[46px] h-6 w-6 rounded-full bg-gradient-to-br from-[#53bde2] to-[#214690] shadow-[0_6px_16px_rgba(28,77,145,.22)] max-md:left-[14%]" aria-hidden="true" />
          <img
            src={image}
            alt={alt}
            width="555"
            height="651"
            loading="lazy"
            decoding="async"
            className="h-auto w-[555px] max-w-full drop-shadow-[0_14px_24px_rgba(46,86,155,.05)]"
          />
        </Reveal>
      </div>
    </section>
  )
}
