import React from 'react';
import Image from 'next/image';

const WeStrivetoDev = () => {
  return (
    <section className="call-to-action relative py-[120px] max-md:py-[80px] overflow-hidden bg-gradient-to-r from-[#FBCA15] to-[#c8a116]">
      <div className="overlay-bg absolute top-0 px-[15px] right-0">
        {/* Replace img with Image */}
        <Image src="/ellipse.png" alt="bg" width={500} height={500} />
      </div>
      <div className="mx-auto text-center">
        <div className="action-content relative animate-pixFadeUp">
          <h2 className="title text-white text-[34px] sm:text-[35px] md:text-[40px] lg:text-[44px] font-bold mb-7 pixFadeUp">
            We strive to develop exactly what our
            <br />
            clients and partners need.
          </h2>
          <p className="text-white mb-12 pixFadeUp">
            Reach out to us with any question, request, or idea related to Embedded Analytics.
            <br />
            Your idea might be exactly the one we have&apos;t had yet that will make Embedsy even better.
          </p>
          <a
            href="contact"
            className="pix-btn btn-light inline-block hover:bg-transparent hover:text-white hover:shadow-none bg-white text-[#fa7070] border-2 border-white rounded-[30px] px-12 py-3 shadow-[0px_20px_30px_0px_rgba(176,70,70,0.3)] transition-all duration-300"
          >
            Get in touch
          </a>
        </div>
      </div>
      <div className="scroll-circle absolute right-0 top-1/2 transform translate-y-1/2 z-10 pointer-events-none">
        {/* Replace img with Image */}
        <Image src="/circle13.png" alt="circle" width={200} height={200} />
      </div>
    </section>
  );
};

export default WeStrivetoDev;
