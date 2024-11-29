import TeamSection from "@/app/Components/About/MeetTheTeam/TeamSection";
import OurStory from "@/app/Components/About/OurStory/OurStory";
import PageBanner from "@/app/Components/Home/Hero/Hero";
import Head from "next/head";
import React from "react";
export const metadata = {
  title: "About Us - Embedsy | Power BI Embedded Analytics Platform",
  description:
    "Discover the story behind Embedsy, a Power BI Embedded solution built by data enthusiasts Pascal Kiefer and Vlad Mihanta. Learn about their journey, the team behind Embedsy, and their commitment to making data accessible through a secure and customizable analytics platform.",
  keywords:
    "Embedsy About Us, Power BI Embedded platform, Embedsy founders, Vlad Mihanta, Pascal Kiefer, Power BI analytics, Customizable Power BI solution, Data enthusiasts story, Power BI development team, Embedded analytics team, Power BI co-founders, Power BI Embedded solution, Data-driven business, Power BI projects",
    ogImage: "/fav.png", // Replace with your image path
    url: "https://embedsy.io/", // Replace with your website URL
};

const PAGE = () => {
  return (
    <div>
      <Head>
        <title>About Us - Embedsy | Power BI Embedded Analytics Platform</title>
        <meta
          name="description"
          content="Discover the story behind Embedsy, a Power BI Embedded solution built by data enthusiasts Pascal Kiefer and Vlad Mihanta. Learn about their journey, the team behind Embedsy, and their commitment to making data accessible through a secure and customizable analytics platform."
        />
        <meta
          name="keywords"
          content="Embedsy About Us, Power BI Embedded platform, Embedsy founders, Vlad Mihanta, Pascal Kiefer, Power BI analytics, Customizable Power BI solution, Data enthusiasts story, Power BI development team, Embedded analytics team, Power BI co-founders, Power BI Embedded solution, Data-driven business, Power BI projects"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/fav.png" />


         {/* Open Graph tags */}
         <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.ogImage} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content="website" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.ogImage} />
      </Head>
      <PageBanner name="About Us" />
      <OurStory />
      <TeamSection />
    </div>
  );
};

export default PAGE;
