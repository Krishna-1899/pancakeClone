import React from "react";
import section411 from "../assests/section411.webp";
import section412 from "../assests/section412.webp";
import section413 from "../assests/section413.webp";
import section414 from "../assests/section414.webp";
import section421 from "../assests/section421.webp";
import section422 from "../assests/section422.webp";
import section423 from "../assests/section423.webp";
import section424 from "../assests/section424.webp";
import section425 from "../assests/section425.webp";
import section4card1 from "../assests/section4card1.svg";
import section4card2 from "../assests/section4card2.svg";
import arrow from "../assests/arrow.svg";
import arrowDark from "../assests/arrowDark.svg";
import link from "../assests/link.svg";
import section4p21 from "../assests/section4p21.webp";
import section4p22 from "../assests/section4p22.webp";
import section4p23 from "../assests/section4p23.webp";
import section4p24 from "../assests/section4p24.webp";
function Section4(props) {
  const darkMode = props.darkMode;
  return (
    <>
      <div>
        <div
          className={` relative flex flex-col items-center z-1 py-[48px] ${
            darkMode ? "section4bgDark" : "section4bg"
          }`}
        >
          <div className="m-0 w-full max-w-[968px] py-[48px] min-h-[auto] px-[24px]  ">
            <div className="z-[-1] overflow-hidden w-full h-full ">
              <div className="max-w-full absolute left-0 bottom-[-64px]  max-h-[512px] overflow-hidden">
                <div className="w-[400px] ">
                  <img src={section411} alt="bg" />
                </div>
                <div className="w-[400px] top-0 absolute">
                  <img src={section412} alt="bg" />
                </div>
                <div className="w-[400px] top-0 absolute">
                  <img src={section413} alt="bg" />
                </div>
                <div className="w-[400px] top-0 absolute  ">
                  <img src={section414} alt="bg" />
                </div>
              </div>
              <div className="max-w-full absolute right-0 top-[-64px]  max-h-[512px] overflow-hidden">
                <div className="w-[400px]">
                  <img src={section421} alt="bg" />
                </div>
                <div className="absolute top-0 w-[400px]">
                  <img src={section422} alt="bg" />
                </div>
                <div className="absolute top-0 w-[400px]">
                  <img src={section423} alt="bg" />
                </div>
                <div className="absolute top-0 w-[400px]">
                  <img src={section424} alt="bg" />
                </div>
                <div className="absolute top-0 w-[400px]">
                  <img src={section425} alt="bg" />
                </div>
              </div>
            </div>
            <div
              className={`p-[40px] ${
                darkMode ? "section_4_content_dark" : "section_4_content"
              } `}
            >
              <div className="flex flex-col items-center justify-center">
                <h2
                  className={`text-[40px] font-[600] leading-[1.1] ${
                    darkMode ? "text-[#f4eeff]" : "text-[#280d5f]"
                  }  mb-[24px] text-center `}
                >
                  <span className="text-[#7645d9] ">Win</span>
                  <span> </span>
                  millions in prizes
                </h2>
                <div
                  className={`${
                    darkMode ? "text-[#b8add2]" : "text-[#7a6eaa]"
                  }  font-[400] leading-[1.5] text-[16px] `}
                >
                  Provably fair, on-chain games.
                </div>
                <div
                  className={`${
                    darkMode ? "text-[#b8add2]" : "text-[#7a6eaa]"
                  } font-[400] leading-[1.5] text-[16px] mb-[40px]  `}
                >
                  Win big with PancakeSwap.
                </div>
                <div className="flex flex-row max-w-[600px] my-0 mx-[auto] ">
                  {/* card 1 */}
                  <div className="flex flex-[1_1_0%] mr-[24px] mb-0 max-w-full ">
                    <div className="section_4_card_1">
                      <div className="card_content">
                        <div className="p-[24px] ">
                          <div className="absolute top-[24px] right-[24px] rotate-[-2.36deg] origin-bottom ">
                            <img src={section4card1} />
                          </div>
                          <div className="flex flex-col mt-[48px] ">
                            <div className="font-[600] leading-[1.5] text-[16px] text-[rgb[40,15,95]] ">
                              Prediction
                            </div>
                            <h2 className="text-[40px] font-[600px] leading-[1.1] my-[8px] text-[rgb[40,15,95]]">
                              {" "}
                              $1.2 billion
                            </h2>
                            <div className=" text-[rgb[40,15,95]] font-[600] leading-[1.5] mb-[24px] text-[16px] ">
                              in BNB + CAKE won so far
                            </div>
                            <div className="text-[rgb[40,15,95]] font-[400] leading-[1.5] mb-[40px] text-[16px]">
                              Predict the price trend of BNB or CAKE to win
                            </div>
                          </div>
                          <div className="flex items-center justify-center">
                            <a
                              className="w-full text-inherit no-underline "
                              href="#"
                            >
                              <button
                                className={`button_style hover:opacity-70 transition-all `}
                              >
                                <div
                                  className={`${
                                    darkMode ? "text-[#191326]" : "text-white"
                                  }  font-[600] leading-[1.5] text-[16px] `}
                                >
                                  Play
                                </div>
                                {darkMode ? (
                                  <img src={arrowDark} />
                                ) : (
                                  <img src={arrow} />
                                )}
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* card 2 */}
                  <div className="flex flex-[1_1_0%] max-w-full">
                    <div className="rotate-[1.43deg] origin-bottom h-fit p-[1px_1px_4px] box-border bg-[#5e2dbf] rounded-[24px] text-[#280d5f] overflow-hidden relative ">
                      <div className="w-full h-full overflow-initial section_4card_2 ">
                        <div className="p-[24px] ">
                          <div className="rotate-[1.43deg] origin-bottom absolute top-[24] right-[24px] ">
                            <img src={section4card2} />
                          </div>
                          <div className="flex flex-col mt-[48px] ">
                            <div className="text-white font-[600] leading-[1.5]  text-[16px] ">
                              Lottery
                            </div>
                            <div className="no-underline text-[#280d5f] font-[600] leading-[1.5]  text-[40px]">
                              <span>$26,207</span>
                            </div>
                            <div className="text-white font-[600] leading-[1.5]  text-[16px] mb-[24px] ">
                              in CAKE prizes this round
                            </div>
                            <div className="text-white font-[400] leading-[1.5]  text-[16px] mb-[40px] ">
                              Buy tickets with CAKE, win CAKE if your numbers
                              match
                            </div>
                          </div>
                          <div className="flex items-center justify-center">
                            <a
                              className="w-full text-inherit no-underline "
                              href="#"
                            >
                              <button className="button_style  hover:opacity-70 transition-all">
                                <div
                                  className={`${
                                    darkMode ? "text-[#191326]" : "text-white"
                                  }  font-[600] leading-[1.5] text-[16px] `}
                                >
                                  Buy Tickets
                                </div>
                                {darkMode ? (
                                  <img src={arrowDark} />
                                ) : (
                                  <img src={arrow} />
                                )}
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-0 p-0 border-0 ">
        <div
          className={`relative flex flex-col items-center z-1 py-[48px] ${
            darkMode ? "bg-[#08060b]" : "bg-[#faf9fa]"
          }  `}
        >
          <div className="w-full m-0 max-w-[980px] py-[48px] min-h-[auto] px-[24px] ">
            <div className="flex flex-col ">
              <div className="flex flex-row items-center justify-center ">
                <div className="self-center flex flex-col flex-[1_1_0%] mr-[64px] ">
                  <h2
                    className={`text-[40px] font-[600] leading-[1.1] ${
                      darkMode ? "text-[#f4eeff]" : "text-[#280d5f]"
                    }  mb-[24px] `}
                  >
                    <span className={`text-[#7645d9] `}>CAKE</span>
                    <span> </span>
                    makes our world go round.
                  </h2>
                  <div
                    className={` ${
                      darkMode ? "text-[#b8add2]" : "text-[#7a6eaa]"
                    }  text-[16px] font-[400] leading-[1.5] mb-[24px]`}
                  >
                    CAKE token is at the heart of the PancakeSwap ecosystem. Buy
                    it, win it, farm it, spend it, stake it... heck, you can
                    even vote with it!
                  </div>
                  <div className="flex py-[12px] ">
                    <button
                      className={`shadowButton hover:opacity-70 transition-all relative items-center border-0 rounded-[16px] cursor-pointer inline-flex text-[16px] font-600] justify-center leading-[1] opacity-[1] h-[48px] px-[24px] bg-[#1fc7d4] ${
                        darkMode ? "text-[#191326]" : "text-white"
                      }  mr-[16px]`}
                    >
                      <a href="#" className="no-underline ">
                        <div className="font-[600] leading-[1.5] text-[16px] ">
                          Buy CAKE
                        </div>
                      </a>
                    </button>
                    <a
                      target="_blank"
                      href="#"
                      className="flex items-center w-fit font-[600] leading-[1.5] text-[16px] no-underline text-[#1fc7d4] hover:underline"
                    >
                      Learn
                      <img src={link} alt="img" />
                    </a>
                  </div>
                </div>
                <div className="flex-[1_1_0%] flex mb-0 h-full w-full ">
                  <div className=" relative max-h-[512px]">
                    <div className="absolute top-[-180px] ">
                      <div className="absolute top-[0px]  left-0 w-[400px]">
                        <img src={section4p21} />
                      </div>
                      <div className="absolute top-0 left-0 w-[400px]">
                        <img src={section4p22} />
                      </div>
                      <div className="absolute top-0 left-0 w-[400px]">
                        <img src={section4p23} />
                      </div>
                      <div className="absolute top-0 left-0 w-[400px]">
                        <img src={section4p24} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="VGgi mt-[85px] ">
                <div className="flex flex-col VGgo ">
                  <div
                    className={` font-[400] text-[16px] leading-[1.5] ${
                      darkMode ? "text-[#b8add2]" : "text-[#7a6eaa]"
                    } `}
                  >
                    Circulating Supply
                  </div>
                  <div
                    className={`no-underline  leading-[1.1] text-[24px] ${
                      darkMode ? "text-[#f4eeff]" : "text-[#280d5f]"
                    }`}
                  >
                    <span>201,606,852</span>
                  </div>
                </div>
                <div className="flex flex-col VGgp px-[16px]">
                  <div
                    className={` font-[400] text-[16px] leading-[1.5] ${
                      darkMode ? "text-[#b8add2]" : "text-[#7a6eaa]"
                    } `}
                  >
                    Total Supply
                  </div>
                  <div
                    className={`no-underline  leading-[1.1] text-[24px] ${
                      darkMode ? "text-[#f4eeff]" : "text-[#280d5f]"
                    }`}
                  >
                    <span>385,984,357</span>
                  </div>
                </div>
                <div className="flex flex-col px-[16px] VGgl">
                  <div
                    className={` font-[400] text-[16px] leading-[1.5] ${
                      darkMode ? "text-[#b8add2]" : "text-[#7a6eaa]"
                    } `}
                  >
                    Max Supply
                  </div>
                  <div
                    className={`no-underline  leading-[1.1] text-[24px] ${
                      darkMode ? "text-[#f4eeff]" : "text-[#280d5f]"
                    }`}
                  >
                    <span>750,000,000</span>
                  </div>
                </div>
                <div className="flex flex-col  p-0 border-l-0 VGgk ">
                  <div
                    className={` font-[400] text-[16px] leading-[1.5] ${
                      darkMode ? "text-[#b8add2]" : "text-[#7a6eaa]"
                    } `}
                  >
                    Market cap
                  </div>
                  <div
                    className={`no-underline  leading-[1.1] text-[24px] ${
                      darkMode ? "text-[#f4eeff]" : "text-[#280d5f]"
                    }`}
                  >
                    <span>$370 million</span>
                  </div>
                </div>
                <div className="flex flex-col px-[16px] VGgj ">
                  <div
                    className={` font-[400] text-[16px] leading-[1.5] ${
                      darkMode ? "text-[#b8add2]" : "text-[#7a6eaa]"
                    } `}
                  >
                    Burned to date
                  </div>
                  <div
                    className={`no-underline  leading-[1.1] text-[24px] ${
                      darkMode ? "text-[#f4eeff]" : "text-[#280d5f]"
                    }`}
                  >
                    <span>834,230,358</span>
                  </div>
                </div>
                <div className="flex flex-col px-[16px] VGgh">
                  <div
                    className={` font-[400] text-[16px] leading-[1.5] ${
                      darkMode ? "text-[#b8add2]" : "text-[#7a6eaa]"
                    } `}
                  >
                    Current emissions
                  </div>
                  <div
                    className={`no-underline  leading-[1.1] text-[24px] ${
                      darkMode ? "text-[#f4eeff]" : "text-[#280d5f]"
                    }`}
                  >
                    <span>5.14/block</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-0 p-0 ">
        <div className="relative flex flex-col z-1 py-[48px] section_4_part_3bg items-center">
          <div className="m-0 w-full max-w-[968px] py-[48px] min-h-[auto] px-[24px]">
            <div className="z-1 relative flex flex-col items-center justify-center overflow-hidden ">
              <h2 className="text-[40px] font-[600] leading-[1.1] m-[24px] text-white ">
                Start in seconds.
              </h2>
              <div className="font-[400] text-[16px] leading-[1.5] text-center text-white ">
                Connect your crypto wallet to start using the app in seconds.
              </div>
              <div className="font-[600] text-[16px] leading-[1.5] text-white mb-[24px] ">
                No registration needed.
              </div>
              <a
                target="_blank"
                href="#"
                className="flex items-center w-fit font-[600] leading-[1.5] text-[16px] no-underline text-[#1fc7d4] hover:underline"
              >
                Learn how to start
                <img src={link} alt="img" />
              </a>
              <button
                className={`shadowButton mt-[24px] hover:opacity-70 transition-all relative items-center border-0 rounded-[16px] cursor-pointer inline-flex text-[16px] font-600] justify-center leading-[1] opacity-[1] h-[48px] px-[24px] bg-[#1fc7d4] ${
                  darkMode ? "text-[#191326]" : "text-white"
                }  mr-[16px]`}
              >
                <a href="#" className="no-underline ">
                  <div className={`font-[600] leading-[1.5] text-[16px]  `}>
                    Connect Wallet
                  </div>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section4;
