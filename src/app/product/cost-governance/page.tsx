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
} from "@/lib/sanity";

export default async function CostGovernancePage() {
  // Fetch data from Sanity with fallbacks
  const heroData = await getProductHero();
  const trustData = await getProductTrust();
  const problemData = await getProductProblem();
  const winsData = await getProductWins();
  const bannerData = await getProductBanner();
  const featuresData = await getProductFeatures("cost-governance");

  // Use Sanity data for features if available, otherwise use fallback
  const features = featuresData?.features || costGovernanceFeatures;
  const sectionTitle =
    featuresData?.sectionTitle || "Governance and Planning for Cloud Maturity";
  const sectionDescription =
    featuresData?.sectionDescription ||
    "Build a foundation for long-term cost management with asset tracking, budget management, and unit economics that connect cloud spend to business value.";

  return (
    <>
      <Navbar />
      <main className="min-h-screen ">
        <ProductHeroSection data={heroData} />
        <ProductTrustSection data={trustData} />
        <ProductProblemSection data={problemData} />
        <ProductFeaturesSection
          features={features}
          sectionTitle={sectionTitle}
          sectionDescription={sectionDescription}
        />
        <ProductWinsSection data={winsData} />
        <ProductBannerSection data={bannerData} />
        <Footer />
      </main>
    </>
  );
}
