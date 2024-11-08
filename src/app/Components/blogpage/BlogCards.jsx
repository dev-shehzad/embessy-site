import React from "react";
import Image from "next/image";
import Link from "next/link";
import Card from "./Card";

const BlogCards = ({ cardItem }) => {
  return (
    <div className="Con py-[120px] max-md:py-[80px]">
      <div className="wrapper max-w-[1200px] mx-auto px-[15px]">
        <h2 className="text-[36px] pixFadeUp font-semibold Poppins text-[#2b2350] text-center">
          Check out our latest blog posts
        </h2>
        {/* images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px] mt-[40px]">
          {cardItem.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
