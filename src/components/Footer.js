import React, { useState } from "react";
import logoWhite from "../assests/logoWhite.svg";
import twitter from "../assests/twitter.svg";
import telegram from "../assests/telegram.svg";
import raddit from "../assests/raddit.svg";
import insta from "../assests/insta.svg";
import git from "../assests/git.svg";
import discord from "../assests/discord.svg";
import youtube from "../assests/youtube.svg";
import language from "../assests/langauge.svg";
import logoFace from "../assests/logoface.svg";
import arrow from "../assests/arrow.svg";
import arrowDark from "../assests/arrowDark.svg";
import Dark from "./Dark";
function Footer(props) {
  const footer = true;
  const darkMode = props.darkMode;
  const setDarkMode = props.setDarkMode;
  const [selected, isSelected] = useState(false);
  const dropHandler = () => {
    isSelected(!selected);
  };
  return (
    <div className="bg-[#27262c] flex relative justify-center mb-0 p-[56px_40px_32px] ">
      <div className="flex flex-col w-[1200px] ">
        <div className="order-1 flex flex-row justify-between items-start mb-[36px] ">
          <ul className="list-none mb-0">
            <li className="font-[600] uppercase text-[#9a6aff] text-[16px] mb-[8px] ">
              About
            </li>
            <li className="text-[16px] mb-[8px] capitalize hover:underline">
              <a
                href="#"
                className="flex items-center w-fit text-[#ffb237] font-[400] leading[1.5] text-[16px] "
              >
                Contact
              </a>
            </li>
            <li className="text-[16px] mb-[8px] capitalize hover:underline">
              <a
                href="#"
                className="flex items-center w-fit text-white font-[400] leading[1.5] text-[16px] "
              >
                Brand
              </a>
            </li>
            <li className="text-[16px] mb-[8px] capitalize hover:underline">
              <a
                href="#"
                className="flex items-center w-fit text-white font-[400] leading[1.5] text-[16px] "
              >
                Blog
              </a>
            </li>
            <li className="text-[16px] mb-[8px] capitalize hover:underline">
              <a
                href="#"
                className="flex items-center w-fit text-white font-[400] leading[1.5] text-[16px] "
              >
                Community
              </a>
            </li>
            <li className="text-[16px] mb-[8px] capitalize hover:underline">
              <a
                href="#"
                className="flex items-center w-fit text-white font-[400] leading[1.5] text-[16px] "
              >
                Litepaper
              </a>
            </li>
            <li className="text-[16px] mb-[8px] capitalize hover:underline">
              <a
                href="#"
                className="flex items-center w-fit text-white font-[400] leading[1.5] text-[16px] "
              >
                terms of service
              </a>
            </li>
          </ul>
          <ul className="list-none mb-0">
            <li className="font-[600] uppercase text-[#9a6aff] text-[16px] mb-[8px] ">
              help
            </li>
            <li className="text-[16px] mb-[8px] capitalize hover:underline">
              <a
                href="#"
                className="flex items-center w-fit text-[white] font-[400] leading[1.5] text-[16px] "
              >
                Customer support
              </a>
            </li>
            <li className="text-[16px] mb-[8px] capitalize hover:underline">
              <a
                href="#"
                className="flex items-center w-fit text-white font-[400] leading[1.5] text-[16px] "
              >
                Troubleshooting
              </a>
            </li>
            <li className="text-[16px] mb-[8px] capitalize hover:underline">
              <a
                href="#"
                className="flex items-center w-fit text-white font-[400] leading[1.5] text-[16px] "
              >
                Guides
              </a>
            </li>
          </ul>
          <ul className="list-none mb-0">
            <li className="font-[600] uppercase text-[#9a6aff] text-[16px] mb-[8px] ">
              DEVELOPERS
            </li>
            <li className="text-[16px] mb-[8px] capitalize hover:underline">
              <a
                href="#"
                className="flex items-center w-fit text-[white] font-[400] leading[1.5] text-[16px] "
              >
                Github
              </a>
            </li>
            <li className="text-[16px] mb-[8px] capitalize hover:underline">
              <a
                href="#"
                className="flex items-center w-fit text-white font-[400] leading[1.5] text-[16px] "
              >
                Documentation
              </a>
            </li>
            <li className="text-[16px] mb-[8px] capitalize hover:underline">
              <a
                href="#"
                className="flex items-center w-fit text-white font-[400] leading[1.5] text-[16px] "
              >
                Bug Bounty
              </a>
            </li>
            <li className="text-[16px] mb-[8px] capitalize hover:underline">
              <a
                href="#"
                className="flex items-center w-fit text-white font-[400] leading[1.5] text-[16px] "
              >
                Audits
              </a>
            </li>
            <li className="text-[16px] mb-[8px] capitalize hover:underline">
              <a
                href="#"
                className="flex items-center w-fit text-white font-[400] leading[1.5] text-[16px] "
              >
                Careers
              </a>
            </li>
          </ul>
          <div className="block w-[160px]">
            <img src={logoWhite} alt="logoWhite" />
          </div>
        </div>
        <div className="order-2 flex border-b-[1px] border-b-[solid] border-b-[#383241] pb-[32px] mb-[32px]  ">
          <a
            href="#"
            className=" flex items-center w-fit font-[600] leading-[1.5 mr-[24px] text-[16px] no-underline"
          >
            <img
              className="cursor-pointer"
              width={20}
              src={twitter}
              alt="links"
            />
          </a>
          <a
            href="#"
            className=" flex items-center w-fit font-[600] leading-[1.5 mr-[24px] text-[16px] no-underline"
          >
            <img
              className="cursor-pointer"
              width={20}
              src={telegram}
              alt="links"
            />
          </a>
          <a
            href="#"
            className=" flex items-center w-fit font-[600] leading-[1.5 mr-[24px] text-[16px] no-underline"
          >
            <img
              className="cursor-pointer"
              width={20}
              src={raddit}
              alt="links"
            />
          </a>
          <a
            href="#"
            className=" flex items-center w-fit font-[600] leading-[1.5 mr-[24px] text-[16px] no-underline"
          >
            <img
              className="cursor-pointer"
              width={20}
              src={insta}
              alt="links"
            />
          </a>
          <a
            href="#"
            className=" flex items-center w-fit font-[600] leading-[1.5 mr-[24px] text-[16px] no-underline"
          >
            <img className="cursor-pointer" width={20} src={git} alt="links" />
          </a>
          <a
            href="#"
            className=" flex items-center w-fit font-[600] leading-[1.5 mr-[24px] text-[16px] no-underline"
          >
            <img
              className="cursor-pointer"
              width={20}
              src={discord}
              alt="links"
            />
          </a>
          <a
            href="#"
            className=" flex items-center w-fit font-[600] leading-[1.5 mr-[24px] text-[16px] no-underline"
          >
            <img
              className="cursor-pointer"
              width={20}
              src={youtube}
              alt="links"
            />
          </a>
        </div>
        <div className="order-3 flex flex-row justify-between ">
          <div className="order-1 flex items-center justify-center">
            <Dark
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              footer={footer}
            />
            <div className="relative dsUdvo">
              <button className="ghj" onClick={dropHandler}>
                <img src={language} width={24} />
                <div className="text-[#b8add2] pl-[10px] font-[400] leading-[1.5] text-[16px] ">
                  EN
                </div>
              </button>
              {selected && (
                <div className="languageD sc-ee5ec6ea-0">
                  <button className="hover:opacity-70">বাংলা</button>
                  <button className="hover:opacity-70">العربية</button>
                  <button className="hover:opacity-70">English</button>
                  <button className="hover:opacity-70">Deutsch</button>
                  <button className="hover:opacity-70">Ελληνικά</button>
                  <button className="hover:opacity-70">Español</button>
                  <button className="hover:opacity-70">Suomalainen</button>
                  <button className="hover:opacity-70">Filipino</button>
                  <button className="hover:opacity-70">Français</button>
                  <button className="hover:opacity-70">हिंदी</button>
                  <button className="hover:opacity-70">Magyar</button>
                  <button className="hover:opacity-70">Bahasa Indonesia</button>
                  <button className="hover:opacity-70">Italiano</button>
                  <button className="hover:opacity-70">日本語</button>
                  <button className="hover:opacity-70">한국어</button>
                  <button className="hover:opacity-70">Nederlands</button>
                  <button className="hover:opacity-70"> Polski</button>
                </div>
              )}
            </div>
          </div>
          <div className="order-2 flex justify-bertween items-centermb-0 ">
            <div className="mr-[20px] ">
              <a
                href="#"
                className="flex items-center no-underline "
                target="_blank"
              >
                <img
                  src={logoFace}
                  width={30}
                  className="mr-[8px] items-center hover:scale-[1.2] transition-transform duration-[0.3] "
                />
                <div className="font-[600] text-[16px] leading-[1.5] text-[#b8add2]">
                  $1.788
                </div>
              </a>
            </div>
            <a
              className="relative hover:opacity-60 inline-flex  items-center border-0 rounded-[16px] cursor-pointer text-[16px] font-[600] justify-center tracing-[0.03] leading-[1] text-white bg-[#1fc7d4] px-[16px] h-[32px] "
              href="#"
            >
              <div
                className={` ${
                  darkMode ? "text-[#191326] " : "text-white"
                } font-[600] leading-[1.5] text-[16px] `}
              >
                Buy CAKE
              </div>
              {darkMode ? (
                <img src={arrowDark} className="ml-[0.5rem]" />
              ) : (
                <img src={arrow} className="ml-[0.5rem]" />
              )}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
