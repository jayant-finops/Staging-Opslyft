import HeroSection from "@/components/HeroSection";
import HeroSection2 from "@/components/HeroSection2";
import TestimonialsSection from "@/components/TestimonialsSection";
import StruggleSection from "@/components/StruggleSection";
import SolutionsSection from "@/components/SolutionsSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  getHeroData,
  getTestimonials,
  getStruggleSection,
  getSolutionsSection,
  getFooterData,
} from "@/lib/sanity";

export default async function Home() {
  // Fetch data from Sanity CMS (with fallbacks)
  const [heroData, testimonials, struggleData, solutionsData, footerData] =
    await Promise.all([
      getHeroData().catch(() => null),
      getTestimonials().catch(() => []),
      getStruggleSection().catch(() => null),
      getSolutionsSection().catch(() => null),
      getFooterData().catch(() => null),
    ]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection2 data={heroData} />
        <TestimonialsSection data={testimonials} />
        <StruggleSection data={struggleData} />
        <SolutionsSection data={solutionsData} />
        <Footer data={footerData} />
      </main>
    </>
  );
}
