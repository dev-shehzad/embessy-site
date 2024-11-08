import Link from "next/link";
import React from "react";
import Button from "../../Common/Button/Button";

const NothingImposible = () => {
  return (
    <div className=" w-full py-[50px] max-w-[1200px] px-[20px] mx-auto">
      <div className="wrapper">
        <h4 className="text-center font-semibold font-Poppins text-[#2B234D] text-[24px]">
          Nothing is Impossible
        </h4>
        <p className="text-[16px] py-[20px] font-normal font-Poppins text-[#797687] text-left">
          We encourage you to reach out with any idea for additional
          functionality. Whether it&apos;s related to Power BI or something
          entirely different, we&apos;re excited to collaborate with you. Our
          team is passionate about turning your concepts into reality, no matter
          how big or small. don&apos;t hesitate to connect with us – even if
          you&apos;re just exploring possibilities or need a bit of guidance.
          we&apos;re here to listen, brainstorm, and help you achieve your
          vision.
        </p>

        <Button
          href={"/contact"}
          extraParent="flex justify-center items-center"
          variant="secondary"
          text=" Contact Us With Your Ideas"
        />
      </div>
    </div>
  );
};

export default NothingImposible;
