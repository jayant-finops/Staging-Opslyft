import { getAboutHero, getAboutMission } from "@/lib/sanity";
import { aboutHeroFallback, aboutMissionFallback } from "@/features/about";
import { AboutHeroSection, AboutMissionSection } from "@/features/about";
import { Navbar, Footer } from "@/components/layout";

export const metadata = {
  title: "About Us – Opslyft",
  description:
    "Shaping the Future of Cloud Efficiency. Join our growing team at OpsLyft and empower people to optimize their current cloud use.",
};

export default async function AboutPage() {
  // Fetch data from Sanity with fallbacks
  const [aboutHeroData, aboutMissionData] = await Promise.all([
    getAboutHero().catch(() => null),
    getAboutMission().catch(() => null),
  ]);

  return (
    <>
      <Navbar />
      <main>
        <AboutHeroSection
          data={aboutHeroData}
          fallbackData={aboutHeroFallback}
        />
        <AboutMissionSection
          data={aboutMissionData}
          fallbackData={aboutMissionFallback}
        />
      </main>
      <Footer />
    </>
  );
}
