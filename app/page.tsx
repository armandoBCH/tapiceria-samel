import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/footer'
import HeroSection from '@/components/home/hero-section'
import FeaturedGallery from '@/components/home/featured-gallery'
import Testimonials from '@/components/home/testimonials'
import CtaSection from '@/components/home/cta-section'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedGallery />
        <Testimonials />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}