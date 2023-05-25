import { React, useState, useEffect, Fragment } from "react";
import logoBlack from "../assests/logoBlack.svg";
import logoLight from "../assests/logoLight.svg";
import logoface from "../assests/logoface.svg";
import dot from "../assests/dot.svg"
import dotWhite from "../assests/dotWhite.svg"
import dropWhite from"../assests/dropWhite.svg"
import language from "../assests/langauge.svg";
import setting from "../assests/setting.svg";
import drop from "../assests/drop.svg";
import img1 from "../assests/img-1.png";
import exit from "../assests/exit.svg";
import bnb from "../assests/bnb.png";
import aptos from "../assests/aptos.png"
import ethereum from "../assests/ethereum.png"
import Model from "./Model";
function Navbar(props) {
  const darkMode = props.darkMode;
  const setDarkMode = props.setDarkMode;
  const [showModel,setShowModel]=useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [dropDown2, setDropDown2] = useState(false);
  const [dropDown3, setDropDown3] = useState(false);
  const [dropDown4, setDropDown4] = useState(false);
  const [dropDown5, setDropDown5] = useState(false);
  const [dropDown6, setDropDown6] = useState(false);

  function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
      let lastScrollY = window.pageYOffset;

      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (
          direction !== scrollDirection &&
          (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
        ) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
      };
    }, [scrollDirection]);

    return scrollDirection;
  }
  const scrollDirection = useScrollDirection();
  return (
    <Fragment>
      <div className={`sticky ${scrollDirection === "down" ? "-top-24" : "top-0"} z-[10] transition-all duration-500`}>
        <div className={`flex justify-between items-center w-full h-[56px] ${darkMode? "bg-[#27262c] border-b-[#383241]": "bg-white border-b-white "} px-[16px] border-b-[1px]`}>
          {/* left side nav */}
          <div className="flex">
            {/* logo div */}
            <div className="flex items-center ">
              {!darkMode ? (
                <img src={logoBlack} alt="logo image" width={160} />
              ) : (
                <img src={logoLight} alt="logo image" width={160} />
              )}
            </div>
            {/* links div */}
            <div className="block">
              <div className="flex ml-[24px]">
                {/* trade link */}
                <div className={`py-[4px] `}  onClick={() => {setDropDown(!dropDown)}} onMouseLeave={() => {setDropDown(false)}}>
                  <div onMouseEnter={() => {setDropDown(true);}} >
                    <div>
                      <div className={`${darkMode ? "text-[#b8add2] hover:bg-[#353547] " : "text-[#7a6eaa] hover:bg-slate-200"} rounded-xl relative flex  text-[16px] font-[400] h-[48px] px-[16px] items-center`}>
                        Trade
                      </div>
                    </div>
                  </div>
                  <div className={`${!dropDown ? "noDropDown" : "dropDown"} dropDown1 ${!darkMode ? "bg-[white] border-[1px] border-solid border-[#e7e3eb]" :"bg-[#27262c] border-[1px] border-solid border-[#383241]"}`}>
                    <div className={`${darkMode?"hover:bg-[#353547]":"hover:bg-slate-200"}  rounded-lg`}>
                      <a
                        href="#"
                        className={`rounded-t-[8px] items-center border-0 font-[400] flex text-[16px] h-[48px] justify-between px-[16px] w-full pointer-events-auto cursor-pointer ${darkMode ? "text-[#b8add2]" : "text-[#7a6eaa]"} `}
                      >
                        Swap
                      </a>
                    </div>
                    <div className={` ${darkMode?"hover:bg-[#353547]":"hover:bg-slate-200"} rounded-lg`}>
                      <a
                        href="#"
                        className={`rounded-t-[8px] items-center border-0 font-[400] flex text-[16px] h-[48px] justify-between px-[16px] w-full pointer-events-auto cursor-pointer ${darkMode ? "text-[#b8add2]" : "text-[#7a6eaa]"}`}
                      >
                        Liqidity
                      </a>
                    </div>
                    <div className={` ${darkMode?"hover:bg-[#353547]":"hover:bg-slate-200"} rounded-lg`}>
                      <a
                        href="#"
                        className={`rounded-t-[8px] items-center border-0 font-[400] flex text-[16px] h-[48px] justify-between px-[16px] w-full pointer-events-auto cursor-pointer ${darkMode ? "text-[#b8add2]" : "text-[#7a6eaa]"}`}
                      >
                          Perpetual
                          <img src={exit} width={20} />
                      </a>
                    </div>
                    <div className={` ${darkMode?"hover:bg-[#353547]":"hover:bg-slate-200"} rounded-lg`}>
                      <a
                        href="#"
                        className={`rounded-t-[8px] items-center border-0 font-[400] flex text-[16px] h-[48px] justify-between px-[16px] w-full pointer-events-auto cursor-pointer ${darkMode ? "text-[#b8add2]" : "text-[#7a6eaa]"}`}
                      >
                          Bridge
                          <img src={exit} width={20} />
                      </a>
                    </div>
                    <div className={` ${darkMode?"hover:bg-[#353547]":"hover:bg-slate-200"} rounded-lg`}>
                      <a
                        href="#"
                        className={`rounded-t-[8px] items-center border-0 font-[400] flex text-[16px] h-[48px] justify-between px-[16px] w-full pointer-events-auto cursor-pointer ${darkMode ? "text-[#b8add2]" : "text-[#7a6eaa]"}`}
                      >
                        Limit(V2)
                      </a>
                    </div>
                  </div>
                </div>
                {/* Earn link */}
                <div className={`py-[4px]` } onClick={() => {setDropDown2(!dropDown2)}} onMouseLeave={() => {setDropDown2(false)}}>
                  <div onMouseEnter={() => {setDropDown2(true);}}>
                    <div className="relative">
                      <div className={`${darkMode ? "text-[#b8add2] hover:bg-[#353547] " : "text-[#7a6eaa] hover:bg-slate-200"} rounded-xl relative flex  text-[16px] font-[400] h-[48px] px-[16px] items-center`}>
                        Earn
                      </div>
                    </div>
                  </div>
                  <div className={`${!dropDown2 ? "noDropDown" : "dropDown"} dropDown2 ${!darkMode ? "bg-[white] border-[1px] border-solid border-[#e7e3eb]" :"bg-[#27262c] border-[1px] border-solid border-[#383241]"}`}>
                    <div className={` ${darkMode?"hover:bg-[#353547]":"hover:bg-slate-200"} rounded-lg`}>
                      <a
                        href="#"
                        className={`rounded-t-[8px] items-center border-0 font-[400] flex text-[16px] h-[48px] justify-between px-[16px] w-full pointer-events-auto  cursor-pointer ${darkMode ? "text-[#b8add2]" : "text-[#7a6eaa]"}`}
                      >
                        Farms
                      </a>
                    </div>
                    <div className={` ${darkMode?"hover:bg-[#353547]":"hover:bg-slate-200"} rounded-lg`}>
                      <a
                        href="#"
                        className={`rounded-t-[8px] items-center border-0 font-[400] flex text-[16px] h-[48px] justify-between px-[16px] w-full pointer-events-auto cursor-pointer ${darkMode ? "text-[#b8add2]" : "text-[#7a6eaa]"} `}
                      >
                        Pool
                      </a>
                    </div>
                    <div className={` ${darkMode?"hover:bg-[#353547]":"hover:bg-slate-200"} rounded-lg`}>
                      <a
                        href="#"
                        className={`rounded-t-[8px] items-center border-0 font-[400] flex text-[16px] h-[48px] justify-between px-[16px] w-full pointer-events-auto cursor-pointer ${darkMode ? "text-[#b8add2]" : "text-[#7a6eaa]"} `}
                      >
                        Liqid Staking
                      </a>
                    </div>
                  </div>
                </div>
                {/* Win link  */}
                <div className={`py-[4px]`} onClick={() => {setDropDown3(!dropDown3)}} onMouseLeave={() => {setDropDown3(false)}}>
                  <div onMouseEnter={() => {setDropDown3(true);}}>
                    <div className="relative">
                      <div className={`${darkMode ? "text-[#b8add2] hover:bg-[#353547] " : "text-[#7a6eaa] hover:bg-slate-200"} rounded-xl relative flex  text-[16px] font-[400] h-[48px] px-[16px] items-center`}>
                        Win
                      </div>
                    </div>
                  </div>
                  <div className={`${!dropDown3 ? "noDropDown" : "dropDown"} dropDown3 ${!darkMode ? "bg-[white] border-[1px] border-solid border-[#e7e3eb]" :"bg-[#27262c] border-[1px] border-solid border-[#383241]"}`}>
                    <div className={` ${darkMode?"hover:bg-[#353547]":"hover:bg-slate-200"} rounded-lg`}>
                      <a
                        href="#"
                        className={`rounded-t-[8px] items-center border-0 font-[400] flex text-[16px] h-[48px] justify-between px-[16px] w-full pointer-events-auto cursor-pointer ${darkMode ? "text-[#b8add2]" : "text-[#7a6eaa]"}`}
                      >
                        Trading Reward{" "}
                      </a>
                    </div>
                    <div className={` ${darkMode?"hover:bg-[#353547]":"hover:bg-slate-200"} rounded-lg`}>
                      <a
                        href="#"
                        className={`rounded-t-[8px] items-center border-0 font-[400] flex text-[16px] h-[48px] justify-between px-[16px] w-full pointer-events-auto cursor-pointer ${darkMode ? "text-[#b8add2]" : "text-[#7a6eaa]"}`}
                      >
                        Trading Compititi on
                      </a>
                    </div>
                    <div className={` ${darkMode?"hover:bg-[#353547]":"hover:bg-slate-200"} rounded-lg`}>
                      <a
                        href="#"
                        className={`rounded-t-[8px] items-center border-0 font-[400] flex text-[16px] h-[48px] justify-between px-[16px] w-full pointer-events-auto cursor-pointer ${darkMode ? "text-[#b8add2]" : "text-[#7a6eaa]"}`}
                      >
                        Prediction (BETA)
                      </a>
                    </div>
                    <div className={` ${darkMode?"hover:bg-[#353547]":"hover:bg-slate-200"} rounded-lg`}>
                      <a
                        href="#"
                        className={`rounded-t-[8px] items-center border-0 font-[400] flex text-[16px] h-[48px] justify-between px-[16px] w-full pointer-events-auto cursor-pointer ${darkMode ? "text-[#b8add2]" : "text-[#7a6eaa]"}`}
                      >
                        Lottery
                      </a>
                    </div>
                    <div className={` ${darkMode?"hover:bg-[#353547]":"hover:bg-slate-200"} rounded-lg`}>
                      <a
                        href="#"
                        className={`rounded-t-[8px] items-center border-0 font-[400] flex text-[16px] h-[48px] justify-between px-[16px] w-full pointer-events-auto cursor-pointer ${darkMode ? "text-[#b8add2]" : "text-[#7a6eaa]"}`}
                      >
                        Pottery (BETA)
                      </a>
                    </div>
                  </div>
                </div>
                {/* NFT link */}
                <div className={`py-[4px]`} onClick={() => {setDropDown4(!dropDown4)}} onMouseLeave={() => {setDropDown4(false)}} >
                  <div onMouseEnter={() => {setDropDown4(true)}}>
                    <div className="relative">
                      <div className={`${darkMode ? "text-[#b8add2] hover:bg-[#353547] " : "text-[#7a6eaa] hover:bg-slate-200"} rounded-xl relative flex  text-[16px] font-[400] h-[48px] px-[16px] items-center`}>
                        NFT
                      </div>
                    </div>
                  </div>
                  <div className={`${!dropDown4 ? "noDropDown" : "dropDown"} dropDown4 ${!darkMode ? "bg-[white] border-[1px] border-solid border-[#e7e3eb]" :"bg-[#27262c] border-[1px] border-solid border-[#383241]"}`}>
                    <div className={` ${darkMode?"hover:bg-[#353547]":"hover:bg-slate-200"} rounded-lg`}>
                      <a
                        href="#"
                        className={`rounded-t-[8px] items-center border-0 font-[400] flex text-[16px] h-[48px] justify-between px-[16px] w-full pointer-events-auto cursor-pointer ${darkMode ? "text-[#b8add2]" : "text-[#7a6eaa]"}`}
                      >
                        Overview
                      </a>
                    </div>
                    <div className={` ${darkMode?"hover:bg-[#353547]":"hover:bg-slate-200"} rounded-lg`}>
                      <a
                        href="#"
                        className={`rounded-t-[8px] items-center border-0 font-[400] flex text-[16px] h-[48px] justify-between px-[16px] w-full pointer-events-auto cursor-pointer ${darkMode ? "text-[#b8add2]" : "text-[#7a6eaa]"}`}
                      >
                        Collections
                      </a>
                    </div>
                    <div className={` ${darkMode?"hover:bg-[#353547]":"hover:bg-slate-200"} rounded-lg`}>
                      <a
                        href="#"
                        className={`rounded-t-[8px] items-center border-0 font-[400] flex text-[16px] h-[48px] justify-between px-[16px] w-full pointer-events-auto cursor-pointer ${darkMode ? "text-[#b8add2]" : "text-[#7a6eaa]"}`}
                      >
                        Activity
                      </a>
                    </div>
                  </div>
                </div>
                {/* ... link */}
                <div className={`py-[4px]`} onClick={() => {setDropDown5(!dropDown5)}} onMouseLeave={() => {setDropDown5(false)}} >
                  <div onMouseEnter={() => {setDropDown5(true)}}>
                    <div className="relative">
                      <div className={`${darkMode ? "text-[#b8add2] hover:bg-[#353547] " : "text-[#7a6eaa] hover:bg-slate-200"} rounded-xl relative flex  text-[16px] font-[400] h-[48px] px-[16px] items-center`}>
                        {
                          darkMode?(<img src={dot} alt=""/>):(<img src={dotWhite} alt=""/>)
                        } 
                      </div>
                    </div>
                  </div>
                  <div className={`${!dropDown5 ? "noDropDown" : "dropDown"} dropDown5 ${!darkMode ? "bg-[white] border-[1px] border-solid border-[#e7e3eb]" :"bg-[#27262c] border-[1px] border-solid border-[#383241]"}`}>
                    <div className={` ${darkMode?"hover:bg-[#353547]":"hover:bg-slate-200"} rounded-lg`}>
                      <a
                        href="#"
                        className={`rounded-t-[8px] items-center border-0 font-[400] flex text-[16px] h-[48px] justify-between px-[16px] w-full pointer-events-auto cursor-pointer ${darkMode ? "text-[#b8add2]" : "text-[#7a6eaa]"}`}
                      >
                        Info
                      </a>
                    </div>
                    <div className={` ${darkMode?"hover:bg-[#353547]":"hover:bg-slate-200"} rounded-lg`}>
                      <a
                        href="#"
                        className={`rounded-t-[8px] items-center border-0 font-[400] flex text-[16px] h-[48px] justify-between px-[16px] w-full pointer-events-auto cursor-pointer ${darkMode ? "text-[#b8add2]" : "text-[#7a6eaa]"}`}
                      >
                        IFO
                      </a>
                    </div>
                    <div className={` ${darkMode?"hover:bg-[#353547]":"hover:bg-slate-200"} rounded-lg`}>
                      <a
                        href="#"
                        className={`rounded-t-[8px] items-center border-0 font-[400] flex text-[16px] h-[48px] justify-between px-[16px] w-full pointer-events-auto cursor-pointer ${darkMode ? "text-[#b8add2]" : "text-[#7a6eaa]"}`}
                      >
                        Affilate Program
                      </a>
                    </div>
                    <div className={` ${darkMode?"hover:bg-[#353547]":"hover:bg-slate-200"} rounded-lg`}>
                      <a
                        href="#"
                        className={`rounded-t-[8px] items-center border-0 font-[400] flex text-[16px] h-[48px] justify-between px-[16px] w-full pointer-events-auto cursor-pointer ${darkMode ? "text-[#b8add2]" : "text-[#7a6eaa]"}`}
                      >
                        Voting
                      </a>
                    </div>
                    <div className={` ${darkMode?"hover:bg-[#353547]":"hover:bg-slate-200"} rounded-lg`}>
                      <a
                        href="#"
                        className={`rounded-t-[8px] items-center border-0 font-[400] flex text-[16px] h-[48px] justify-between px-[16px] w-full pointer-events-auto cursor-pointer ${darkMode ? "text-[#b8add2]" : "text-[#7a6eaa]"}`}
                      >
                        Leaderboard
                      </a>
                    </div>
                    <div className={` ${darkMode?"hover:bg-[#353547]":"hover:bg-slate-200"} rounded-lg`}>
                      <a
                        href="#"
                        className={`rounded-t-[8px] items-center border-0 font-[400] flex text-[16px] h-[48px] justify-between px-[16px] w-full pointer-events-auto cursor-pointer ${darkMode ? "text-[#b8add2]" : "text-[#7a6eaa]"}`}
                      >
                          
                          Pancakaes Protector
                          <img src={exit} width={20} />
                      </a>
                    </div>
                    <div className={` ${darkMode?"hover:bg-[#353547]":"hover:bg-slate-200"} rounded-lg`}>
                      <a
                        href="#"
                        className={`rounded-t-[8px] items-center border-0 font-[400] flex text-[16px] h-[48px] justify-between px-[16px] w-full pointer-events-auto cursor-pointer ${darkMode ? "text-[#b8add2]" : "text-[#7a6eaa]"}`}
                      >
                          <div className="flex">

                            Blog
                          </div>
                          <div className="flex">

                            <img src={exit} width={20} />
                          </div>
                      </a>
                    </div>
                    <div className={` ${darkMode?"hover:bg-[#353547]":"hover:bg-slate-200"} rounded-lg`}>
                      <a
                        href="#"
                        className={`rounded-t-[8px] items-center border-0 font-[400] flex text-[16px] h-[48px] justify-between px-[16px] w-full pointer-events-auto cursor-pointer ${darkMode ? "text-[#b8add2]" : "text-[#7a6eaa]"}`}
                      >
                          <div className="flex">
                            Docs
                          </div>
                          <div className="flex">
                            <img src={exit} width={20} alt="" />
                          </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right sided nav */}
          <div className="flex items-center h-full">
            <div height="100%" className="flex items-center">
              {/* logo */}
              <div className="mr-[12px]">
                <a className="decoration-0 flex group ">
                  <img src={logoface} className="w-[24px] mr-[8px] group-hover:scale-125 transition-all duration-200" />
                  <div className="font-[600px] text-[#7a6eaa] text-[16px] ">
                    $1.839
                  </div>
                </a>
              </div>
              {/* language */}
              <div className="relative dsUdvo ">
                <button className="ghj" >
                  <img src={language} width={24} />
                </button>
                <div className={`${darkMode?"bg-[#27262c]":"bg-white"} languageU sc-ee5ec6ea-0`}>
                  <button className={`hover:opacity-70 ${darkMode?"text-white":" text-[#280d5f] "} ` }>বাংলা</button>
                  <button className={`hover:opacity-70 ${darkMode?"text-white":" text-[#280d5f] "} ` }>العربية</button>
                  <button className={`hover:opacity-70 ${darkMode?"text-white":" text-[#280d5f] "} ` }>English</button>
                  <button className={`hover:opacity-70 ${darkMode?"text-white":" text-[#280d5f] "} ` }>Deutsch</button>
                  <button className={`hover:opacity-70 ${darkMode?"text-white":" text-[#280d5f] "} ` }>Ελληνικά</button>
                  <button className={`hover:opacity-70 ${darkMode?"text-white":" text-[#280d5f] "} ` }>Español</button>
                  <button className={`hover:opacity-70 ${darkMode?"text-white":" text-[#280d5f] "} ` }>Suomalainen</button>
                  <button className={`hover:opacity-70 ${darkMode?"text-white":" text-[#280d5f] "} ` }>Filipino</button>
                  <button className={`hover:opacity-70 ${darkMode?"text-white":" text-[#280d5f] "} ` }>Français</button>
                  <button className={`hover:opacity-70 ${darkMode?"text-white":" text-[#280d5f] "} ` }>हिंदी</button>
                  <button className={`hover:opacity-70 ${darkMode?"text-white":" text-[#280d5f] "} ` }>Magyar</button>
                  <button className={`hover:opacity-70 ${darkMode?"text-white":" text-[#280d5f] "} ` }>Bahasa Indonesia</button>
                  <button className={`hover:opacity-70 ${darkMode?"text-white":" text-[#280d5f] "} ` }>Italiano</button>
                  <button className={`hover:opacity-70 ${darkMode?"text-white":" text-[#280d5f] "} ` }>日本語</button>
                  <button className={`hover:opacity-70 ${darkMode?"text-white":" text-[#280d5f] "} ` }>한국어</button>
                  <button className={`hover:opacity-70 ${darkMode?"text-white":" text-[#280d5f] "} ` }>Nederlands</button>
                  <button className={`hover:opacity-70 ${darkMode?"text-white":" text-[#280d5f] "} ` }> Polski</button>
                </div>
              </div>
              {/* setting */}
              <div className="flex">
                <div className="p-[2px] w-[32px] mr-[12px]">
                  <img src={setting} alt="setting img" onClick={()=>setShowModel(true)} />
                </div>
              </div>
              {/* bnb smart chain */}
              <div className="h-[70px] relative" onMouseLeave={()=>{setDropDown6(false)}}>
                  <div className="flex items-center mr-[8px] h-full">
                      <div className={`inline-flex items-center ${darkMode?"bg-[#353547]":"bg-[#eff4f5]"} rounded-[16px] h-[32px] pl-[32px] pr-[8px] relative `} onMouseEnter={()=>{setDropDown6(true)}} >
                        <div className="left-0 top-0 absolute z-102 max-h-[32px] max-w-[32px] w-full ">
                          <img src={img1} alt="image" />
                        </div>
                        <div className={` ml-[8px] mr-[4px] font-[600]  block items-center `}>
                          <div className={`${darkMode ?"text-[#fff]":"text-[#280d5f]"}`}>BNB Smart Chain</div>
                        </div>
                        {
                          darkMode?(
                            <span className=" w-[24px] p-0">
                              <img src={dropWhite} alt="drop image " width={24} />
                            </span>
                          ):(
                            <span className=" w-[24px] p-0">
                              <img src={drop} alt="drop image " width={24} />
                            </span>
                          )
                        }
                      </div>
                      <div>
                      <div className={`${dropDown6 ? "block":"hidden"} coin_dropdown  ${!darkMode ? "bg-[white] border-[1px] border-solid border-[#e7e3eb]" :"bg-[#27262c] border-[1px] border-solid border-[#383241]"}`}  >
                        <div className={` rounded-t-[8px] items-center ${!darkMode ? "bg-[white] border-b-[1px] border-solid border-[#e7e3eb]" :"bg-[#27262c] border-b-[1px] border-solid border-[#383241]"} t-[400] flex text-[16px] h-[48px] justify-between px-[16px] w-full pointer-events-auto  cursor-pointer ${darkMode ? "text-[#b8add2]" : "text-[#7a6eaa]"}`}>Select a NetWork</div>
                        <div className={` ${darkMode?"hover:bg-[#353547]":"hover:bg-slate-200"} rounded-lg`}>
                          <a
                            href="#"
                            className={`rounded-t-[8px] items-center border-0 font-[600] flex text-[16px] h-[48px] gap-[5px] px-[16px] w-full pointer-events-auto  cursor-pointer tracking-wide text-[#9a6aff] `}
                          >
                            <img src={bnb}  width={30} alt=""/>
                            BNB Smart Chain
                          </a>
                        </div>
                        <div className={` ${darkMode?"hover:bg-[#353547]":"hover:bg-slate-200"} rounded-lg`}>
                          <a
                            href="#"
                            className={`rounded-t-[8px] items-center tracking-wide border-0 font-[400] flex text-[16px] h-[48px] gap-[5px]   px-[16px] w-full pointer-events-auto cursor-pointer ${darkMode ? "text-[#b8add2]" : "text-[#7a6eaa]"} `}
                          >
                            <img src={ethereum} width={30} />
                            Ethereum
                          </a>
                        </div>
                        <div className={` ${darkMode?"hover:bg-[#353547]":"hover:bg-slate-200"} rounded-lg`}>
                          <a
                            href="#"
                            className={`rounded-t-[8px] items-center tracking-wide border-0 font-[400] flex text-[16px] gap-[5px] h-[48px] px-[16px] w-full pointer-events-auto cursor-pointer ${darkMode ? "text-[#b8add2]" : "text-[#7a6eaa]"} `}
                          >
                            <img src={aptos} width={30} />
                            Aptos
                          </a>
                        </div>
                      </div>
                      </div>
                  </div>
              </div>
              <div>
                <button className="rounded-[16px] items-center tracking-[0.03rem] px-3 text-[16px] font-[600] py-[3px] bg-[#1fc7d4] text-white realtive hover:bg-[#37d6e1] ">
                  Connect Wallet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Model isVisible={showModel} onClose={()=>{setShowModel(false)}} darkMode={darkMode} setDarkMode={setDarkMode}/>
    </Fragment>
  );
}
export default Navbar;
