import { Navbar, Footer } from "@/components/layout";
import { LocalNavbar } from "@/components/layout/navbar.data";
import { ProductBannerSection } from "@/features";
import { CustomerStories, type CustomerStory } from "@/features/customer-stories/";
import { CustomerStoriesListSection, ShareStorySection, StoryContentSection } from "@/features/customer-stories/components"
import { ArticleCard } from "@/features/customer-stories/components/list-section";
import { getAllCustomerStoriesSlugs, getCustomerStories, getCustomerStory, getNavbar } from "@/lib/sanity";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getStoryData(slug:string){
    return (await getCustomerStory(slug)) as CustomerStory | null;
}

// Tell Next.js which pages to pre-render at build time
export async function generateStaticParams() {

  const slugs = await getAllCustomerStoriesSlugs()
    console.log(slugs)

  return slugs.map((slug: string) => ({
    slug, // this becomes params.slug
  }));
}

const StoryPageCtaBannerSectionData = {
  title: "Join the FinOps Leaders",
  ctaText: "Speak to Us",
  ctaUrl: "/pricing",
  decorativeImage: "/assets/images/win/circle.svg",
};


// Generate metadata for SEO
export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {

    const {slug} = await props.params;
    const storyData = (await getStoryData(slug)) as CustomerStory | null;

   return {
    title: storyData?.metaTitle || "Customer Story",
    description: storyData?.metaDescription || "",
    openGraph: {
      title: storyData?.title || "Opslyft's Customer Story",
      description: storyData?.metaDescription || "Opslyft's Customer Story",
      url: `https://opslyft.com/customer-stories/${storyData?.slug}`,
      type: "article",
      images: [
        {
          url: storyData?.featuredImageUrl,
          width: 1200,
          height: 630,
          alt: "Opslyft's Customer Story",
        },
      ],
    },
  };
}

export default async function StoryPage( props: {params: Promise<{ slug: string }>}){

    const { slug } = await props.params;
    const storyData = (await getStoryData(slug)) as CustomerStory | null;
    const navbarData = await getNavbar();
    const storiesData = (await getCustomerStories()) as CustomerStories[] | null

    if (!storyData) return notFound();

    return (
        <>
            <Navbar data={navbarData} mode="light"/>

            <section className="bg-[#F7FFF9] sm:pt-[200px] pt-[150px] sm:pb-[100px] pb-[60px] px-4 sm:px-0">
                <div className="container-1170 flex sm:flex-row flex-col  w-full items-start justify-between">
                    <div className="flex flex-col gap-6 sm:w-[55%] w-full mb-6 sm:mb-0">
                        {storyData?.logo && (
                            <Image src={storyData.logo} alt="logo" width={100} height={100} />
                        )}
                        <h1 className="sm:text-[56px] text-[32px] font-semibold leading-[120%] tracking-[-1px] text-[#0E1821]"
                        style={{
                        fontFamily: 'var(--font-funnel-display), "Funnel Display", sans-serif',
                        }}
                        >
                            {storyData.title}
                        </h1>
                        <p className="text-[16px] font-normal leading-[120%] text-[#343434]">
                            { storyData.excerpt }
                        </p>
                        <div className="flex flex-row gap-4">
                            {
                                storyData.industry &&
                                <div>
                                    <p className="text-[#343434] font-semibold text-base pb-2.5">INDUSTRY</p>
                                    <p className="text-[#7C7C7C] max-w-[130px] text-sm">{ storyData.industry }</p>
                                </div>
                            }
                            {
                                storyData.usecase &&
                                <div>
                                    <p className="text-[#343434] font-semibold text-base pb-2.5">USECASE</p>
                                    <p className="text-[#7C7C7C] max-w-[256px] text-sm">{ storyData.usecase }</p>
                                </div>
                            }
                             
                        </div>
                    </div>
                    <div className="sm:w-[36%] w-full">
                        {
                            storyData.featuredImageUrl &&
                            <Image src={storyData.featuredImageUrl} alt="feature image" width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                            />
                        }
                        <ShareStorySection />
                    </div>
                </div>
            </section>

            <StoryContentSection storyData={storyData} />

            <section className="bg-[#05160D] py-[60px] px-4 sm:px-0">
                <div className="container-1170 ">
                    <h2 className="text-[#F1F1F1] sm:text-[40px] text-[32px] font-semibold leading-[140%] pb-[50px] text-center"
                        style={{
                            fontFamily: 'var(--font-funnel-display), "Funnel Display", sans-serif',
                        }}
                    >
                        More Customer Stories from Opslyft
                    </h2>

                     <div className="flex flex-col lg:grid lg:grid-cols-3 gap-12 lg:gap-8">
                        {storiesData?.slice(0, 3).map((post) => (
                            <ArticleCard key={post.slug} post={post} type="storyPage" />
                        ))}
                    </div>
{/* 
                    <CustomerStoriesListSection
                      stories={storiesData as CustomerStories[] | null}
                    /> */}
                </div>
            </section>
            
            <ProductBannerSection data={StoryPageCtaBannerSectionData}/>

            <Footer/>
        </>
    )
}