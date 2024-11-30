import ContactForm from "@/app/Components/Contact/ContactForm/ContactFrom";
import PageBanner from "@/app/Components/Home/Hero/Hero";
import React from "react";
import MapComponent from "@/app/Components/GoogleMap/GoogleMap";
import Head from "next/head";
export async function generateMetadata() {
  return {
    title: "Contact Us - Embedsy | Olten, Switzerland",
    description:
      "Contact Embedsy for inquiries. Visit our office at Frohburgstrasse 10, 4600 Olten, Switzerland or reach us by phone at +41 62 511 50 84. Use the contact form to send us a message.",
    keywords: [
      "Contact Embedsy",
      "Embedsy Olten Switzerland",
      "Frohburgstrasse 10 Olten",
      "Embedsy customer support",
      "Embedsy contact form",
      "Embedsy phone number",
      "+41 62 511 50 84",
      "Embedsy office location",
    ],
    openGraph: {
      title: "Contact Embedsy | Olten, Switzerland",
      description:
        "Reach out to Embedsy for any questions or support. Visit our office in Olten or send us a message through our contact form.",
      images: [
        {
          url: "/images/contact-banner.png", // example image path
          width: 1200,
          height: 630,
          alt: "Embedsy Contact Banner",
        },
      ],
      url: "https://embedsy.io/contact",
      type: "website",
      ogImage: "/fav.png",
    },
  };
}
const page = () => {
  return (
    <div>

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
        <meta name="twitter:card" content={generateMetadata.ogImage} />
        <meta name="twitter:title" content={generateMetadata.title} />
        <meta name="twitter:description" content={generateMetadata.description} />
        <meta name="twitter:image" content={generateMetadata.ogImage} />
      </Head>
      <PageBanner name={"Get in touch with us"} />
      <ContactForm />
      <MapComponent />
    </div>
  );
};

export default page;
