'use client';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'; // Import the Image component from next/image

const features = [
  {
    id: 1,
    title: "Security",
    description: "User-based access secured with Microsoft Entra as well as full support for Row Level Security (RLS)",
    imgSrc: "/6.png",
    link: "#",
  },
  {
    id: 2,
    title: "Customization",
    description:
      "Customize many of the settings to match your needs. Need a new functionality? Let us know!",
    imgSrc: "/7.png",
    link: "#",
  },
  {
    id: 3,
    title: "Cost-effective",
    description:
      "Utilize existing Fabric Capacity and save on license fees for end-users.",
    imgSrc: "/8.png",
    link: "#",
  },
  {
    id: 4,
    title: "Responsive",
    description:
      "Built with Next.js to guarantee top performance on any device.",
    imgSrc: "/9.png",
    link: "#",
  },
  {
    id: 5,
    title: "UI/UX Branding",
    description:
      "Add your logos, change colors and take control of the look and feel of the portal.",
    imgSrc: "/10.png",
    link: "#",
  },
  {
    id: 6,
    title: "Customer Support",
    description:
      "User our extensive online documentation or reach out to our support team if you need help.",
    imgSrc: "/11.png",
    link: "#",
  },
];

const OurFeature = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <div>
      <section className="pt-36 pb-7">
        <div className="max-w-[1200px]   mx-auto px-[15px] relative">
          <div data-aos="fade-up" className="text-center mb-20">
            <h3 className="text-[16px] uppercase text-[#7052fb] font-bold tracking-[3px] Poppins mb-4 pixFadeUp delay-200">
              Our Features
            </h3>
            <h2 className="text-[36px] font-semibold text-[#2b2350] pixFadeUp delay-200">
              Why you should choose Embedsy
            </h2>
          </div>

          <div className="flex w-full max-md:w-full flex-wrap">
            {features.map((feature) => (
              <div key={feature.id} className="w-full md:w-1/2 lg:w-1/3 mb-8 pixFadeRight">
                <div className="bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.3)] p-9 rounded-lg text-center">
                  <div className="mb-6">
                    <Image
                      src={feature.imgSrc}
                      alt={feature.title}
                      width={100} // Provide width for the image
                      height={100} // Provide height for the image
                      className="mx-auto object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="Poppins">
                      <a
                        href={feature.link}
                        className="text-[20px] font-semibold mb-[10px] transition-all Poppins text-[#2b2350] hover:text-[#7052fb]"
                      >
                        {feature.title}
                      </a>
                    </h3>
                    <p className="text-[16px] text-[#79768]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurFeature;
