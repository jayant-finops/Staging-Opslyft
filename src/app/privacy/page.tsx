import { Navbar, Footer } from "@/components/layout";
import { PrivacySection } from "@/features/privacy";
import { getPrivacyPolicy, getNavbar } from "@/lib/sanity";
import { privacyPolicyFallback, PrivacySectionType } from "@/features/privacy";

export const metadata = {
  title: "Privacy Policy – Opslyft",
  description:
    "OpsLyft respects the privacy of our users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.",
};

export default async function PrivacyPage() {
  // Fetch data from Sanity with fallback
  const [privacyData, navbarData] = await Promise.all([
    getPrivacyPolicy(),
    getNavbar(),
  ]);
  const content = privacyData || privacyPolicyFallback;

  return (
    <>
      <Navbar data={navbarData} />
      <main className="bg-white min-h-screen pt-18">
        <div className="max-w-[1152px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
          {/* Main Title */}
          <h1
            className="text-[#343434] text-3xl lg:text-[32px] font-bold leading-[40px] tracking-[0.01em] mb-4"
            style={{ fontFamily: '"Funnel Display", sans-serif' }}
          >
            {content.title}
          </h1>

          {/* Last Updated */}
          <p
            className="text-[#0E1821] text-lg leading-[23px] tracking-[0.01em] mb-12"
            style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
          >
            {content.lastUpdated}
          </p>

          {/* Sections */}
          {content.sections.map(
            (section: PrivacySectionType, index: number) => (
              <PrivacySection key={index} section={section} />
            )
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
