import { Navbar, Footer } from "@/components/layout";
import {
  ProductHeroSection,
  ProductTrustSection,
  ProductProblemSection,
  ProductWinsSection,
  ProductFeaturesSection,
  ProductBannerSection,
} from "@/features/product";
import { costControlFeatures } from "@/features/product/data";
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

export default async function ProductPage() {
  const category = "cost-control";

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
  const features = featuresData?.features || costControlFeatures;
  const badgeText = featuresData?.badgeText || "PRODUCT FEATURES";
  const sectionTitle =
    featuresData?.sectionTitle || "Features Built for Real-World Cost Control";
  const sectionDescription =
    featuresData?.sectionDescription ||
    "Managing cloud costs isn't just about spotting inefficiencies — it's about continuously improving performance, reliability, and spend efficiency across complex environments. That's where Opslyft's optimization engine comes in.";

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
