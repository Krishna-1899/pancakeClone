// import React from "react";
import React, { useState } from "react";
import moonLight from "../assests/moonLight.svg";
import yellowSun from "../assests/yellowSun.svg";
import help from "../assests/help.svg";
import Dark from "./Dark";
import "./switch.css";
function Model(props) {
  const [isToggled, setIsToggled] = useState(false);
  const [selectedButton, setSelectedButton] = useState(1);
  const isVisible = props.isVisible;
  const onClose = props.onClose;
  const darkMode = props.darkMode;
  const setDarkMode = props.setDarkMode;
  if (!isVisible) return null;
  const handleClose = (e) => {
    if (e.target.id == "wrapper") onClose();
  };

  const onToggle = () => {
    setIsToggled(!isToggled);
  };

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center z-[1000] ${
        darkMode ? "bg-[#f4eeff99]" : "bg-[#280d5f99]"
      }`}
      id="wrapper"
      onClick={handleClose}
    >
      <div></div>
      <div
        className={`overflow-visible w-fit bottom-auto rounded-[32px] opacity-[1] max-h-[100vh] ${
          darkMode
            ? "bg-[#27262c] border-[#383241_1px_solid] "
            : "border-[#ffff_1px_solid] bg-[#fff]"
        }  min-h-[300px] `}
      >
        <div className="overflow-hidden min-w-[320px]  rounded-[32px] ">
          <div
            className={`${
              darkMode
                ? "bg-[linear-gradient(166.77deg,#3b4155,#3a3045)] border-b-[1px_solid_#383241] "
                : "bg-[linear-gradient(111.68deg,#f2ecf2,#e8f2f6)] border-b-[1px_solid_#e7e3eb]"
            } flex p-[12px_24px]`}
          >
            <div className={`items-center flex flex-[1_1_0%]`}>
              <h2
                className={`text-[20px] font-[600] leading-[1.1] ${
                  darkMode ? "text-[#f4eeff]" : "text-[#280d5f]"
                }`}
              >
                Settings
              </h2>
            </div>
            <button
              className="p-[2px] w-[48px] border-0 cursor-pointer relative items-center rounded-[16px] inline-flex justify-center text-[#1fc7d4] text-xl"
              onClick={() => onClose()}
            >
              x
            </button>
          </div>
          <div
            className={`flex max-h-[90vh] flex-col overflow-hidden p-[24px] `}
          >
            <div className="flex flex-col h-auto max-h-[auto]">
              <div className="flex flex-col pb-[24px] ">
                <div className="text-[#9a6aff] font-[600] leading-[1.5] uppercase mb-[24px] text-[12px]">
                  {" "}
                  Global
                </div>
                <div className="flex justify-between items-center mb-[24px] ">
                  <div
                    className={`${
                      darkMode ? "text-[#f4eeff]" : "text-[#280d5f]"
                    } font-[400] leading-[1.5] text-[16px] `}
                  >
                    Dark mode
                  </div>
                  <Dark darkMode={darkMode} setDarkMode={setDarkMode} />
                </div>
                <div className="flex justify-between items-center mb-[24px] ">
                  <div className="flex items-center">
                    <div
                      className={`${
                        darkMode ? "text-[#f4eeff]" : "text-[#280d5f]"
                      } font-[400] leading-[1.5] text-[16px] `}
                    >
                      Subgraph Health Indicator
                    </div>
                    <div className="flex items-center ml-[4px] ">
                      <img src={help} width={16} />
                    </div>
                  </div>
                  <div className="flex">
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={isToggled}
                        onChange={onToggle}
                      />
                      <span className="switch" />
                    </label>
                  </div>
                </div>
                {/* <div id="Dark_Mode_component"></div> */}
                <div className="flex justify-between  items-center mb-[24px] ">
                  <div className="flex items-center">
                    <div
                      className={`${
                        darkMode ? "text-[#f4eeff]" : "text-[#280d5f]"
                      } font-[400] leading-[1.5] text-[16px] `}
                    >
                      Show username
                    </div>
                    <div className="flex items-center ml-[4px] ">
                      <img src={help} width={16} />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center  mb-[24px] ">
                  <div className="flex items-center">
                    <div
                      className={`${
                        darkMode ? "text-[#f4eeff]" : "text-[#280d5f]"
                      } font-[400] leading-[1.5] text-[16px] `}
                    >
                      Token Risk Scanning
                    </div>
                    <div className="flex items-center ml-[4px] ">
                      <img src={help} width={16} />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center mb-[12px] ">
                    <div
                      className={`font-[400] text-[16px]  leading-[1.5] ${
                        darkMode ? "text-[#f4eeff]" : "text-[#280d5f]"
                      }`}
                    >
                      Default Transaction Speed (GWEI)
                    </div>
                    <div className="flex items-center ml-[4px] ">
                      <img src={help} width={16} />
                    </div>
                  </div>
                  <div className="flex flex-wrap">
                    <button
                      className={`relative items-center border-0 rounded-[16px] cursor-pointer inline-flex tracking-[0.03rem] font-[600] justify-center leading-[1] h-[32px] px-[16px] mt-[4px] mr-[4px]  text-[#fff]`}
                      onClick={() => handleButtonClick(1)}
                      style={{
                        backgroundColor:
                          selectedButton === 1 ? "#1fc7d4" : "#eff4f5",
                        color: selectedButton === 1 ? "#fff" : "#1fc7d4",
                      }}
                    >
                      Default
                    </button>
                    <button
                      className={`relative items-center border-0 rounded-[16px] cursor-pointer inline-flex tracking-[0.03rem] font-[600] justify-center leading-[1] h-[32px] px-[16px] mt-[4px] mr-[4px]  text-[#fff]`}
                      onClick={() => handleButtonClick(2)}
                      style={{
                        backgroundColor:
                          selectedButton === 2 ? "#1fc7d4" : "#eff4f5",
                        color: selectedButton === 2 ? "#fff" : "#1fc7d4",
                      }}
                    >
                      Standard(3)
                    </button>
                    <button
                      className={`relative items-center border-0 rounded-[16px] cursor-pointer inline-flex tracking-[0.03rem] font-[600] justify-center leading-[1] h-[32px] px-[16px] mt-[4px] mr-[4px] text-[#fff]`}
                      onClick={() => handleButtonClick(3)}
                      style={{
                        backgroundColor:
                          selectedButton === 3 ? "#1fc7d4" : "#eff4f5",
                        color: selectedButton === 3 ? "#fff" : "#1fc7d4",
                      }}
                    >
                      Fast(4)
                    </button>
                    <button
                      className={`relative items-center border-0 rounded-[16px] cursor-pointer inline-flex tracking-[0.03rem] font-[600] justify-center leading-[1] h-[32px] px-[16px] mt-[4px] mr-[4px]  text-[#fff]`}
                      onClick={() => handleButtonClick(4)}
                      style={{
                        backgroundColor:
                          selectedButton === 4 ? "#1fc7d4" : "#eff4f5",
                        color: selectedButton === 4 ? "#fff" : "#1fc7d4",
                      }}
                    >
                      Instant(5)
                    </button>
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

export default Model;
