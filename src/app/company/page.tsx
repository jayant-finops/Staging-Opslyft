import {
  getCompanyTimeline,
  getAboutHero,
  getAboutMission,
  getTeam,
  getJoin,
  getNavbar,
  getFooter,
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
  const [
    heroData,
    missionData,
    timelineData,
    teamData,
    joinData,
    navbarData,
    footerData,
  ] = await Promise.all([
    getAboutHero().catch(() => null),
    getAboutMission().catch(() => null),
    getCompanyTimeline().catch(() => null),
    getTeam().catch(() => null),
    getJoin().catch(() => null),
    getNavbar().catch(() => null),
    getFooter().catch(() => null),
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
        <JoinSection data={joinData} />
      </main>
      <Footer data={footerData} />
    </>
  );
}
