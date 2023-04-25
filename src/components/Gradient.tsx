import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { collection, color } from "../types/types";

const Gradient = ({ collection }: any) => {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    change: string,
    index: number
  ) => {
    switch (change) {
      case "color":
        collection.setColors(
          (prev: color[]) =>
            (prev[index] = { ...prev[index], color: e.currentTarget.value })
        );
        break;
      case "stop":
        collection.setColors(
          (prev: color[]) =>
            (prev[index] = { ...prev[index], stop: parseInt(e.target.value) })
        );
        break;
    }
  };

  useEffect(() => {
    console.log(collection);
  }, [collection]);

  const handleColors = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="w-1/2 h-full flex flex-col justify-center items-center">
      <div className=" lg:h-[20rem] lg:w-[30rem] h-[12rem] w-[18rem] from-white to-blue-500 via-black rounded-xl border-2 border-slate-500 " />
      <form action="" className=" w-1/2 h-1/2">
        {collection.colors.map((color: any) => {
          return (
            <>
              <input
                type="color"
                required
                value={color}
                className="w-20 h-20 block"
                // value={collection.colors[0].color}
                onChange={(e) => handleChange(e, "color", 0)}
              />
              <input
                type="number"
                required
                max={100}
                min={0}
                className="bg-[#252525]"
                // value={collection.colors[0].stop}
                onChange={(e) => handleChange(e, "stop", 0)}
              />
            </>
          );
        })}
      </form>
    </div>
  );
};

export default Gradient;
