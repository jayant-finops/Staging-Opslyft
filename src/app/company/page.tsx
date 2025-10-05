import {
  getCompanyTimeline,
  getAboutHero,
  getAboutMission,
  getTeam,
  getNavbar,
} from "@/lib/sanity";
import { aboutHeroFallback, aboutMissionFallback } from "@/features/about";
import { Navbar, Footer } from "@/components/layout";
import { TimelineSection } from "@/features/company";
import {
  AboutHeroSection,
  AboutMissionSection,
  TeamSection,
  JoinSection,
} from "@/features/about";

export const metadata = {
  title: "Company – Opslyft",
};

export default async function CompanyPage() {
  const [heroData, missionData, timelineData, teamData, navbarData] =
    await Promise.all([
      getAboutHero().catch(() => null),
      getAboutMission().catch(() => null),
      getCompanyTimeline().catch(() => null),
      getTeam().catch(() => null),
      getNavbar().catch(() => null),
    ]);

  return (
    <>
      <Navbar data={navbarData} />
      <main>
        <AboutHeroSection data={heroData} fallbackData={aboutHeroFallback} />
        <AboutMissionSection
          data={missionData}
          fallbackData={aboutMissionFallback}
        />
        <TimelineSection data={timelineData} />
        <TeamSection data={teamData} />
        <JoinSection />
      </main>
      <Footer />
    </>
  );
}
