import HeroSection from '@/components/HeroSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import StruggleSection from '@/components/StruggleSection'
import SolutionsSection from '@/components/SolutionsSection'
import { getHeroData, getTestimonials, getStruggleSection, getSolutionsSection } from '@/lib/sanity'

export default async function Home() {
  // Fetch data from Sanity CMS (with fallbacks)
  const [heroData, testimonials, struggleData, solutionsData] = await Promise.all([
    getHeroData().catch(() => null),
    getTestimonials().catch(() => []),
    getStruggleSection().catch(() => null),
    getSolutionsSection().catch(() => null),
  ])

  return (
    <main className="min-h-screen">
      <HeroSection data={heroData} />
      <TestimonialsSection data={testimonials} />
      <StruggleSection data={struggleData} />
      <SolutionsSection data={solutionsData} />
    </main>
  );
}
