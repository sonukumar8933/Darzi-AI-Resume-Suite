'use client'

import HeroHeader from '../components/header'
import HeroSection from '../components/hero-section'
import FeaturesSection from '../components/feature-card'
import FooterSection from '@/components/footer'

export default function Home() {
  return (
    <div>
      <HeroHeader />
      <HeroSection />
      <FeaturesSection />
      <FooterSection />
    </div>
  )
}
