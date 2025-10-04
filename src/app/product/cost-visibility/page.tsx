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

export default function CostVisibilityPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen ">
        <ProductHeroSection />
        <ProductTrustSection />
        <ProductProblemSection />
        <ProductFeaturesSection
          features={costVisibilityFeatures}
          sectionTitle="Complete Visibility Into Your Cloud Costs"
          sectionDescription="From AI-powered cost allocation to container-level insights, Opslyft gives you the transparency you need to understand where every dollar goes — across teams, projects, and environments."
        />
        <ProductWinsSection />
        <ProductBannerSection />
        <Footer />
      </main>
    </>
  );
}
