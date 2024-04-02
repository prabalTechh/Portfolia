/* eslint-disable no-unused-vars */
import React from "react";
import First from "./FIrst";
import { GrProjects } from "react-icons/gr";
import { IoHome, IoSettings,IoNewspaperOutline } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import MidDiv from "./MidDiv";
import { FaHammer } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="container relative h-full  grid   grid-cols-[18%_45%_6%] justify-center gap-16">
        <div className="  flex justify-center items-center gap-4">
        <div className="flex flex-col items-center gap-20 pt-10 h-[95vh] w-[300px] border-2  border-gray-200 rounded-full fixed  ">
            <First />
          </div>
        </div>
        <div className="container border-2 border-gray-200 rounded-xl flex flex-col justify-center items-center h-[100vh]  ">
          <MidDiv />
        </div>
        <div className="  flex items-center justify-center  ">
          <div className=" flex flex-col gap-16 item-center justify-center  h-[500px] rounded-t-full p-5 border-2 border-gray-200 text-xl ">
            
                <button className="home bg-zinc-500 rounded-full p-2"><IoHome /></button>
                <button className="skills bg-neutral-500 rounded-full p-2"><FaHammer /></button>
                <button className="projects bg-orange-600 rounded-full p-2"><GrProjects /></button>
                <button className="blogs bg-blue-500 rounded-full p-2"><IoNewspaperOutline /> </button>
                <button className="contact bg-pink-700 rounded-full p-2"><FaPhoneVolume /></button>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
