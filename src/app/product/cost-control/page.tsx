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

export default function CostControlPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen ">
        <ProductHeroSection />
        <ProductTrustSection />
        <ProductProblemSection />
        <ProductFeaturesSection
          features={costControlFeatures}
          sectionTitle="Proactive Cost Control That Works"
          sectionDescription="Stop reacting to cost spikes. With AI-powered anomaly detection, contextual optimization, and automated workflows, Opslyft helps you control costs before they spiral out of control."
        />
        <ProductWinsSection />
        <ProductBannerSection />
        <Footer />
      </main>
    </>
  );
}
