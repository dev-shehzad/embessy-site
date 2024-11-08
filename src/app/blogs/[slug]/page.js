import React from "react";
import Image from "next/image"; // Use Image from Next.js for better optimization
import cardItem from "@/data/blogs";
import Link from "next/link";
import PageBanner from "@/app/Components/Home/Hero/Hero";

// `generateMetadata` for dynamic SEO based on the blog post
export async function generateMetadata({ params }) {
  const { slug } = params;
  console.log("slug", slug);

  // Find the matching blog post by slug
  const blogPost = cardItem.find((item) => item.slug === slug);

  if (blogPost) {
    return {
      title: blogPost.metaTitle,
      description: blogPost.metaDescription,
      keywords: blogPost.keywords,
    };
  } else {
    return {
      title: "Blog Post - Embedsy",
      description: "Read the latest blog post on Embedsy.",
      keywords:
        "Power BI, Embedded Analytics, Microsoft Fabric, Power BI Embedded",
    };
  }
}
const Page = ({ params }) => {
  const { slug } = params;

  // Find the matching blog post by slug
  const blogPost = cardItem.find((item) => item.slug === slug);

  if (!blogPost) {
    return <div>Post not found</div>; // Return if no matching blog post is found
  }

  return (
    <div>
      {blogPost && (
        <PageBanner
          blogPost={{
            date: blogPost.date, // Pass date
            text: blogPost.text, // Pass text
            by: blogPost.by,
            profileName: blogPost.profileName, // Pass profileName
          }}
        />
      )}

      {/* Image section */}
      <div className="w-full ">
        <div className="w-full max-w-[1200px] px-[80px] max-tab:px-[40px] max-md:px-[28px]  mx-auto   pt-[120px]">
          <div className="w-full h-auto rounded-lg">
            <Image
              src={blogPost.img || "/default-blog-img.png"}
              alt={blogPost.text}
              width={670}
              height={500}
              className="sm:w-[500px] w-full h-auto rounded-lg object-center object-cover"
            />
          </div>
          <div className="w-full py-[50px]">
            {blogPost.title && (
              <h1 className="text-[28px] md:text-[32px] lg:text-[40px] font-[600] text-[#0f4761] Poppins z-[1000]">
                {blogPost.title}
              </h1>
            )}

            {blogPost.description && (
              <p
                className="font-Poppins text-[20px] font-[400] text-[#656177]"
                dangerouslySetInnerHTML={{ __html: blogPost.description }}
              />
            )}

            {blogPost.heading && (
              <h2
                className="font-Poppins  mt-7 text-[30px] font-[700]  max-w-[800px] text-[#0f4761]"
                dangerouslySetInnerHTML={{ __html: blogPost.heading }}
              />
            )}

            {blogPost.overview && (
              <p
                className="font-Poppins text-[20px] font-[400] text-[#656177]"
                dangerouslySetInnerHTML={{ __html: blogPost.overview }}
              />
            )}

            {blogPost.payasyou && (
              <h2
                className="font-Poppins mt-7 text-[30px] font-[700]  max-w-[800px] text-[#0f4761]"
                dangerouslySetInnerHTML={{ __html: blogPost.payasyou }}
              />
            )}

            {blogPost.paypara && (
              <p
                className="font-Poppins text-[20px] font-[400] text-[#656177]"
                dangerouslySetInnerHTML={{ __html: blogPost.paypara }}
              />
            )}

            {blogPost.powerbih && (
              <h2
                className="font-Poppins  mt-7 text-[23px] italic font-[700]  max-w-[800px] text-[#0f4761]"
                dangerouslySetInnerHTML={{ __html: blogPost.powerbih }}
              />
            )}

            {blogPost.powerbip && (
              <p
                className="font-Poppins text-[20px] mt-3 font-[400] text-[#656177]"
                dangerouslySetInnerHTML={{ __html: blogPost.powerbip }}
              />
            )}

            {blogPost.azurelink && (
              <Link
                className="mt-3 block w-fit text-[#10B3D6]"
                href={blogPost.azurelink}
              >
                {blogPost.azurelink}
              </Link>
            )}

            {blogPost.microfabric && (
              <h2
                className="font-Poppins  mt-7 text-[23px] italic font-[700]  max-w-[800px] text-[#0f4761]"
                dangerouslySetInnerHTML={{ __html: blogPost.microfabric }}
              />
            )}

            {blogPost.fabricpara && (
              <p
                className="font-Poppins text-[20px] mt-3 font-[400] text-[#656177]"
                dangerouslySetInnerHTML={{ __html: blogPost.fabricpara }}
              />
            )}

            {blogPost.microfabriclink && (
              <Link
                className="mt-3 block w-fit text-[#10B3D6]"
                href={blogPost.microfabriclink}
              >
                {blogPost.microfabriclink}
              </Link>
            )}

            {blogPost.reserved && (
              <h2
                className="font-Poppins  mt-7 text-[30px] font-[700]  max-w-[800px] text-[#0f4761]"
                dangerouslySetInnerHTML={{ __html: blogPost.reserved }}
              />
            )}

            {blogPost.reservedp && (
              <p
                className="font-Poppins text-[20px] font-[400] text-[#656177]"
                dangerouslySetInnerHTML={{ __html: blogPost.reservedp }}
              />
            )}

            {blogPost.comparingheading && (
              <h2
                className="font-Poppins  mt-7 text-[30px] font-[700]  max-w-[800px] text-[#0f4761]"
                dangerouslySetInnerHTML={{ __html: blogPost.comparingheading }}
              />
            )}

            {blogPost.comparepara && (
              <p
                className="font-Poppins text-[20px] font-[400] text-[#656177]"
                dangerouslySetInnerHTML={{ __html: blogPost.comparepara }}
              />
            )}

            {blogPost.fskuheading && (
              <h2
                className="font-Poppins  mt-7 text-[30px] font-[700]  max-w-[800px] text-[#0f4761]"
                dangerouslySetInnerHTML={{ __html: blogPost.fskuheading }}
              />
            )}

            {blogPost.fskuparra && (
              <p
                className="font-Poppins text-[20px] font-[400] text-[#656177]"
                dangerouslySetInnerHTML={{ __html: blogPost.fskuparra }}
              />
            )}

            {blogPost.recomment && (
              <h2
                className="font-Poppins  mt-11 text-[20px] italic font-[700]  max-w-[800px] text-[#0f4761]"
                dangerouslySetInnerHTML={{ __html: blogPost.recomment }}
              />
            )}

            {blogPost.recommendparra && (
              <p
                className="font-Poppins mt-5 text-[20px] font-[400] text-[#656177]"
                dangerouslySetInnerHTML={{ __html: blogPost.recommendparra }}
              />
            )}

            {blogPost.howchooseh && (
              <h2
                className="font-Poppins  mt-7 text-[30px] font-[700]  max-w-[800px] text-[#0f4761]"
                dangerouslySetInnerHTML={{ __html: blogPost.howchooseh }}
              />
            )}

            {blogPost.accessh && (
              <h2
                className="font-Poppins  mt-11 text-[25px]  font-[700]  max-w-[800px] text-[#0f4761]"
                dangerouslySetInnerHTML={{ __html: blogPost.accessh }}
              />
            )}

            {blogPost.accesspara && (
              <p
                className="font-Poppins mt-5 text-[20px] font-[400] text-[#656177]"
                dangerouslySetInnerHTML={{ __html: blogPost.accesspara }}
              />
            )}
            {blogPost.scalability && (
              <h2
                className="font-Poppins  mt-11 text-[25px]  font-[700]  max-w-[800px] text-[#0f4761]"
                dangerouslySetInnerHTML={{ __html: blogPost.scalability }}
              />
            )}

            {blogPost.scaleparra && (
              <p
                className="font-Poppins mt-5 text-[20px] font-[400] text-[#656177]"
                dangerouslySetInnerHTML={{ __html: blogPost.scaleparra }}
              />
            )}

            {blogPost.embassyporth && (
              <h2
                className="font-Poppins  mt-7 text-[30px] font-[700]  max-w-[800px] text-[#0f4761]"
                dangerouslySetInnerHTML={{ __html: blogPost.embassyporth }}
              />
            )}

            {blogPost.embassyportp && (
              <p
                className="font-Poppins mt-5 text-[20px] font-[400] text-[#656177]"
                dangerouslySetInnerHTML={{ __html: blogPost.embassyportp }}
              />
            )}

            {blogPost.keytake && (
              <h2
                className="font-Poppins  mt-7 text-[30px] font-[700]  max-w-[800px] text-[#0f4761]"
                dangerouslySetInnerHTML={{ __html: blogPost.keytake }}
              />
            )}

            {blogPost.keyparra && (
              <p
                className="font-Poppins mt-5 text-[20px] font-[400] text-[#656177]"
                dangerouslySetInnerHTML={{ __html: blogPost.keyparra }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
