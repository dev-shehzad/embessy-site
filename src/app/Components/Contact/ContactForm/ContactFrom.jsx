"use client";
import React from "react";
import FAQForm from "../../Faqs/FaqForm/FAQForm";
import { MdLocalPhone } from "react-icons/md";
import Form from "../../Form/Form";

const ContactForm = () => {
  return (
    <section className="contactus py-[120px]">
      <div className="containe max-w-[1200px] mx-auto px-4">
        <div className="row flex flex-wrap items-start -mx-4">
          <div className="col-md-4 w-full md:w-1/3 px-4">
            <div className="contact-infos">
              <div className="contact-info border-b border-[#efe7e7] mb-[30px] pb-[30px]">
                <h3 className="title text-[18px] font-semibold leading-[28px] text-[#2b2350] mb-2 pixFadeUp">
                  Our Location
                </h3>
                <p className="description text-[16px] leading-[28px] mb-4 text-[#797687] font-normal Poppins pixFadeUp">
                  Frohburgstrasse 10
                  <br />
                  <span className="description text-[16px] leading-[28px] mb-4 text-[#797687] font-normal Poppins pixFadeUp">
                    4600 Olten, Switzerland
                  </span>
                </p>
                <div className="info phone">
                  <i className="ei ei-icon_phone"></i>
                  <span>
                    <a
                      href="tel:+41625115084"
                      className="text-[#0056b3] flex items-center gap-3 text-[16px] leading-[28px] mb-4 pixFadeUp font-normal Poppins transition-all duration-300 ease-in-out"
                    >
                      <span>
                        <MdLocalPhone size={20} color="red" />{" "}
                      </span>{" "}
                      +41 62 511 50 84
                    </a>
                  </span>
                </div>
              </div>
              {/* Add more contact-info blocks here if needed */}
            </div>
          </div>
          {/* from */}
          <Form />
          <FAQForm ShowTitle={false} padding={false} />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
