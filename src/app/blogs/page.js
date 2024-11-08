import React from "react";
import Image from "next/image";

import BlogCards from "../Components/blogpage/BlogCards";
import PageBanner from "../Components/Home/Hero/Hero";
import cardItem from "@/data/blogs";

export const metadata = (cardItem) => {
  if (cardItem && cardItem.length > 0) {
    return {
      title:
        cardItem[0].metaTitle || "Embedsy Blog - Power BI Insights and Guides",
      description:
        cardItem[0].metaDescription ||
        "Explore the latest insights and updates from Embedsy on Power BI Embedded, Microsoft Fabric, and more.",
      keywords:
        cardItem[0].keywords ||
        "Power BI, Microsoft Fabric, Embedded Analytics, Data Governance, Embedsy Blog",
    };
  }
  return {
    title: "Embedsy Blog - Power BI Insights and Guides",
    description:
      "Explore the latest insights and updates from Embedsy on Power BI Embedded, Microsoft Fabric, and more.",
    keywords:
      "Power BI, Microsoft Fabric, Embedded Analytics, Data Governance, Embedsy Blog",
  };
};
const Page = () => {
  return (
    <div>
      <PageBanner name="Embedsy Blog" />
      <BlogCards cardItem={cardItem} />
    </div>
  );
};

export default Page;
