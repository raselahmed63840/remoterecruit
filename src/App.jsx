import { lazy, Suspense } from 'react'
import Hero from './components/Hero.jsx'

const BelowFold = lazy(() => import('./components/BelowFold.jsx'))

export default function App() {
  return (
    <main className="mx-auto max-w-[1440px] overflow-hidden bg-white font-poppins text-rr-navy">
      <Hero />
      <Suspense fallback={<div className="min-h-[600px] bg-white" aria-hidden="true" />}>
        <BelowFold />
      </Suspense>
    </main>
  )
}
