import React, { ChangeEvent, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { shadow, shadows } from "../types/types";

import "react-toastify/dist/ReactToastify.css";

import {
  CircularInput,
  CircularTrack,
  useCircularInputContext,
  CircularProgress,
  CircularThumb,
} from "react-circular-input";

const Box = ({ shadows }: any) => {
  // const { getPointFromValue, value } = useCircularInputContext();
  // const point = getPointFromValue();

  const handleChange = (e: ChangeEvent<HTMLInputElement>, key: string) => {
    switch (key) {
      case "hOffset":
        shadows.setShadow((prev: shadow) => {
          return (prev = { ...prev, hOffset: parseInt(e.target.value) });
        });
        break;
      case "vOffset":
        shadows.setShadow((prev: shadow) => {
          return (prev = { ...prev, vOffset: parseInt(e.target.value) });
        });
        break;
      case "blur":
        shadows.setShadow((prev: shadow) => {
          return (prev = { ...prev, blur: parseInt(e.target.value) });
        });
        break;
      case "spread":
        shadows.setShadow((prev: shadow) => {
          return (prev = { ...prev, spread: parseInt(e.target.value) });
        });
        break;
      case "color":
        shadows.setShadow((prev: shadow) => {
          return (prev = { ...prev, color: e.target.value });
        });
        break;
      case "boxColor":
        shadows.setShadow((prev: shadow) => {
          return (prev = { ...prev, boxColor: e.target.value });
        });
        break;
    }
  };

  const assembleString = () => {
    const arr = [];
    for (const key in shadows.shadow) {
      if (key != "boxColor") {
        arr.push(shadows.shadow[key]);
      }
    }
    const values = arr.join("px ");
    return values;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`
    box-shadow: ${assembleString()}
    -webkit-box-shadow: ${assembleString()}  
    -moz-box-shadow: ${assembleString()}`);
    toast.success("Text Copied", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        limit={5}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="flex flex-col gap-12 lg:gap-0 lg:flex-row items-center justify-evenly w-full">
        <div
          className=" lg:h-[20rem] lg:w-[20rem] h-[12rem] w-[12rem] rounded-xl "
          style={{
            boxShadow: assembleString(),
            backgroundColor: shadows.shadow.boxColor,
          }}
        ></div>
        <div className="flex flex-col gap-2 w-1/2">
          <label htmlFor="hOffset">Horizontal Offset</label>
          <div className="flex">
            <input
              id="hOffset"
              type="range"
              className="w-full"
              max={100}
              min={-100}
              placeholder="horizontal"
              value={shadows.shadow.hOffset}
              onChange={(e) => handleChange(e, "hOffset")}
            />
            <input
              id="hOffset"
              type="number"
              className="w-12 text-center"
              placeholder="horizontal"
              value={shadows.shadow.hOffset}
              onChange={(e) => handleChange(e, "hOffset")}
            />
          </div>
          <label htmlFor="vOffset">Vertical Offset</label>
          <div className="flex">
            <input
              id="vOffset"
              type="range"
              className="w-full"
              max={100}
              min={-100}
              value={shadows.shadow.vOffset}
              onChange={(e) => handleChange(e, "vOffset")}
              placeholder="vertical"
            />
            <input
              id="vOffset"
              type="number"
              className="w-12 text-center"
              value={shadows.shadow.vOffset}
              onChange={(e) => handleChange(e, "vOffset")}
              placeholder="vertical"
            />
          </div>
          <label htmlFor="blur">Blur</label>
          <div className="flex">
            <input
              id="blur"
              type="range"
              className="w-full"
              max={100}
              value={shadows.shadow.blur}
              onChange={(e) => handleChange(e, "blur")}
            />
            <input
              id="blur"
              type="number"
              className="w-12 text-center"
              value={shadows.shadow.blur}
              onChange={(e) => handleChange(e, "blur")}
            />
          </div>
          <label htmlFor="spread">Spread</label>
          <div className="flex">
            <input
              id="spread"
              type="range"
              className="w-full"
              max={100}
              min={-100}
              value={shadows.shadow.spread}
              onChange={(e) => handleChange(e, "spread")}
            />
            <input
              id="spread"
              type="number"
              className="w-12 text-center"
              value={shadows.shadow.spread}
              onChange={(e) => handleChange(e, "spread")}
            />
          </div>
          <div className="rounded-lg w-full gap-8 h-full flex ">
            <div className="flex w-fit flex-col items-center justify-between ">
              <label htmlFor="color">Shadow's Color</label>
              <input
                id="color"
                type="color"
                className="h-20 w-20"
                value={shadows.shadow.color}
                onChange={(e) => handleChange(e, "color")}
              />
            </div>
            <div className="flex flex-col items-center justify-between ">
              <label htmlFor="boxColor">Box's Color</label>
              <input
                id="boxColor"
                type="color"
                className="h-20 w-20"
                value={shadows.shadow.boxColor}
                onChange={(e) => handleChange(e, "boxColor")}
              />
            </div>
          </div>
          <div className="flex flex-col mt-4 gap-8 justify-start items-start ">
            <div>
              <p>box-shadow: {assembleString()}</p>
              <p>-webkit-box-shadow: {assembleString()}</p>
              <p>-moz-box-shadow: {assembleString()}</p>
            </div>
            <button
              className="px-4 py-2 rounded-lg bg-green-500 "
              onClick={handleCopy}
            >
              copy
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Box;
