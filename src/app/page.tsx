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
  getNavbar,
  getFooter,
} from "@/lib/sanity";

export default async function Home() {
  // Fetch data from Sanity CMS (with fallbacks)
  const [
    heroData,
    testimonialsSection,
    struggleData,
    solutionsData,
    navbarData,
    footerData,
  ] = await Promise.all([
    getHeroData().catch(() => null),
    getTestimonialsSection().catch(() => null),
    getStruggleSection().catch(() => null),
    getSolutionsSection().catch(() => null),
    getNavbar().catch(() => null),
    getFooter().catch(() => null),
  ]);

  return (
    <>
      <Navbar data={navbarData} />
      <main className="min-h-screen bg-[#f2f2f2]">
        <HeroSection data={heroData} />
        <TestimonialsSection data={testimonialsSection} />
        <StruggleSection data={struggleData} />
        <SolutionsSection data={solutionsData} />
        <Footer data={footerData} />
      </main>
    </>
  );
}
