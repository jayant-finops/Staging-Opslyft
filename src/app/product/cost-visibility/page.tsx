import { Navbar, Footer } from "@/components/layout";
import {
  ProductHeroSection,
  ProductTrustSection,
  ProductProblemSection,
  ProductWinsSection,
  ProductFeaturesSection,
  ProductBannerSection,
} from "@/features/product";
import { costVisibilityFeatures } from "@/features/product/data";
import {
  getProductHero,
  getProductTrust,
  getProductProblem,
  getProductWins,
  getProductBanner,
  getProductFeatures,
  getNavbar,
} from "@/lib/sanity";

export default async function CostVisibilityPage() {
  const category = "cost-visibility";

  // Fetch data from Sanity with fallbacks
  const [
    heroData,
    trustData,
    problemData,
    winsData,
    bannerData,
    featuresData,
    navbarData,
  ] = await Promise.all([
    getProductHero(category),
    getProductTrust(category),
    getProductProblem(category),
    getProductWins(category),
    getProductBanner(category),
    getProductFeatures(category),
    getNavbar(),
  ]);

  // Use Sanity data for features if available, otherwise use fallback
  const features = featuresData?.features || costVisibilityFeatures;
  const badgeText = featuresData?.badgeText || "PRODUCT FEATURES";
  const sectionTitle =
    featuresData?.sectionTitle || "Complete Visibility Into Your Cloud Costs";
  const sectionDescription =
    featuresData?.sectionDescription ||
    "From AI-powered cost allocation to container-level insights, Opslyft gives you the transparency you need to understand where every dollar goes — across teams, projects, and environments.";

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
        <Footer />
      </main>
    </>
  );
}
