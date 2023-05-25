import React, { useRef, useState } from "react";

import slide1Bg from "../assests/slide1-bg.webp";
import bunny from "../assests/bunny.png";
import back1 from "../assests/back1.svg";
import back2 from "../assests/back2.svg";
import arrow from "../assests/arrow.svg";
import link from "../assests/link.svg";

export default function ImageSwiper(props) {
  const darkMode = props.darkMode;
  return (
    <section
      className={`${
        darkMode ? "imageSwipper" : "bg-[#EEF5FF]"
      } relative max-w-[100vw]`}
    >
      <div className="w-full ">
        <div className="pt-[48px] flex flex-col items-center ">
          <div className="w-full py-[48px] min-h-[auto] max-w-[1200px] ">
            <div className="mb-[30px] ">
              <div className="overflow-visible">
                <div className="slide1 relative p-[24px] rounded-[32px] min-h-[181px]">
                  <div className=" flex flex-col items-start leading-9">
                    <div className="absolute top-[-46px] right-[50px] w-[200px]">
                      <img src={slide1Bg} />
                    </div>
                    <div className="text-[21px] font-[600] text-[rgb(255,255,255)] ">
                      Trade to Earn Reward
                    </div>
                    <div className="flex mb-[12px] text-[40px]  font-[600] text-[rgb(255,255,255)]">
                      5% trading rebate to earned!
                    </div>
                    <div className="gap-[8px] flex flex-row flex-nowrap">
                      <button className="px-[12px] bg-blue-500 hover:opacity-50 rounded-2xl gap-[2px] text-white font-bold flex items-center justify-center">
                        Trade Now
                        <img src={arrow} width={25} />
                      </button>
                      <button className="text-blue-500 font-bold bg-white rounded-2xl px-[12px] hover:opacity-50 flex items-center justify-center gap-[2px] ">
                        Learn More
                        <img src={link} width={25} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center mt-0 pt-[60px]">
                <div className="flex flex-col z-[2] ">
                  <h2
                    className={`text-[62px] font-[600] leading-[1.1] mb-[24px] tracking-[2px]	 ${
                      darkMode ? "text-[#9a6aff]" : "text-[#7645d9]"
                    } `}
                  >
                    The moon is made of pancakes.
                  </h2>
                  <h2
                    className={`text-[20px] font-[400] leading-[1.1] mb-[24px] tracking-[1px]	 ${
                      darkMode ? "text-[#f4eeff] " : "text-[#280d5f]"
                    } `}
                  >
                    Trade, earn, and win crypto on the most popular
                    decentralized platform in the galaxy.
                  </h2>
                  <div className="flex">
                    <button
                      className={`hover:opacity-80 transition-all items-center border-0 rounded-[16px] cursor-pointer inline-flex text-[16px] font-[600] tracking-[0.03rem] leading-[1] py-[20px] px-[24px]  h-[48px] mr-[8px] ${
                        darkMode ? "" : "text-white"
                      }  bg-[#1fc7d4] `}
                    >
                      Connect Wallet
                    </button>
                    <a className="text-inherit decoration-[none] hover:opacity-80 transition-all duration-800 ">
                      <button className="px-[24px] items-center rounded-[16px] cursor-pointer inline-flex text-[16px] font-[600] tracking-[0.03rem] py-[20px] h-[48px] border-[2px] border-solid border-[#1fc7d4] text-[#1fc7d4]">
                        Trade Now
                      </button>
                    </a>
                  </div>
                </div>
                <div className="flex mb-0 h-full w-[950px] z-[2] ">
                  <div className="w-full">
                    <span className="box-border max-w-full ">
                      <img src={bunny} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute bottom-0">
        {darkMode ? <img src={back2} /> : <img src={back1} />}
      </div>
    </section>
  );
}
