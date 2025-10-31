import { Navbar, Footer } from "@/components/layout";
import { CustomerStoriesHeroSection, CustomerStoriesListSection } from "@/features/customer-stories/components";
import { ProductBannerSection } from "@/features/product";
import {
  getCustomerStoriesHero,
  getCustomerStories,
  getProductBanner,
  getNavbar,
  getFooter,
} from "@/lib/sanity";
import {
  customerStoriesHeroFallback,
  type CustomerStories,
} from "@/features/customer-stories";

export default async function CustomerStoriesPage() {
  // Fetch data from Sanity with error handling
  const [heroData, storiesData, bannerData, navbarData, footerData] =
    await Promise.all([
      getCustomerStoriesHero().catch(() => null),
      getCustomerStories().catch(() => null),
      getProductBanner("customer-stories").catch(() => null),
      getNavbar().catch(() => null),
      getFooter().catch(() => null),
    ]);

  return (
    <>
      <Navbar data={navbarData} />
      <main className="min-h-screen">
        <CustomerStoriesHeroSection
          data={heroData as typeof customerStoriesHeroFallback | null}
        />
        <CustomerStoriesListSection
          stories={storiesData as CustomerStories[] | null}
        />
        <ProductBannerSection data={bannerData} />
        <Footer data={footerData} />
      </main>
    </>
  );
}
