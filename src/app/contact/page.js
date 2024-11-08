import ContactForm from "@/app/Components/Contact/ContactForm/ContactFrom";
import PageBanner from "@/app/Components/Home/Hero/Hero";
import React from "react";
import MapComponent from "@/app/Components/GoogleMap/GoogleMap";
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
      url: "https://yourwebsite.com/contact",
    },
  };
}
const page = () => {
  return (
    <div>
      <PageBanner name={"Get in touch with us"} />
      <ContactForm />
      <MapComponent />
    </div>
  );
};

export default page;
