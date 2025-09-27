import {
  HeroSection,
  TestimonialsSection,
  StruggleSection,
  SolutionsSection,
} from "@/features/home";
import { Footer, Navbar } from "@/components/layout";
import {
  getHeroData,
  getTestimonialsSection,
  getStruggleSection,
  getSolutionsSection,
} from "@/lib/sanity";

export default async function Home() {
  // Fetch data from Sanity CMS (with fallbacks)
  const [heroData, testimonialsSection, struggleData, solutionsData] =
    await Promise.all([
      getHeroData().catch(() => null),
      getTestimonialsSection().catch(() => null),
      getStruggleSection().catch(() => null),
      getSolutionsSection().catch(() => null),
    ]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection data={heroData} />
        <TestimonialsSection data={testimonialsSection} />
        <StruggleSection data={struggleData} />
        <SolutionsSection data={solutionsData} />
        <Footer />
      </main>
    </>
  );
}
