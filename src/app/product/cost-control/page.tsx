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
} from "@/lib/sanity";

export default async function CostControlPage() {
  // Fetch data from Sanity with fallbacks
  const heroData = await getProductHero();
  const trustData = await getProductTrust();
  const problemData = await getProductProblem();
  const winsData = await getProductWins();
  const bannerData = await getProductBanner();
  const featuresData = await getProductFeatures("cost-control");

  // Use Sanity data for features if available, otherwise use fallback
  const features = featuresData?.features || costControlFeatures;
  const sectionTitle =
    featuresData?.sectionTitle || "Proactive Cost Control That Works";
  const sectionDescription =
    featuresData?.sectionDescription ||
    "Stop reacting to cost spikes. With AI-powered anomaly detection, contextual optimization, and automated workflows, Opslyft helps you control costs before they spiral out of control.";

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
