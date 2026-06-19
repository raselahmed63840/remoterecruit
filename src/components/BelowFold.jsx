import FeatureBlock from './FeatureBlock.jsx'
import CtaSection from './CtaSection.jsx'
import FaqSection from './FaqSection.jsx'
import PricingFooter from './PricingFooter.jsx'
import ScrollTop from './ScrollTop.jsx'
import { features } from '../data/content.js'

export default function BelowFold() {
  return (
    <>
      {features.map((feature, index) => (
        <FeatureBlock key={feature.title} {...feature} index={index} />
      ))}
      <CtaSection />
      <FaqSection />
      <PricingFooter />
      <ScrollTop />
    </>
  )
}
