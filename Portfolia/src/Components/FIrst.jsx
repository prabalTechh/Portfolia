// eslint-disable-next-line no-unused-vars
import React from "react";
import twit from "../assets/twitter.png";
import link from "../assets/linkedlinlogo.png";
import git1 from "../assets/git-1.png";

// import {git2} from "../assets/git-2.png"

const First = () => {
  var myname = "PRABAL CHANPURIA";
  return (
    <>
      <div className="h-[200px] w-[200px] rounded-full   bg-[url(https://picsum.photos/id/237/200/200)] object-cover"></div>
      <div className="flex flex-col gap-20">
        <p className="text-2xl font-bold  ">{myname}</p>
        <ul className="flex   items-center justify-evenly">
          <li>
            <img src={link} alt="" className=" h-10 w-10" />
          </li>
          <li>
            <img src={git1} alt="" className=" h-10 w-10" />
          </li>
          <li>
            <img src={twit} alt="" className=" h-10 w-10" />
          </li>
        </ul>

        <button className="py-2 flex justify-center items-center  text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
        Resume Cv
      </button>
      </div>
     
    </>
  );
};

export default First;
