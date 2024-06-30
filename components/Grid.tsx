"use client";
import React from "react";
import { BackgroundGradient } from "./ui/BackgrounGradient";
import { skills } from "@/data";
import { Button } from "./ui/MovingBorders";

const Grid = () => {
  return (
    <div className="flex justify-center">
      <div className=""> {/* Adjust width for large devices */}
        <BackgroundGradient className="rounded-[22px] sm:max-w-md  sm:p-5  dark:bg-gray-900 lg:min-w-[70vw] abosulte " containerClassName="w-[70.6vw] " > {/* Ensure BackgroundGradient spans full width */}
        <p className="text-base sm:text-xl mt-4 mb-6 text-custom-light dark:text-custom-dark">
            My Tech Skills
          </p>
          <div className="grid ml-16  lg:grid-cols-8 gap-2 "> {/* Adjust grid-cols to 4 columns on large devices */}
            {skills.map((skill) => (
              <Button
                key={skill.id}
                borderRadius=".15rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white  border-neutral-200 dark:border-slate-800 p-2  text-center lg:text-2xl md:text-xl sm:text-sm -tracking-tight text-wrap" 
                style={{witdth:'5px'}}
              >
                {skill.name}
              </Button>
            ))}
          </div>
        </BackgroundGradient>
      </div>
    </div>
  );
};

export default Grid;
