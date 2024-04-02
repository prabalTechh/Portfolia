/* eslint-disable no-unused-vars */
import React from 'react'
import gameon from "../assets/Game On.jpg"
import { FaAngleDown } from "react-icons/fa";
const Home = () => {
  return (
    <>
    <div className=" ">
<img src={gameon} alt="" className="h-[550px] w-[450px]" />
</div>
<div className=" relative top-[-31rem] left-[7px] w-fit "><h1 className="text-8xl tracking-tighter  font-oswald  text-white ">DEVELOPER</h1></div>
<div  className="relative left-3 text-2xl">
    <FaAngleDown />
</div>
</>
  )
}

export default Home
