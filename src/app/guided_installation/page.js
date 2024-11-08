import React from "react";
import Image from "next/image";
import PageBanner from "../Components/Home/Hero/Hero";
import Link from "next/link";
export const metadata = {
  title:
    "Guided Installation - Embedsy | Easy Installation of the Embedsy Portal",
  description:
    "Discover the new guided installation process for the Embedsy Portal. Our fully automated installation wizard ensures a seamless setup experience. Contact us to request your installation.",
  keywords:
    "Embedsy installation, guided installation, Embedsy Portal, automated setup, installation wizard",
};

const page = () => {
  return (
    <div className=" overflow-x-hidden max-w-screen">
      <PageBanner name="Guided Installation" />
      <section className="">
        <div className="max-w-[1200px] w-full mx-auto">
          <div className=" flex flex-wrap lg:flex-nowrap py-[100px] px-[16px]">
            <div className="w-full lg:w-[50%]">
              <div className=" flex flex-col gap-8 font-Poppins font-[400] text-[18px] text-[#797687] leading-[30px]">
                <p className="font-font-Poppins text-[18px]">
                  We have just released a newly created fully automated
                  installation wizard. While this makes the installation of the
                  Embedsy Portal much easier, we currently only do guided
                  installations to ensure that it works fine in every case.
                </p>
                <p>
                  Reach out to us via our
                  <Link href="/contact" className="text-blue-500">
                    contact form
                  </Link>
                  and request an installation.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[50%] flex justify-center items-center py-[16px]">
              <div className=" w-[60%] rounded-full ">
                <Image
                  src="/remote_word.png"
                  alt="about"
                  layout="responsive"
                  width={200}
                  height={200}
                  className=" rounded-full "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;