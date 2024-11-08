import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ item }) => {
  return (
    <Link
      href={`/blogs/${item.slug}`}
      key={item.id}
      className="rounded-[20px] cursor-pointer h-full flex flex-col"
    >
      <div className="relative w-full">
        <Image
          src={item.img}
          alt="blog post"
          className="rounded-t-[10px] transition-all w-full object-cover"
          width={600}
          height={400}
        />
      </div>
      <div className="flex-grow flex flex-col justify-between px-[45px] py-[22px] bg-[#fff] shadow-xl rounded-[10px]">
        <p className="text-[15px] uppercase font-medium transition-all hover:text-[#fa7070] cursor-pointer">
          {item.date}
        </p>
        <p className="text-[#222] mt-[10px] mb-[32px] transition-all hover:text-[#fa7070] text-[20px] font-semibold cursor-pointer">
          {item.text}
        </p>
        <div className="flex gap-x-[10px] items-center">
          <Image
            src={item.profileimg}
            alt="profile"
            className="rounded-full"
            width={40}
            height={40}
          />
          <p className="text-[16px] font-medium text-[#656177] hover:text-[#fa7070] Poppins cursor-pointer">
            {item.profileName}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
