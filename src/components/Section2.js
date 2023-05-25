import React from "react";
import blueLogo from "../assests/blueLogo.svg";
import card1 from "../assests/card-1.svg";
import card2 from "../assests/card-2.svg";
import card3 from "../assests/card-3.svg";
function Section2(props) {
  const darkMode = props.darkMode;
  return (
    <div className="m-0 p-0 ">
      <div
        className={`relative flex flex-col [z-1000] items-center py-[48px] ${
          darkMode ? "section2_dark" : "section2"
        } `}
      >
        <div className="w-full m-0 py-[48px] min-h-[auto] px-24px max-w-[1200px]">
          <div className="flex flex-col justify-center items-center ">
            <img src={blueLogo} alt="image" className="mb-[24px] " />
            <h2
              className={`text-[40px] font-[600]  leading-[1.1] text-center ${
                darkMode ? "text-[#f4eeff]" : "text-[#280d5f]"
              }`}
            >
              Used by millions.
            </h2>
            <h2
              className={`text-[40px] font-[600] mb-[32px] text-center leading-[1.1]  ${
                darkMode ? "text-[#f4eeff]" : "text-[#280d5f]"
              }`}
            >
              Trusted with billions.
            </h2>
            <div
              className={`${
                darkMode ? "text-[#b8add2]" : "text-[#7a6eaa]"
              } font-[400] leading-[1.5] text-center text-[16px] `}
            >
              PancakeSwap has the most users of any decentralized platform,
              ever.
            </div>
            <div className="flex flex-wrap ">
              <div
                className={`inline text-[16px] mb-[20px] text-center first-letter leading-[1.5] ${
                  darkMode ? "text-[#b8add2]" : "text-[#7a6eaa]"
                }`}
              >
                And those users are now entrusting the platform with over $ 2.2
                billion in funds.
              </div>
            </div>
            <div
              className={`font-[600] mb-[32px] leading-[1.5] text-[16px] text-center ${
                darkMode ? "text-[#b8add2]" : "text-[#7a6eaa]"
              }`}
            >
              Will you join them?
            </div>
            <div className="flex flex-row max-w-full ">
              <div
                className={`box-border p-[1px_1px_4px] h-fit mr-[16px] mb-0 overflow-hidden relative ${
                  darkMode
                    ? "bg-[#383241] text-[#f4eeff]"
                    : "text-[#280d5f]  bg-[#e7e3eb]"
                }  rounded-[24px] `}
              >
                <div
                  className={`w-full h-full overflow-inherit ${
                    darkMode ? "bg-[#27262c]" : "bg-white"
                  }  rounded-[24px]`}
                >
                  <div className="p-[24px] ">
                    <div className="absolute top-[24px] right-[24px] ">
                      <img src={card1} alt="img" width={36} />
                    </div>
                    <div className="flex flex-col justify-end mt-[64px] min-h-[160px] min-w-[232px] w-fit ">
                      <h2
                        className={`text-[40px] font-[600] leading-[1.1] ${
                          darkMode ? "text-[#f4eeff]" : "text-[#280d5f]"
                        }  `}
                      >
                        1.6 million
                      </h2>
                      <h2
                        className={`text-[40px] font-[600] leading-[1.1] mb-[24px] ${
                          darkMode ? "text-[#9a6aff]" : "text-[#7645d9]"
                        }`}
                      >
                        users
                      </h2>
                      <div
                        className={`font-[400] leading-[1.5] text-[16px] ${
                          darkMode ? "text-[#b8add2]" : "text-[#7a6eea]"
                        }`}
                      >
                        in the last 30 days
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`box-border p-[1px_1px_4px] h-fit mr-[16px] mb-0 overflow-hidden relative ${
                  darkMode
                    ? "bg-[#383241] text-[#f4eeff]"
                    : "text-[#280d5f]  bg-[#e7e3eb]"
                }  rounded-[24px] `}
              >
                <div
                  className={`w-full h-full overflow-inherit ${
                    darkMode ? "bg-[#27262c]" : "bg-white"
                  }  rounded-[24px]`}
                >
                  <div className="p-[24px] ">
                    <div className="absolute top-[24px] right-[24px] ">
                      <img src={card2} alt="img" width={36} />
                    </div>
                    <div className="flex flex-col justify-end mt-[64px] min-h-[160px] min-w-[232px] w-fit ">
                      <h2
                        className={`text-[40px] font-[600] leading-[1.1] ${
                          darkMode ? "text-[#f4eeff]" : "text-[#280d5f]"
                        }  `}
                      >
                        23 million
                      </h2>
                      <h2 className="text-[40px] font-[600] leading-[1.1] mb-[24px] text-[#1fc7d4]">
                        trades
                      </h2>
                      <div
                        className={`font-[400] leading-[1.5] text-[16px] ${
                          darkMode ? "text-[#b8add2]" : "text-[#7a6eea]"
                        }`}
                      >
                        made in last 34 Days
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`box-border p-[1px_1px_4px] h-fit mb-0 overflow-hidden relative ${
                  darkMode
                    ? "bg-[#383241] text-[#f4eeff]"
                    : "text-[#280d5f]  bg-[#e7e3eb]"
                }  rounded-[24px] `}
              >
                <div
                  className={`w-full h-full overflow-inherit ${
                    darkMode ? "bg-[#27262c]" : "bg-white"
                  }  rounded-[24px]`}
                >
                  <div className="p-[24px] ">
                    <div className="absolute top-[24px] right-[24px] ">
                      <img src={card3} alt="img" width={36} />
                    </div>
                    <div className="flex flex-col justify-end mt-[64px] min-h-[160px] min-w-[232px] w-fit ">
                      <h2
                        className={`text-[40px] font-[600] leading-[1.1] ${
                          darkMode ? "text-[#f4eeff]" : "text-[#280d5f]"
                        }  `}
                      >
                        $2.2 billion
                      </h2>
                      <h2 className="text-[40px] font-[600] leading-[1.1] mb-[24px] text-[#ed4b9e]">
                        staked
                      </h2>
                      <div
                        className={`font-[400] leading-[1.5] text-[16px] ${
                          darkMode ? "text-[#b8add2]" : "text-[#7a6eea]"
                        }`}
                      >
                        Total Valued Locked{" "}
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
  );
}

export default Section2;
