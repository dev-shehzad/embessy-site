import React from 'react';
import Layout from '@/app/Components/Documentions/Layout/Layout';

export default function DocHome() {
  return (
    <Layout>
     <article className="pt-16 px-[15px]" id="documentation">
      <div className="mb-10">
        <h1 className=" mb-3 text-[30px] text-[#1d2746] leading-[36px] font-medium Roboto ">Documentation</h1>
        <p className="text-[#6b707f] text-[16px] font-normal Poppins leading-[26px]">
          <span className="font-bold">Welcome to KbDoc!</span> Get familiar with the Stripe products and explore their features:
        </p>
      </div>
    </article>
    </Layout>
  );
}
