import { Navbar, Footer } from "@/components/layout";
import {
  ProductHeroSection,
  ProductTrustSection,
  ProductProblemSection,
  ProductWinsSection,
  ProductFeaturesSection,
  ProductBannerSection,
} from "@/features/product";

export default function ProductPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0A0F14]">
        <ProductHeroSection />
        <ProductTrustSection />
        <ProductProblemSection />
        <ProductFeaturesSection />
        <ProductWinsSection />
        <ProductBannerSection />
        <Footer />
      </main>
    </>
  );
}
