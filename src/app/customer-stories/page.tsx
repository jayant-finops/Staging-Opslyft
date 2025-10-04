import { Navbar, Footer } from "@/components/layout";
import {
  CustomerStoriesHeroSection,
  CustomerStoriesListSection,
  ProductBannerSection,
} from "@/features";

export default function CustomerStoriesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <CustomerStoriesHeroSection />
        <CustomerStoriesListSection />
        <ProductBannerSection />
        <Footer />
      </main>
    </>
  );
}
