import React from "react";
import sectio3BG from "../assests/section3BG.svg";
import section3BG2 from "../assests/section3BG2.svg";
import section3bgDark from "../assests/section3bgDark.svg";
import section3bgDark2 from "../assests/section3bgDark2.svg";
import link from "../assests/link.svg";
import section31 from "../assests/sectio3_1.webp";
import section32 from "../assests/sectio3_2.webp";
import section33 from "../assests/sectio3_3.webp";
import section3bgcom from "../assests/section3bgcom.png";
import dropvertical from "../assests/dropvertical.svg";
import section3fix from "../assests/section3fix.png";
function Section3(props) {
  const darkMode = props.darkMode;
  return (
    <>
      <div className="m-0 p-0">
        <div
          className={`flex flex-col items-center pb-10 ${
            darkMode ? "bg-[#08060b]" : "bg-[#faf9fa]"
          } `}
        >
          <div className="w-full h-full right-0 ">
            <div className=" h-full max-h-[48px] top-0 right-0 w-full">
              {darkMode ? (
                <img src={section3bgDark} className="w-full h-full" alt="bg" />
              ) : (
                <img src={sectio3BG} className="w-full h-full" alt="bg" />
              )}
            </div>
          </div>
          <div className="m-0 w-full max-w-[980px] py-[48px] min-h-[auto] px-[24px] ">
            <div className="flex flex-col pt-[100px]">
              <div className="flex flex-row items-center justify-center  ">
                <div className="self-center flex flex-col mr-[64px] flex-[1_1_0%] ">
                  <h2
                    className={`text-[40px] font-[600] leading-[1.1] mb-[24px] ${
                      darkMode ? "text-[#f4eeff]" : "text-[#280D5F]"
                    } `}
                  >
                    <span className="texrt-[40px] font-[600px] leading-1.1 text-[#7645d9] mb-[24px] ">
                      Trade
                    </span>
                    <span></span> anything. No registration, no hassle.
                  </h2>
                  <div
                    className={`font-[400] leading-[1.5] mb-[24px] text-[16px] ${
                      darkMode ? "text-[#b8add2]" : "text-[#7a6eaa]"
                    } `}
                  >
                    Trade any token on BNB Smart Chain in seconds, just by
                    connecting your wallet.
                  </div>
                  <div className="flex ">
                    <button
                      className={`shadowButton hover:opacity-80 transition-all relative items-center border-0 rounded-[16px] cursor-pointer inline-flex text-[16px] font-600] justify-center leading-[1] opacity-[1] h-[48px] px-[24px] bg-[#1fc7d4] ${
                        darkMode ? "text-[#191326]" : "text-white"
                      }  mr-[16px]`}
                    >
                      <a href="#" className="no-underline ">
                        <div className="font-[600] leading-[1.5] text-[16px] ">
                          Trade Now
                        </div>
                      </a>
                    </button>
                    <a
                      target="_blank"
                      href="#"
                      className="flex items-center w-fit font-[600] leading-[1.5] text-[16px] no-underline text-[#1fc7d4] hover:underline "
                    >
                      Learn
                      <img src={link} alt="img" />
                    </a>
                  </div>
                </div>
                <div className="w-[400px] h-full relative">
                  <div className="mb-0  ">
                    <div className="max-h-[512px]  overflow-visible">
                      <div>
                        <div className=" absolute top-[-200px] w-[400px]">
                          <img src={section31} />
                        </div>
                        <div className="absolute top-[-200px] w-[400px]">
                          <img src={section33} />
                        </div>
                        <div className=" absolute top-[-200px] w-[400px]">
                          <img src={section32} />
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
      <div className="m-0 p-0 ">
        <div
          className={`relative flex flex-col z-[1] items-center py-[48px] px-[48px] ${
            darkMode
              ? "bg-[linear-gradient(166.77deg,#3b4155,#3a3045)] "
              : " bg-[linear-gradient(111.68deg,#f2ecf2,#e8f2f6)]"
          }  `}
        >
          <div className="m-0 w-full max-w-[968px] py-[48px]  min-h-[auto] px-[24px] ">
            <div className="z-[-1] overflow-hidden absolute w-full h-full top-0 right-0  ">
              <div className="absolute flex w-full top-0 ">
                {darkMode ? (
                  <img
                    src={section3bgDark2}
                    className="w-[150%] max-h-[48px] h-full "
                  />
                ) : (
                  <img
                    src={section3BG2}
                    className="w-[150%] max-h-[48px] h-full "
                  />
                )}
              </div>
            </div>
            <div className="flex flex-col pb-[40px] ">
              <div className="flex flex-row-reverse items-center justify-center ">
                <div className="self-center flex flex-col flex-[1_1_0%] ml-[64px] ">
                  <h2
                    className={`text-[40px]  font-[600] leading-[1.1]  ${
                      darkMode ? " text-[#f4eeff]" : "text-[#280d5f]"
                    }  mb-[24px] `}
                  >
                    <span className="text-[#7645d9] ">Earn</span>
                    <span> </span>
                    passive income with crypto.
                  </h2>
                  <div
                    className={`${
                      darkMode ? "text-[#b8add2]" : "text-[#7a6eaa]"
                    } font-[400] text-[16px] leading-[1.5] `}
                  >
                    PancakeSwap makes it easy to make your crypto work for you.
                  </div>
                  <div className="flex py-[12px] ">
                    <button
                      className={`shadowButton hover:opacity-80 transition-all  relative items-center border-0 rounded-[16px] cursor-pointer inline-flex text-[16px] font-600] justify-center leading-[1] opacity-[1] h-[48px] px-[24px] bg-[#1fc7d4] ${
                        darkMode ? "text-[#191326]" : "text-white"
                      }  mr-[16px] `}
                    >
                      <a href="#" className="no-underline ">
                        <div className="font-[600] leading-[1.5] text-[16px] ">
                          Explore
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
                  <div className="relative max-h-[512px] ">
                    {darkMode ? (
                      <img src={section3fix} />
                    ) : (
                      <img src={section3bgcom} />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col mt-[24px] ">
                <div className="flex mb-[24px] ">
                  <h2
                    className={`text-[20px] font-[600] leading-[1.1] ${
                      darkMode ? " text-[#f4eeff]" : "text-[#280d5f]"
                    } `}
                  >
                    Top
                    <span> </span>
                    <span
                      className={`${
                        darkMode ? "text-[#9a6aff]" : "text-[#7645d9] "
                      }`}
                    >
                      Farms
                    </span>
                  </h2>
                  <button className="p-[2px] w-[48px] ">
                    <img src={dropvertical} />
                  </button>
                </div>
              </div>
              <div className="h-[80px] ">
                <div className="grid gap-[32px] grid-cols-[repeat(5,auto)] ">
                  <div className="flex flex-col pr-[16px]">
                    <div
                      className={`${
                        darkMode ? "text-[#9a6aff]" : "text-[#7645d9] "
                      } font-[600] mb-[8px] leading-[1.5] text-[12px]`}
                    >
                      UNW-BNB LP v3
                    </div>
                    <div
                      className={` ${
                        darkMode ? "text-[#f4eeff]" : "text-[#280d5f]"
                      } font-[600] leading-[1.1] text-[16px] `}
                    >
                      248.714%
                    </div>
                    <div
                      className={`${
                        darkMode ? "text-[#b8add2]" : "text-[#7645d9] "
                      } font-[400] text-[16px] leading-[1.5] `}
                    >
                      APR
                    </div>
                  </div>
                  <div className="flex flex-col border-l-[1px] border-[#d7caec] pl-[16px]  ">
                    <div
                      className={`${
                        darkMode ? "text-[#9a6aff]" : "text-[#7645d9] "
                      } font-[600]  mb-[8px] leading-[1.5] text-[12px]`}
                    >
                      unshETH-USH LP v3
                    </div>
                    <div
                      className={` ${
                        darkMode ? "text-[#f4eeff]" : "text-[#280d5f]"
                      } font-[600] leading-[1.1] text-[16px] `}
                    >
                      186.961%
                    </div>
                    <div
                      className={`${
                        darkMode ? "text-[#b8add2]" : "text-[#7645d9] "
                      } font-[400] text-[16px] leading-[1.5] `}
                    >
                      APR
                    </div>
                  </div>
                  <div className="flex flex-col border-l-[1px] border-[#d7caec] pl-[16px] ">
                    <div
                      className={`${
                        darkMode ? "text-[#9a6aff]" : "text-[#7645d9] "
                      } font-[600]  mb-[8px] leading-[1.5] text-[12px]`}
                    >
                      SQUAD-CAKE LP
                    </div>
                    <div
                      className={` ${
                        darkMode ? "text-[#f4eeff]" : "text-[#280d5f]"
                      } font-[600] leading-[1.1] text-[16px] `}
                    >
                      180.526%
                    </div>
                    <div
                      className={`${
                        darkMode ? "text-[#b8add2]" : "text-[#7645d9] "
                      } font-[400] text-[16px] leading-[1.5] `}
                    >
                      APR
                    </div>
                  </div>
                  <div className="flex flex-col border-l-[1px] border-[#d7caec] pl-[16px] ">
                    <div
                      className={`${
                        darkMode ? "text-[#9a6aff]" : "text-[#7645d9] "
                      } font-[600] mb-[8px] leading-[1.5] text-[12px]`}
                    >
                      AXL-USDT LP v3
                    </div>
                    <div
                      className={` ${
                        darkMode ? "text-[#f4eeff]" : "text-[#280d5f]"
                      } font-[600] leading-[1.1] text-[16px] `}
                    >
                      164.848%
                    </div>
                    <div
                      className={`${
                        darkMode ? "text-[#b8add2]" : "text-[#7645d9] "
                      } font-[400] text-[16px] leading-[1.5] `}
                    >
                      APR
                    </div>
                  </div>
                  <div className="flex flex-col border-l-[1px] border-[#d7caec] pl-[16px] ">
                    <div
                      className={`${
                        darkMode ? "text-[#9a6aff]" : "text-[#7645d9] "
                      } font-[600]  mb-[8px] leading-[1.5] text-[12px]`}
                    >
                      Stake CAKE - Earn USH
                    </div>
                    <div
                      className={` ${
                        darkMode ? "text-[#f4eeff]" : "text-[#280d5f]"
                      } font-[600] leading-[1.1] text-[16px] `}
                    >
                      10.586%
                    </div>
                    <div
                      className={`${
                        darkMode ? "text-[#b8add2]" : "text-[#7645d9] "
                      } font-[400] text-[16px] leading-[1.5] `}
                    >
                      APR
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section3;
