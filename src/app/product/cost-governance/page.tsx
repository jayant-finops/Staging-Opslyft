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

export default function CostGovernancePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen ">
        <ProductHeroSection />
        <ProductTrustSection />
        <ProductProblemSection />
        <ProductFeaturesSection
          features={costGovernanceFeatures}
          sectionTitle="Governance and Planning for Cloud Maturity"
          sectionDescription="Build a foundation for long-term cost management with asset tracking, budget management, and unit economics that connect cloud spend to business value."
        />
        <ProductWinsSection />
        <ProductBannerSection />
        <Footer />
      </main>
    </>
  );
}
