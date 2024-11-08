'use client'
import React, { useEffect } from 'react';
import { Fade } from "react-awesome-reveal";
import Image from 'next/image';

const OurStory = () => {

    useEffect(() => {
        const handleScroll = () => {
          const scrollCircle = document.querySelector(".scroll-circle img");
          
          if (scrollCircle) {  // Ensure the element exists before trying to modify it
            const scrollPosition = window.scrollY;
            scrollCircle.style.transform = `translateY(${scrollPosition * 0.2}px)`; // Reduced the multiplier to 0.2 for a smoother effect
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
      
    return (
        <section className="about py-24 relative">
            <div className=" max-w-[1200px] mx-auto px-4">
                <div className="flex flex-wrap -mx-4">
                    <div className="col-lg-7 w-full lg:w-7/12 px-4">
                        <div className="about-content pr-0 lg:pr-32">
                            <div className="section-title mb-9">
                                <Fade triggerOnce direction="up">
                                    <h3 className="sub-title text-sm uppercase font-medium text-[#fa7070] tracking-wider">Our Story</h3>
                                </Fade>
                                <Fade triggerOnce direction="up" delay={300}>
                                    <h2 className="title text-3xl font-semibold leading-snug text-[#2b2350]">
                                        It all started with two data enthusiasts
                                    </h2>
                                </Fade>
                            </div>
                            <Fade triggerOnce direction="up" delay={400}>
                                <p className="description mb-10 text-[#797687] text-base leading-7">
                                    The founders of Embedsy, Vlad Mihanta and Pascal Kiefer have been successfully working
                                    with their own companies of many data projects for many years before they met online.
                                    Shortly after they met, they started working on a couple of Power BI projects together
                                    and had regular friendly meetings to exchange whatever it was they had on their mind.
                                    One of the topics that came up frequently was why Power BI Embedded was not more popular despite
                                    its incredible power. One day, the two decided to dig into this topic, met in person for the first time,
                                    spent a few days in a co working and decided to start developing a Power BI Embedded solution.
                                    Embedsy was born. Since then, a couple of developers have been hired and many more days have been spent together
                                    to build a tool that is valuable, well-functioning and of course, secure.
                                    The backlog of Embedsy is still full and the entire team is fully committed to adding more functionality.
                                    <br />So... The story continues and we&#39;re excited to see where it will take us.
                                </p>
                            </Fade>
                        </div>
                    </div>
                    <div className="col-lg-5 w-full lg:w-5/12 px-4 relative">
                        <Fade triggerOnce direction="right" delay={600}>
                            <div className="about-thumb">
                                <Image src="/1.png" alt="about" layout="responsive" width={500} height={500} />
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
            <div
                className="scroll-circle absolute bottom-[-40%] z-0 pointer-events-none pixFadeRight"
                style={{ visibility: "visible", animationName: "pixFadeRight" }}
            >
                <Image
                    src="/circle2.png"
                    alt="circle"
                    width={600}
                    height={600}
                    className="transform translate-y-[180px]"
                    style={{
                        transform:
                          "translate3d(0px, 119.297px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)",
                        WebkitTransform:
                          "translate3d(0px, 119.297px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)",
                      }}
                />
            </div>
        </section>
    );
};

export default OurStory;
