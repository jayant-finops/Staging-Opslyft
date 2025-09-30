import { Navbar, Footer } from "@/components/layout";
import { ProductHeroSection, ProductTrustSection, ProductProblemSection, ProductWinsSection } from "@/features/product";

export default function ProductPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0A0F14]">
        <ProductHeroSection />
        <ProductTrustSection />
        <ProductProblemSection />
        <ProductWinsSection />
        <Footer />
      </main>
    </>
  );
}


