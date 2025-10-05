import { Navbar, Footer } from "@/components/layout";
import {
  CustomerStoriesHeroSection,
  CustomerStoriesListSection,
  ProductBannerSection,
} from "@/features";
import {
  getCustomerStoriesHero,
  getCustomerStories,
  getProductBanner,
} from "@/lib/sanity";
import {
  customerStoriesHeroFallback,
  type CustomerStory,
} from "@/features/customer-stories";

export default async function CustomerStoriesPage() {
  // Fetch data from Sanity
  const [heroData, storiesData, bannerData] = await Promise.all([
    getCustomerStoriesHero(),
    getCustomerStories(),
    getProductBanner(),
  ]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <CustomerStoriesHeroSection
          data={heroData as typeof customerStoriesHeroFallback | null}
        />
        <CustomerStoriesListSection
          stories={storiesData as CustomerStory[] | null}
        />
        <ProductBannerSection data={bannerData} />
        <Footer />
      </main>
    </>
  );
}
