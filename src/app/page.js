import Banner from "./Components/Home/Banner/Banner";
import Samurai from "./Components/Home/SamuraiPortal/Samurai";
import HowItWork from "./Components/Home/HowItWork/HowItWork";
import OurFeature from "./Components/Home/OurFeature/OurFeature";
import Pricing from "./Components/Home/Pricing/Pricing";
import CustomDevelopment from "./Components/Home/CustomDevelopment/CustomDevelopment";
import NothingImposible from "./Components/Home/NothingImpossible/NothingImposible";
import GeneraInformesSection from "./Components/Home/GeneraInformesSection/GeneraInformesSection";
import BlogCards from "./Components/blogpage/BlogCards";
import ScrollToTop from "./Components/Common/Button/ScrollToTop";
import CircleImage from "./Components/Home/CircleImage/CircleImage";
import cardItem from "@/data/blogs";
import Head from "next/head";
export const metadata = {
  title: "Embedsy - Tailored Power BI Embedded Analytics for Your Business",
  description:
    "Empower your organization with Embedsy, a fully customizable Power BI Embedded portal for seamless analytics sharing. Benefit from secure, scalable data insights distribution to unlimited users—without needing Power BI PRO licenses. Start with a free trial or explore our interactive demo to transform your data experience.",
  keywords:
    "Power BI Embedded, Custom Analytics Portal, Embedded Data Solutions, Power BI for Enterprises, License-Free Power BI, Microsoft Fabric Analytics, White-Label Power BI, Row-Level Security, Cost-Effective Analytics, Data Visualization, Secure Analytics Distribution, Customizable BI Portal, Power BI Client Solutions, SaaS BI Solutions, Embedded Analytics Demo, Analytics for All Users",
    ogImage: "/fav.png", // Replace with your image path
    url: "https://embedsy.io/", // Replace with your website URL
};


const Page = () => {
  return (
    <div>
        {/* Open Graph and SEO metadata */}
        <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />

        {/* Open Graph tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/fav.png" />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content="website" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.ogImage} />
      </Head>
      <Banner />
      <GeneraInformesSection />
      <Samurai />
      <div className="relative">
        <HowItWork />
        {/* Circle image that moves on scroll */}
        <CircleImage />
      </div>
      <OurFeature />
      <Pricing />
      <CustomDevelopment />
      <NothingImposible />
      {/*<Testimonial />*/}
      <br />
      <br />
      <BlogCards cardItem={cardItem} />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default Page;
