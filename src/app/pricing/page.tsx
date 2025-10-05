import { PricingContent } from "@/features/pricing";
import { getPricing } from "@/lib/sanity";
import { convertSanityPricing, type SanityPricing } from "@/features/pricing";

export default async function PricingPage() {
  // Fetch pricing data from Sanity
  const sanityData = (await getPricing()) as SanityPricing | null;
  const pricingData = convertSanityPricing(sanityData);

  return (
    <>
      <PricingContent data={pricingData} />
    </>
  );
}
