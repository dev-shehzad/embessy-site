import FAQForm from "@/app/Components/Faqs/FaqForm/FAQForm";
import UseTabs from "@/app/Components/Faqs/Tabs/UseTabs";
import PageBanner from "@/app/Components/Home/Hero/Hero";
import Head from "next/head";
import React from "react";
export async function generateMetadata() {
  return {
    title:
      "Embedsy FAQ - Installation, Pricing, and Microsoft Fabric Integration",
    description:
      "Find answers to common questions about Embedsy, including installation steps, pricing plans, Azure resources, and Microsoft Fabric integration. Explore our detailed FAQs to learn more.",
    keywords: [
      "Embedsy FAQ",
      "Embedsy installation guide",
      "Microsoft tenant",
      "Azure resources",
      "Power BI Embedded",
      "Microsoft Fabric",
      "Azure budget tracking",
      "Embedsy pricing plans",
      "Embedsy free trial",
    ],
    openGraph: {
      title: "Embedsy FAQ - Common Questions Answered",
      description:
        "Get answers to all your questions about Embedsy, including installation steps, pricing options, Azure integration, and more.",
    },
    url: "https://embedsy.io/faq",
    ogImage: "/fav.png",  // Replace with your image path
  };
}
const page = () => {
  return (
    <div className="pb-[80px]">
      <Head>
        <title>{generateMetadata.title}</title>
        <meta name="description" content={generateMetadata.description} />
        <meta name="keywords" content={generateMetadata.keywords} />

        {/* Open Graph tags */}
        <meta property="og:title" content={generateMetadata.title} />
        <meta property="og:description" content={generateMetadata.description} />
        <meta property="og:image" content={generateMetadata.ogImage} />
        <meta property="og:url" content={generateMetadata.url} />
        <meta property="og:type" content="website" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={generateMetadata.title} />
        <meta name="twitter:description" content={generateMetadata.description} />
        <meta name="twitter:image" content={generateMetadata.ogImage} />
      </Head>
      <PageBanner name={"FAQ"} />
      <UseTabs />
      <FAQForm />
    </div>
  );
};

export default page;
