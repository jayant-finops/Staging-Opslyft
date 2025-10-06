import { Navbar, Footer } from "@/components/layout";
import {
  ProductHeroSection,
  ProductTrustSection,
  ProductProblemSection,
  ProductWinsSection,
  ProductFeaturesSection,
  ProductBannerSection,
} from "@/features/product";
import { costGovernanceFeatures } from "@/features/product/data";
import {
  getProductHero,
  getProductTrust,
  getProductProblem,
  getProductWins,
  getProductBanner,
  getProductFeatures,
  getNavbar,
  getFooter,
} from "@/lib/sanity";

export default async function CostGovernancePage() {
  const category = "cost-governance";

  // Fetch data from Sanity with fallbacks
  const [
    heroData,
    trustData,
    problemData,
    winsData,
    bannerData,
    featuresData,
    navbarData,
    footerData,
  ] = await Promise.all([
    getProductHero(category),
    getProductTrust(category),
    getProductProblem(category),
    getProductWins(category),
    getProductBanner(category),
    getProductFeatures(category),
    getNavbar(),
    getFooter(),
  ]);

  // Use Sanity data for features if available, otherwise use fallback
  const features = featuresData?.features || costGovernanceFeatures;
  const badgeText = featuresData?.badgeText || "PRODUCT FEATURES";
  const sectionTitle =
    featuresData?.sectionTitle || "Governance and Planning for Cloud Maturity";
  const sectionDescription =
    featuresData?.sectionDescription ||
    "Build a foundation for long-term cost management with asset tracking, budget management, and unit economics that connect cloud spend to business value.";

  return (
    <>
      <Navbar data={navbarData} />
      <main className="min-h-screen ">
        <ProductHeroSection data={heroData} />
        <ProductTrustSection data={trustData} />
        <ProductProblemSection data={problemData} />
        <ProductFeaturesSection
          features={features}
          badgeText={badgeText}
          sectionTitle={sectionTitle}
          sectionDescription={sectionDescription}
        />
        <ProductWinsSection data={winsData} />
        <ProductBannerSection data={bannerData} />
        <Footer data={footerData} />
      </main>
    </>
  );
}
